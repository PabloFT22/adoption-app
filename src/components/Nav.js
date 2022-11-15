import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <NavLink exact to="/">About</NavLink>
            <NavLink to="/dogcontainer">Adopt A Dog</NavLink>
            <NavLink to="/lostdog">Found A Dog?</NavLink>
        </nav>
    );
}

export default Nav;