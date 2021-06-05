import React, { Fragment } from "react";
import {
  Title,
  SubTitle,
  Ilustation,
  Flex,
  Paragraph,
  List,
  Item
} from "./KnowledgeElements";
import ilustation4 from "../../images/ilustration4.png";
import { Container } from "../../components/GeneralElements";
const Knowledge = () => {
    return (
        <Fragment>
            <div>
                <Container>
                    <Flex>
                        <div>
                        <Title>My Knowledge</Title>
                        <SubTitle>Advanced/medium</SubTitle>
                        <List>
                            <Item>ReactJS</Item>
                            <Item>JavaScript</Item>
                            <Item>HTML5</Item>
                            <Item>CSS3</Item>
                        </List>
                        <SubTitle>Basic</SubTitle>
                        <List>
                            <Item>ExpressJS</Item>
                            <Item>MongoDB</Item>
                        </List>
                        <SubTitle>Tool kits & frameworks</SubTitle>
                        <List>
                            <Item>React Styled Components</Item>
                            <Item>Bootstrap/React Bootstrap</Item>
                            <Item>React Router/React Scroll</Item>
                        </List>
                        </div>
                        <Ilustation src={ilustation4}></Ilustation>
                    </Flex>
                </Container>
            </div>
        </Fragment>
    );
};

export default Knowledge;