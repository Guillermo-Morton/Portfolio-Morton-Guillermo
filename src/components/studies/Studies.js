import React, { Fragment } from "react";
import "./studies.scss";
import {
  Title,
  SubTitle,
  Flex,
  Paragraph,
  Card,
} from "./StudiesElements";
import { Container } from "../../components/GeneralElements";
const Studies = () => {
  return (
    <Fragment>
      <div className="black">
        <Container>
          <Flex className='studies'>
            <div className="d-flex">
              <Title>My Studies</Title>
              <div className="d-flex">
                <Card>
                  <SubTitle>RollingCode School</SubTitle>
                  <Paragraph>Full-stack career</Paragraph>
                </Card>
                <Card>
                  <SubTitle>GrassHopper</SubTitle>
                  <Paragraph>Fundamentals</Paragraph>
                </Card>
                <Card>
                  <SubTitle>GrassHopper</SubTitle>
                  <Paragraph>Fundamentals II</Paragraph>
                </Card>
                <Card>
                  <SubTitle>GrassHopper</SubTitle>
                  <Paragraph>Introduction to interviews</Paragraph>
                </Card>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </Fragment>
  );
};

export default Studies;
