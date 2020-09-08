import React, { useEffect, useState } from "react";

import "./Nav.scss";

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix-logo"
        className="nav__logo"
      />

      <img
        src="https://i.imgur.com/BU2Bkjf.png"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
