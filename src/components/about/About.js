import React, { Fragment, useEffect} from "react";
import "./about.scss";
import { Title, SubTitle, Ilustation, Flex, Paragraph } from "./AboutElements";
import ilustation1 from "../../images/ilustration1.png";
import ilustation2 from "../../images/ilustration2.png";
import { Container } from "../../components/GeneralElements";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  
  useEffect(() => {
    Aos.init({ duration: 800});
  }, []);
  return (
    <Fragment>
      <div className="black">
        <Container>
          <Flex data-aos="fade-up">
            <div>
              <Title>
                Hi <br /> I'm Guillermo
              </Title>
              <SubTitle>A full stack developer.</SubTitle>
            </div>
            <Ilustation src={ilustation1}></Ilustation>
          </Flex>
        </Container>
      </div>
      <div>
        <Container className="about">
          <Flex data-aos="fade-up">
            <Ilustation src={ilustation2}></Ilustation>
            <div>
              <Title className="font-black">About me</Title>
              <SubTitle className="font-black">
                A developer from Argentina.
              </SubTitle>
              <Paragraph>
                I'm 20 years old. I´ve been coding since June of 2020. I learned
                as much as I could since then.
              </Paragraph>
              <Paragraph>
                I've never thought it could happen so fast. I left everything i
                was doing behind to follow my real vocation. So I started
                learning programming.
              </Paragraph>
              <Paragraph>
                I fell in love immediately with what I'm doing. I am always
                willing to learn new things and technologies.
              </Paragraph>
            </div>
          </Flex>
        </Container>
      </div>
    </Fragment>
  );
};

export default About;
