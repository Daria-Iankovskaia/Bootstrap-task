import React from "react";
import saladImage from "../../../utils/photos/salad.png";
import breadImage from "../../../utils/photos/bread.png";
import styles from "./productsArea.module.css";

function ProductsArea() {
    return (
        <section>
            <div className={`container ${styles.container}`}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
                        <img src={saladImage} alt="salad-photo" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img src={breadImage} alt="bread-photo" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsArea;






