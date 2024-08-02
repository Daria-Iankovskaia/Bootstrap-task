import React from "react";
import tomato from "../../../utils/photos/ed-o-neil-AvvdZlhDowA-unsplash 1.png";
import styles from "./Product.module.css";

function Product() {
    return (
        <div className={`card mb-3 ${styles.cardBody}`}>
            <div className="row g-0">
                <div className="col-4 col-md-4 d-flex align-items-center">
                    <img src={tomato} alt="product-img" className={`img-fluid ${styles.cardImg}`} />
                </div>
                <div className="col-8 col-md-8">
                    <div className="row h-100">
                        <div className="col-6 col-md-6 d-flex flex-column align-items-start justify-content-center">
                            <p className={`card-title ${styles.title}`}>
                                Heirloom tomato
                            </p>
                            <p className={`card-text ${styles.priceGreen}`}>
                                $5.99 / lb
                            </p>
                            <button className={`btn btn-primary ${styles.buttonLb}`}>
                                Add
                            </button>
                        </div>
                        <div className="col-6 col-md-6 d-flex align-items-start justify-content-end">
                            <p className={styles.price}>$5.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

























