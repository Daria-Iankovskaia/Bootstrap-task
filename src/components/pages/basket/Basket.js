import React from "react";
import BasketHeader from "./BasketHeader";
import Products from "./Products";
import OrderSummary from "./OrderSummary";
import styles from "./basket.module.css";

function Basket() {
    return (
        <main>
            <div className={styles.container}>
                <BasketHeader />
                <section>
                    <div className="container">
                        <div className="row justify-content-between align-items-start">
                            <div className="col-12 col-md-7 mb-3">
                                <Products />
                            </div>
                            <div className="col-12 col-md-5">
                                <OrderSummary />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Basket;


