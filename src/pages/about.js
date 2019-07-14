import React from "react";
import { Link } from "gatsby";
import "./normalize.css";
import Layout from "../templates/layout";
import styled from "styled-components";

const Body = styled.div`
  padding: 15px;
  width: 88%;
  max-width: 1125px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutSection = styled.div`
  max-width: 1025px;
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

const AboutContent = styled.p`
  font-family: "Montserrat", "Helvetica", sans-serif;
  margin: 14px auto;
  max-width: 1125px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 27px;
  color: #353535;

  @media (min-width: 820px) {
    width: 80%;
    font-size: 1.1em;
  }
`;

const MiscLinks = styled.a`
  text-decoration: underline;
  color: inherit;
`;

const linkStyles = {
  color: "black"
};

class About extends React.Component {
  render() {
    return (
      <Layout
        pageTitle="About Me - "
        headline="Who am I"
        className="aboutPage"
        backgroundIsBlack={false}
      >
        <Body>
          <AboutSection>
            <AboutHeadline>About Me</AboutHeadline>
            <AboutContent>
              I am Ali Talha Atici. I was born in Antalya, 1996 and I 
              lived there until I am 18. Then I moved to Istanbul for University. 
              My bachelor degree is Civil Engineering at{" "}
              <MiscLinks href="http://www.yildiz.edu.tr/en" target="_blank">
              Yildiz Technical University
              </MiscLinks>
              . Now, I am studying in 
              {" "}
              <MiscLinks href="http://www.koeri.boun.edu.tr/depmuh_index_eng.aspx" target="_blank">
              BOUN KOERI
              </MiscLinks>{" "}
              Earthquake Engineering Master Program.
            </AboutContent>
            <AboutContent>
              During my undergraduate education, I have gone abroad for studying and internship.
              I have been Czechia as Erasmus Exchange Student in{" "}
              <MiscLinks href="http://www.vstecb.cz/en/" target="_blank">
              VSTE
              </MiscLinks>
              , in the winter semester of the 2016-2017 academic year. Moreover, I have been Oman as a 
              research intern at{" "}
              <MiscLinks href="https://www.squ.edu.om/" target="_blank">
              Sultan Qaboos University
              </MiscLinks>
              , Engineering Faculty through the IAESTE internship program in the summer of 2018. 
              I have worked on energy-saving and airtightness in detached buildings with{" "}
              <MiscLinks href="https://www.researchgate.net/profile/Saleh_Al-Saadi" target="_blank">
              Dr. Saleh Al-Saadi
              </MiscLinks>
              . Also, you can see my work experiences with more detail on{" "}
              <MiscLinks href="https://www.linkedin.com/in/ali-talha-atici-98552bb2/" target="_blank">
              my Linkedin profile
              </MiscLinks>
              .
            </AboutContent>

            <AboutContent>
              In addition to them, I am keen on coding and software development.
              I started coding in my last semester of university and I 
              developed an application about structural engineering on Visual 
              Basic Application as my final thesis. I will be sharing this study 
              on this website later. Mainly, my writings will be about software 
              development in civil engineering.
            </AboutContent>

            <AboutContent>
              I started this website because I want to share my works with everyone 
              all around the world. With this website, I will be able to access and refer my works easily. 
              Thus, I won't forget my works. Additively, I believe that this website will be a good portfolio for myself.

              I always like to share my works with my social circle and talk about these. 
              If you want to join me to talk, please{" "}
              <Link to="/contact/" style={linkStyles}>
                contact me
              </Link>
              !
            </AboutContent>

            <AboutContent>
              The last thing I should mention that I am really appreciated to{" "}
              <MiscLinks href="https://mutluhanuzmez.com/" target="_blank">
              Mutluhan Uzmez 
              </MiscLinks>{" "}
              who is supported to me to open this web site.
            </AboutContent>
          </AboutSection>
        </Body>
      </Layout>
    );
  }
}

export default About;
