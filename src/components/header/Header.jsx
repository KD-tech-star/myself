import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import { HeaderSocial } from "./HeaderSocial";
export default function Header() {
  return (
    <header>
      <div className="container header__container">
      <h5 style={{fontSize :"20px"}}>Hello I'm</h5>
      <h1>Sonu Bharti</h1>
      <h5 className="text-light">React Fullstack Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className="me">
      <img src={ME} alt="me" />
      </div>
      
      <a href="#contact" className="scroll__down"> Scroll Down </a>
      </div>
    </header>
  );
}
