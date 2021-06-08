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
  const [isTransparent, setIsTransparent] = useState(false);
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
  const toggleTransparence = () => {
    setTimeout(() => {
      setIsTransparent(true);
    }, 200);
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
  const dismiss = () => {
    setTimeout(() => {
      setIsTransparent(false);
      setIsLight(false);
      setIsBlack(false);
    }, 2000);
  };
  const hideLink = () => {
    setIsHidden(true);
  };
  const showLink = () => {
    setIsHidden(false);
  };

  const scrollDirection = useObservable(watchScroll, "Up");
  const esconderNav = scrollDirection === "Down" ? "hidden" : "null";
  const transparentarNav = isTransparent === true ? "transparent" : "null";
  const aclararNav = isLight === true ? "light" : "null";
  const aclararLink = isLight === true ? "font-black" : "null";
  const oscurecerNav = isBlack === true ? "black" : "null";
  const oscurecerLink = isBlack === true ? "font-light" : "null";
  const ocultarNavLink = isHidden === true ? "hide" : "null";

  useEffect(() => {
    scrollLock();
  }, [isOpen]);
  useEffect(() => {
    setIsTransparent(false);
    setIsLight(false);
    setIsBlack(false);
  }, [scrollDirection]);

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen}></Sidebar>
      <Nav
        className={`site-header ${esconderNav} ${transparentarNav} ${aclararNav} ${oscurecerNav}`}
      >
        <NavBrand
          className={`${aclararLink} ${oscurecerLink}`}
          onClick={() => {
            showLink();
            toggleScroll();
          }}
          exact={true}
          to="/"
        >
          Guillermo Morton
        </NavBrand>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink
            className={`${aclararLink} ${oscurecerLink} ${ocultarNavLink}`}
            onClick={() => {
              dismiss();
              toggleTransparence();
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
            className={`${aclararLink} ${oscurecerLink} ${ocultarNavLink}`}
            onClick={() => {
              dismiss();
              toggleTransparence();
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
            className={`${aclararLink} ${oscurecerLink} ${ocultarNavLink}`}
            onClick={() => {
              dismiss();
              toggleTransparence();
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
            className={`${aclararLink} ${oscurecerLink} ${ocultarNavLink}`}
            onClick={() => {
              dismiss();
              toggleTransparence();
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
            className={`${aclararLink} ${oscurecerLink} ${ocultarNavLink}`}
            onClick={() => {
              dismiss();
              toggleTransparence();
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
