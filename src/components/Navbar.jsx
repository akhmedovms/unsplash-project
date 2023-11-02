import React from "react";
import { Link } from "react-router-dom";
import Darklight from "./DarkLight";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Unsplash
          </Link>
        </div>
        <div className="flex-none items-center gap-10 ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <Darklight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
