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

  const scrollDirection = useObservable(watchScroll, "Up");
  const esconderNav = scrollDirection === "Down" ? "hidden" : "null";

  useEffect(() => {
    scrollLock();
  }, [isOpen]);

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen}></Sidebar>
      <Nav className={`site-header ${esconderNav}`}>
        <NavBrand onClick={toggleScroll} to="/">Guillermo Morton</NavBrand>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            About me
          </NavLink>
          <NavLink
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Experience
          </NavLink>
          <NavLink
            to="knowledge"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Knowledge
          </NavLink>
          <NavLink
            to="studies"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Studies
          </NavLink>
          <NavLink
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
          <NavBtnLink to="/signin">Contact me</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
