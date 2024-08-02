import React from "react";
import styles from "./mainIntroduction.module.css";

function MainIntroduction() {
    return (
        <section>
            <div className={`container text-center ${styles.textButtonContainre}`}>
                <h1 className={styles.mainText}>
                    We are <em className={styles.italicText}>farmers</em>, <em className={styles.italicText}>purveyors</em>, and <em className={styles.italicText}>eaters</em> of organically grown food.
                </h1>
                <button className={styles.browseTheShop}>Browse our shop</button>
            </div>
        </section>
    );
}

export default MainIntroduction;
