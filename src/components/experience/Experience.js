import React, { Fragment } from "react";
import {
  Title,
  SubTitle,
  Ilustation,
  Flex,
  Paragraph,
} from "./ExperienceElements";
import ilustation3 from "../../images/ilustration3.png";
import { Container } from "../../components/GeneralElements";
const Experience = () => {
  return (
    <Fragment>
      <div className="black">
        <Container>
          <Flex>
            <div>
              <Title>My experience</Title>
              <Paragraph>
                As I started coding not much ago, I don't really have a lot of
                working experience.
              </Paragraph>
              <Paragraph>
                I made a couple websites, for local business, and actually got
                paid for doing that. I got more centered on learning and
                improving than working and making money. I feel ready now so I
                put hands on my keyboard and made this portfolio.
              </Paragraph>
              <Paragraph>
                I want to be a real professional, so I hope to be able to update
                this section soon.
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
