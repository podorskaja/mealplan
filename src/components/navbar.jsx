import React from "react";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <header>
            <nav id="main-nav">
                <Link id="logo" to="/">
                    <span>FoodieGuru</span>
                </Link>

            </nav>
        </header>
    );
}