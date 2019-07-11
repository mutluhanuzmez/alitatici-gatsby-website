const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/BlogPost.js");
    resolve(
      graphql(`
        {
          blogPosts: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
            filter: {fileAbsolutePath: {regex: "/(blog)/"}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  subtitle
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.blogPosts.edges.forEach(edge => {
          createPage({
            path: `blog${edge.node.fields.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });

        return;
      })
    );
  });
};


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}