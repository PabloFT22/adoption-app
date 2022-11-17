import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav id="nav">
            <NavLink id='btn1' className="navBtn" exact to="/">About</NavLink>
            <NavLink id='btn2' className="navBtn" to="/dogcontainer">Adopt A Dog</NavLink>
            <NavLink id='btn3' className="navBtn" to="/lostdog">Found A Dog?</NavLink>
        </nav>
    );
}

export default Nav;