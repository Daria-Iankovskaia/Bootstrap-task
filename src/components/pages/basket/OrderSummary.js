import React from "react";
import styles from "./orderSummary.module.css";

function OrderSummary() {
    return (
        <div className={`card ${styles.summaryCard}`} style={{ maxWidth: "395px" }}>
            <div className="card-body">
                <h5 className={`card-title ${styles.title}`}>Order summary</h5>
                <div className="d-flex justify-content-between">
                    <p className={`mb-1 ${styles.text}`}>Subtotal</p>
                    <p className={`mb-1 ${styles.text}`}>$27.44</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className={`mb-1 ${styles.text}`}>Shipping</p>
                    <p className={`mb-1 ${styles.text}`}>$3.99</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className={`mb-1 ${styles.text}`}>Tax</p>
                    <p className={`mb-1 ${styles.text}`}>$2.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <p className={`font-weight-bold ${styles.total}`}>Total</p>
                    <p className={`font-weight-bold ${styles.total}`}>$33.43</p>
                </div>
                <button className={`btn btn-primary d-flex justify-content-center align-items-center ${styles.paymentButton}`}>
                    Continue to payment <span>&rarr;</span>
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
