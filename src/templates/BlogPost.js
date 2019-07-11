import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../pages/normalize.css";
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";
import MobileNav from "../components/MobileNav";
import BlogPageIntro from "../components/BlogPageIntro";
import BlogSubheader from "../components/BlogSubheader";
import Signature from "../components/Signature";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const ContentWrapper = styled.div`
  padding: 15px;
  width: 88%;
  max-width: 1125px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogParagraph = styled.div`
  font-family: "Montserrat", "Helvetica", sans-serif;
  margin: 14px auto;
  max-width: 1125px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 27px;
  color: #353535;

  img {
    width: 100%;
    height: auto;
    max-width: 650px;
  }
  pre code {
    display: block;
    padding: 8px 18px;
  }
  code {
    padding: auto 8px;
    background-color: #e9e9e9;
    border: 1px solid #888;
    border-radius: 5px;
  }

  @media (min-width: 820px) {
    width: 80%;
    font-size: 1.1em;
  }
`;

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.openMobileNav = this.openMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);

    this.state = {
      mobileNavIsOpen: false
    };
  }

  openMobileNav() {
    this.setState({
      mobileNavIsOpen: true
    });
  }

  closeMobileNav() {
    this.setState({
      mobileNavIsOpen: false
    });
  }

  render() {
    const post = this.props.data.markdownRemark
    console.log(post.html)
    return (
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{post.frontmatter.title} - Ali T. Atici</title>
          <link
            rel="stylesheet"
            src="//normalize-css.googlecode.com/svn/trunk/normalize.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
            rel="stylesheet"
          />
        </Helmet>
        <MobileNav
          action={this.closeMobileNav}
          open={this.state.mobileNavIsOpen}
        />

        <BlogPageIntro
          action={this.openMobileNav}
          headline={post.frontmatter.title}
          bgImg={require('../../content/blog'+ post.fields.slug+'postcover.png')}
        />
        <ContentWrapper>
          <BlogSubheader data={post} />
          <BlogParagraph
            dangerouslySetInnerHTML={{ __html: post.html}}
          />
          <Signature />
        </ContentWrapper>

        <Footer backgroundIsBlack={false} />
      </Container>
    );
  }
}


export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields{
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

