import { FaBars } from 'react-icons/fa';
import { NavLink as LinkBtn } from 'react-router-dom';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  transition: 0.4s;

  @media screen and (max-width: 852px) {
    height: 60px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem 0 0rem;
  height: 100%;
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
`;
export const NavBrand = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0rem 0 1rem;
  font-size: 1.3rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease-in-out;
    color: #D4D4D4;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 852px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 852px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 852px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkBtn)`
  border-radius: 10px;
  background: #212121;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #c8dafe;
    color: #010606;
  }
`;
