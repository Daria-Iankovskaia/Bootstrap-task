import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styles from "./header.module.css";

function Header() {
    return (
        <header className="bg-white fixed-top mt-0">
            <div className="container-fluid">
                <div className={`row align-items-center justify-content-between ${styles.container}`}>
                    <div className="col-auto">
                        <Logo />
                    </div>
                    <div className="col-auto">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;



