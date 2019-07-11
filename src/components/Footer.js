import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
`;

const SocialIcons = styled.div`
  width: 280px;
  margin: 38px auto 10px;
  padding-bottom: 0;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconLink = styled.a`
  text-decoration: none;
  outline: 0;
  @media (min-width: 420px) {
    width: 320px;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: auto;
  transition: 0.23s;
  &:hover {
    transform: translate(0px, -6px);
  }
`;

const Copyright = styled.h5`
  /* color defined inline */
  font-family: "Montserrat", "Helvetica", sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 14px auto;
`;

const linkStyles = {
  height: "33px",
  width: "33px",
  padding: "0",
  margin: "0"
};

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <SocialIcons>
          <IconLink
            style={linkStyles}
            href="https://twitter.com/alitalha_"
            target="_blank"
          >
            <Icon
              style={linkStyles}
              src={
                this.props.backgroundIsBlack
                  ? require("../images/icons/twitter-white.svg")
                  : require("../images/icons/twitter-black.svg")
              }
              alt="Twitter"
            />
          </IconLink>
          <IconLink
            style={linkStyles}
            href="https://www.instagram.com/alitlhaa/"
            target="_blank"
          >
            <Icon
              style={linkStyles}
              src={
                this.props.backgroundIsBlack
                  ? require("../images/icons/instagram-logo-white.svg")
                  : require("../images/icons/instagram-logo-black.svg")
              }
              alt="Intstagram"
            />
          </IconLink>
          {/* <IconLink
            style={linkStyles}
            href="https://github.com/jacobdcastro"
            target="_blank"
          >
            <Icon
              style={linkStyles}
              src={
                this.props.backgroundIsBlack
                  ? require("../images/icons/github-logo-white.svg")
                  : require("../images/icons/github-logo-black.svg")
              }
              alt="Github"
            />
          </IconLink> */}
          <IconLink
            style={linkStyles}
            href="https://www.linkedin.com/in/ali-talha-atici-98552bb2/"
            target="_blank"
          >
            <Icon
              style={linkStyles}
              src={
                this.props.backgroundIsBlack
                  ? require("../images/icons/linkedin-logo-white.svg")
                  : require("../images/icons/linkedin-logo-black.svg")
              }
              alt="Linkedin"
            />
          </IconLink>
          {/* <Link href="https://www.medium.com/jacobdcastro" target="_blank"><img className="socialIcon" src="images/icons/medium-logo.svg" alt="Medium" /></a> */}
        </SocialIcons>
        <Copyright
          style={
            this.props.backgroundIsBlack
              ? { color: "white" }
              : { color: "black" }
          }
        >
          &copy; Ali Talha Atici - 2019
        </Copyright>
      </FooterContainer>
    );
  }
}

// create a stateless functional component for footer to import images via gatsby-image and <StaticQuery>

export default Footer;