import React, { Fragment } from "react";
import "./projects.scss";
import {
  Title,
  SubTitle,
  Flex,
  Paragraph,
  ProjectLink,
} from "./ProjectsElements";
import { Container } from "../../components/GeneralElements";
const Projects = () => {
  return (
    <div>
      <Fragment>
        <div>
          <Container>
            <Flex>
              <Title className="font-black">My Projects</Title>

              <SubTitle>Rollingnews</SubTitle>
              <Paragraph>
                News website, powered by ReactJS. Developed using toolkits such
                as ReactBootstrap, ReactRouterDOM, React RXJS and others.
                Fictional project for RollingCode School Module IV.
              </Paragraph>
              <ProjectLink
                target="_blank"
                href="https://rollingnewsproject.netlify.app/"
              >
                View project
              </ProjectLink>

              <SubTitle>Bartender's House</SubTitle>
              <Paragraph>
                This is a blog about drinks. This is only a layout, not a
                functional website. It was made using HTML5, CSS3 and Bootstrap.{" "}
                <br /> Fictional project for RollingCode School Module I.
              </Paragraph>
              <ProjectLink
                target="_blank"
                href="https://bartendershouse.netlify.app/"
              >
                View project
              </ProjectLink>

              <SubTitle>Rolling Disney Plus</SubTitle>
              <Paragraph>
                This is a streaming platform inspired website, fictional. It was
                made using Java Script, CSS3 and HTML5. <br /> Fictional project
                for RollingCode School Module II.
              </Paragraph>
              <ProjectLink
                target="_blank"
                href="https://rollingdisneyplus.netlify.app/"
              >
                View project
              </ProjectLink>

              <SubTitle>Morty's Two Projects</SubTitle>
              <Paragraph>
                These are e-comerce websites. They were made using JavaScript,
                Bootstrap and HTML5
              </Paragraph>
              <div className="d-flex-start">
                <ProjectLink
                  className="low-margin"
                  target="_blank"
                  href="https://mortys.netlify.app/"
                >
                  View project 1
                </ProjectLink>
                <ProjectLink
                  className="low-margin"
                  target="_blank"
                  href="https://mortystore.netlify.app/"
                >
                  View project 2
                </ProjectLink>
              </div>

              <SubTitle>DM Deport</SubTitle>
              <Paragraph>
                This is another e-comerce website. It was made for a local
                client using CSS3, JavaScript, HTML5 and Bootstrap
              </Paragraph>
              <ProjectLink
                target="_blank"
                href="https://dmindumentaria.online/cat%C3%A1logo.html"
              >
                View project
              </ProjectLink>
            </Flex>
          </Container>
        </div>
      </Fragment>
    </div>
  );
};

export default Projects;
