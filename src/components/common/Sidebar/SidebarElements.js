import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "96%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  
`;


export const CloseIcon = styled(FaTimes)`
  color: #fff;
  &:hover {
    color: #D4D4D4;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none !important;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #fff;
  cursor: pointer;

  &.active {
    color: #c8dafe;
  }
  &.active:hover {
    color: #a7bde8;
  }
  &:hover {
    transition: all 0.4s ease-in-out;
    color: #D4D4D4;
  }
`;
export const SidebarMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  padding: 0;
  margin: 0;
   @media screen and
    (max-width: 480px) {
    grid-template-rows: repeat(5, 70px);
    
  }
`;

export const SideBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const SideBtnLink = styled(Link)`
  border-radius: 4px;
  background: #212121;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #c8dafe;
    color: #010606;
  }
`;
