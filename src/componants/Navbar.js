import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
      <div className="topnav">
        <Link
          className={` ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Layout 1
        </Link>
        <Link
          className={` ${location.pathname === "/Layout2" ? "active" : ""}`}
          to="/Layout2 "
        >
          Layout 2
        </Link>
        <Link
          className={` ${location.pathname === "/card" ? "active" : ""}`}
          to="/card "
        >
          Layout 3
        </Link>
      </div>
  );
};

export default Navbar;
