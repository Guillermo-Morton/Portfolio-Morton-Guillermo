import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtn,
  SideBtnLink,
} from "./SidebarElements";

import { animateScroll as scroll } from "react-scroll";

const Sidebar = (props) => {
  return (
    <SidebarContainer onClick={props.toggle} isOpen={props.isOpen}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu isOpen={props.isOpen}>
          <SidebarLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            activeStyle
            onClick={props.toggle}
          >
            About me
          </SidebarLink>
          <SidebarLink
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            activeStyle
            onClick={props.toggle}
          >
            Experience
          </SidebarLink>
          <SidebarLink
            to="knowledge"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            activeStyle
            onClick={props.toggle}
          >
            Knowledge
          </SidebarLink>
          <SidebarLink
            to="studies"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            activeStyle
            onClick={props.toggle}
          >
            Studies
          </SidebarLink>
          <SidebarLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            activeStyle
            onClick={props.toggle}
          >
            Projects
          </SidebarLink>
        </SidebarMenu>
        <SideBtn>
          <SideBtnLink to="/contact" activeStyle>
            Contact me
          </SideBtnLink>
        </SideBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
