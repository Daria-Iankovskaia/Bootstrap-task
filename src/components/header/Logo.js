import React from "react";
import styles from "./logo.module.css";

function Logo() {
    return (
        <h2 className={`ms-3 ms-md-4 ms-lg-5 my-3 ${styles.logo}`}>World Peas</h2>
    );
}

export default Logo;

