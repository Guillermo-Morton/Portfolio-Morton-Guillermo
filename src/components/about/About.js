import React, { Fragment } from "react";
import "./about.scss";
import { Title, SubTitle, Ilustation, Flex, Paragraph } from "./AboutElements";
import ilustation1 from "../../images/ilustration1.png";
import ilustation2 from "../../images/ilustration2.png";
import { Container } from "../../components/GeneralElements";
const About = () => {
  return (
    <Fragment>
      <div className="black">
        <Container>
          <Flex>
            <div>
              <Title>
                Hi <br /> I'm Guillermo
              </Title>
              <SubTitle>A full stack developer</SubTitle>
            </div>
            <Ilustation src={ilustation1}></Ilustation>
          </Flex>
        </Container>
      </div>
      <div>
        <Container>
          <Flex className='about'>
            <Ilustation src={ilustation2}></Ilustation>
            <div>
              <Title className="font-black">About me</Title>
              <SubTitle className="font-black">
                A developer from Argentina
              </SubTitle>
              <Paragraph>
                I'm 20 years old. I´ve been coding since June of 2020. Learned
                as much as I could in this period of time.
              </Paragraph>
              <Paragraph>
                Everything happened really fast, the thought pop up in my head
                and I knew I had to. So I droped of college of Architecture and
                started learning programming.
              </Paragraph>
              <Paragraph>
                Immediately fell in love with what I'm doing. I'm always up to
                learn new things and technologies
              </Paragraph>
            </div>
          </Flex>
        </Container>
      </div>
    </Fragment>
  );
};

export default About;