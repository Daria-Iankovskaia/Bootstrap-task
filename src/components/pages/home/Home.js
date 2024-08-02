import React from "react";
import MainIntroduction from "./MainIntroduction";
import ProductsArea from "./ProductsArea";
import InformationSection from "./InformationSection";

function Home() {
    return (
        <main>
            <MainIntroduction />
            <ProductsArea />
            <InformationSection />
        </main>
    )
};

export default Home;