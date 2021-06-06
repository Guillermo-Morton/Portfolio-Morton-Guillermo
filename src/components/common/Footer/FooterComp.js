import React, { Fragment } from "react";
import { Footer, Github, Linkedin, FooterLink } from "./FooterElements";

const FooterComp = () => {
  return (
    <Fragment>
      <Footer>
        <FooterLink target='_blank' href='https://github.com/Guillermo-Morton'>
          <Github></Github>
        </FooterLink>
        <FooterLink  href=''>
          <Linkedin></Linkedin>
        </FooterLink>
      </Footer>
    </Fragment>
  );
};

export default FooterComp;
