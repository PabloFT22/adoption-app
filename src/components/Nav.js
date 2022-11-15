import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav id="nav">
            <NavLink className="navBtn" exact to="/">About</NavLink>
            <NavLink className="navBtn" to="/dogcontainer">Adopt A Dog</NavLink>
            <NavLink className="navBtn" to="/lostdog">Found A Dog?</NavLink>
        </nav>
    );
}

export default Nav;