import React from "react";
import styles from "./informationSection.module.css";

function InformationSection() {
    return (
        <section>
            <div className={`container ${styles.containerHolder}`}>
                <div className="row justify-content-center align-items-start">
                    <div className="col-12 col-md-3">
                        <h3 className={styles.title}>what we believe</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <p className={styles.text}>
                            We believe in produce. Tasty produce. Produce like:
                            <br /><br />
                            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
                            <br /><br />
                            What are we forgetting?
                            <br /><br />
                            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we are vendors of organic produce, but if you asked us to describe what escaroles are...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InformationSection;
