import React, { Fragment } from "react";
import {
  Title,
  Ilustation,
  Flex,
  Paragraph,
  ContactLink
} from "./ExperienceElements";
import ilustation3 from "../../images/ilustration3.png";
import { Container } from "../../components/GeneralElements";
import { animateScroll as scroll } from "react-scroll";
const Experience = () => {

  const toggleScroll = () => {
    scroll.scrollToTop();
  };
  return (
    <Fragment>
      <div className="black">
        <Container>
          <Flex className="experience">
            <div>
              <Title>My experience</Title>
              <Paragraph>
                As a junior dev I made a couple of websites for local business
                where I optimized for learning and improving rather than making
                money. As of now I feel ready provide value to clients and
                employers alike.
              </Paragraph>
              <Paragraph>
                This section of my page would look great with your brand on it!
                Interested? <ContactLink exact={true} onClick={toggleScroll} to="/contact">Contact me.</ContactLink>
              </Paragraph>
            </div>
            <Ilustation src={ilustation3}></Ilustation>
          </Flex>
        </Container>
      </div>
    </Fragment>
  );
};

export default Experience;
