import React, { useState, useEffect } from "react";

import "./nav.scss";

import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBrand,
} from "./NavbarElements";

import Sidebar from "../Sidebar/Sidebar";

import { of, fromEvent, animationFrameScheduler } from "rxjs";

import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  switchMap,
  throttleTime,
} from "rxjs/operators";

import { useObservable } from "rxjs-hooks";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let body = document.getElementById("scrollLock");
  const scrollLock = () => {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
      body.style =
        "display:flex; flex-direction: column; min-height: 100vh; align-content: around";
    }
  };

  const watchScroll = () =>
    of(typeof window === "undefined").pipe(
      filter((bool) => !bool),
      switchMap(() => fromEvent(window, "scroll", { passive: true })),
      throttleTime(0, animationFrameScheduler),
      map(() => window.pageYOffset),
      pairwise(),
      map(([previous, current]) => (current < previous ? "Up" : "Down")),
      distinctUntilChanged()
    );

  const toggleScroll = () => {
    scroll.scrollToTop();
  };
  const toggleLightBackground = () => {
    setTimeout(() => {
      setIsBlack(false);
      setIsLight(true);
    }, 200);
  };
  const toggleBlackBackground = () => {
    setTimeout(() => {
      setIsLight(false);
      setIsBlack(true);
    }, 200);
  };
  const hideLink = () => {
    setIsHidden(true);
  };
  const showLink = () => {
    setIsHidden(false);
  };

  const scrollDirection = useObservable(watchScroll, "Up");
  const esconderNav = scrollDirection === "Down" ? "hidden" : "";
  const aclararNav = isLight === true ? "light" : "";
  const aclararLink = isLight === true ? "font-black" : "";
  const oscurecerNav = isBlack === true ? "black" : "";
  const ocultarNavLink = isHidden === true ? "hide" : "";

  useEffect(() => {
    scrollLock();
  }, [isOpen]);
  useEffect(() => {
    setIsLight(false);
    setIsBlack(false);
  }, [scrollDirection]);

  return (
    <>
      <Sidebar hideLink={hideLink} toggle={toggle} isOpen={isOpen}></Sidebar>
      <Nav
        className={`site-header ${esconderNav}  ${aclararNav} ${oscurecerNav}`}
      >
        <NavBrand onClick={()=>{
          showLink();
          toggleScroll();
          toggleBlackBackground();
        }} className={`${aclararLink}`} exact={true} to="/">
          Guillermo Morton
        </NavBrand>
        <Bars className={ocultarNavLink} onClick={toggle} />
        <NavMenu>
          <NavLink
            className={`${aclararLink} ${ocultarNavLink}`}
            onClick={() => {
              toggleLightBackground();
            }}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            About me
          </NavLink>
          <NavLink
            className={`${aclararLink} ${ocultarNavLink}`}
            onClick={() => {
              toggleBlackBackground();
            }}
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Experience
          </NavLink>
          <NavLink
            className={`${aclararLink} ${ocultarNavLink}`}
            onClick={() => {
              toggleLightBackground();
            }}
            to="knowledge"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Knowledge
          </NavLink>
          <NavLink
            className={`${aclararLink} ${ocultarNavLink}`}
            onClick={() => {
              toggleBlackBackground();
            }}
            to="studies"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Studies
          </NavLink>
          <NavLink
            className={`${aclararLink} ${ocultarNavLink}`}
            onClick={() => {
              toggleLightBackground();
            }}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Projects
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink className={ocultarNavLink} onClick={()=>{
            toggleScroll();
            toggleBlackBackground();
            hideLink();
          }} to="/contact">
            Contact me
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
