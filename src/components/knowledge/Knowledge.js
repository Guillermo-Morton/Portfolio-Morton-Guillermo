import React, { Fragment, useEffect} from "react";
import {
  Title,
  SubTitle,
  Ilustation,
  Flex,
  Paragraph,
  ContactLink
} from "./KnowledgeElements";
import ilustation4 from "../../images/ilustration4.png";
import { Container } from "../../components/GeneralElements";
import Aos from "aos";
import "aos/dist/aos.css";
const Knowledge = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <Fragment>
      <div>
        <Container className="knowledge">
          <Flex data-aos="fade-up">
            <div>
              <Title>My Knowledge</Title>
              <SubTitle>Technologies I use</SubTitle>
              <Paragraph>
                ReactJS, JavaScript, HTML5, CSS3, ExpressJS, MongoDB, NodeJS and
                some toolkits such as React Styled Components, Bootstrap/React
                Bootstrap, React Router/React Scroll, RXJS.
              </Paragraph>
              <Paragraph>
                You can see all of these techs applied on my <ContactLink target='_blank' href='https://github.com/Guillermo-Morton'>projects.</ContactLink>
              </Paragraph>
            </div>
            <Ilustation src={ilustation4}></Ilustation>
          </Flex>
        </Container>
      </div>
    </Fragment>
  );
};

export default Knowledge;
