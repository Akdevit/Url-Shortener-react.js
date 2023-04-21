import React from "react";
import logo from "../icon.png";
function Nav() {
  return (
    <>
      <div className="nav">
        <div className="i-nav">
          <img className="img" src={logo} alt="logo.png" />
          <h1 className="name">
            <span className="red-span">U</span>Shortener
          </h1>
        </div>
      </div>
    </>
  );
}
export default Nav;
