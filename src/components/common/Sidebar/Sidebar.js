import React, {  } from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtn,
  SideBtnLink
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer onClick={props.toggle} isOpen={props.isOpen}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu isOpen={props.isOpen}>
          <SidebarLink to="/about" activeStyle>
            About me
          </SidebarLink>
          <SidebarLink to="/experience" activeStyle>
            Experience
          </SidebarLink>
          <SidebarLink to="/knowledge" activeStyle>
            Knowledge
          </SidebarLink>
          <SidebarLink to="/studies" activeStyle>
            Studies
          </SidebarLink>
          <SidebarLink to="/projects" activeStyle>
            Projects
          </SidebarLink>
        </SidebarMenu>
        <SideBtn>
          <SideBtnLink to="/contact" activeStyle>Contact me</SideBtnLink>
        </SideBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
