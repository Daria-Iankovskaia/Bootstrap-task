import React from "react";
import styles from "./basketHeader.module.css";

function BasketHeader() {
    return (
        <section>
            <div className={`container d-flex align-items-end ${styles.container}`}>
                <div className="row justify-content-start">
                    <div className={`col-auto d-flex align-items-end ${styles.contentHolder}`}>
                        <h1 className="m-0">Basket</h1>
                        <p>3 Items</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BasketHeader;