import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";

function Logo() {
    return (
        <Link to="/" className={styles.link}>
            <h2 className={`ms-3 ms-md-4 ms-lg-5 my-3 ${styles.logo}`}>World Peas</h2>
        </Link>
    );
}

export default Logo;

