import React, {useState, useEffect} from "react";

import "./nav.scss";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBrand
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

  const scrollDirection = useObservable(watchScroll, "Up");
  const esconderNav = scrollDirection === "Down" ? "hidden" : "null";

  useEffect(() => {
    scrollLock();
  }, [isOpen]);

  return (
    <>
      <Sidebar
      toggle={toggle}
      isOpen={isOpen}
      ></Sidebar>
      <Nav className={`site-header ${esconderNav}`}>
        <NavBrand to="/">Guillermo Morton</NavBrand>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About me
          </NavLink>
          <NavLink to="/experience" activeStyle>
            Experience
          </NavLink>
          <NavLink to="/knowledge" activeStyle>
            Knowledge
          </NavLink>
          <NavLink to="/studies" activeStyle>
            Studies
          </NavLink>
          <NavLink to="/projects" activeStyle>
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
