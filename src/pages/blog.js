import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import "./normalize.css";
import Layout from "../templates/layout";
import BlogPreviewCard from "../components/BlogPreviewCard";

const BlogListContainer = styled.div`
  height: auto;
  width: 90%;
  max-width: 1125px;
  margin: 20px auto;
  text-align: center;
`;

const AboutHeadline = styled.h2`
  font-family: "Montserrat", "Helvetica", sans-serif;
  text-align: center;
  letter-spacing: 1px;
  color: #353535;
  @media (min-width: 820px) {
    font-size: 2em;
  }
`;

const BlogPostList = styled.div`
  display: grid;
  grid: auto / auto;
  padding: 0;
  margin: 0 auto;
  width: 95%;
  max-width: 1125px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  @media (min-width: 820px) {
    width: 760px;
    margin: auto;
    grid: auto / repeat(2, auto);
  }
  @media (min-width: 1270px) {
    width: 1100px;
    grid: auto / repeat(3, auto);
  }
`;

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout
        pageTitle="Blog - "
        headline="Blog"
        className="blogPage"
        backgroundIsBlack={false}
      >
        <BlogListContainer>
          <AboutHeadline>RECENT POSTS</AboutHeadline>
          <BlogPostList>
            {/* create new array of individual blog post preview cards */}
            {posts.map(({ node }) => {
              const blogSlug = `blog${node.fields.slug}`; //set dynamic slug and insert in <Link> component
              return (
                <Link
                  key={node.id}
                  to={blogSlug}
                  style={{
                    textDecoration: "none",
                    margin: "0",
                    padding: "0"
                  }}
                >
                  <BlogPreviewCard key={node.fields.slug} postData={node} />
                </Link>
              );
            })}
          </BlogPostList>
        </BlogListContainer>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {fileAbsolutePath: {regex: "/(blog)/"}}
    ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          subtitle
          description
        }
      }
    }
  }
}
`;
