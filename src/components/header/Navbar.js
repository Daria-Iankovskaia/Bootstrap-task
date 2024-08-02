import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className={`btn ${styles.linkItem}`}>Home</Link>
            <Link to="/about" className={`btn ${styles.linkItem}`}>About Us</Link>
            <Link to="/basket" className={`btn ${styles.linkItem} ${styles.linkBasket}`}>Basket</Link>
        </nav>
    );
}

export default Navbar;



