import React from "react";
import img1 from "@site/static/img/sso-one1.png";
import img2 from "@site/static/img/sso-one2.png";
import styles from "./Figure.module.css";

export default function () {
    return (
        <div className={styles.root}>
            <div className={styles.box1}>
                <img src={img1} alt="one1" />
                <p>不建议</p>
            </div>
            <div className={styles.box2}>
                <img src={img2} alt="one2" />
                <p>
                    <span className="material-icons">check</span> 推荐
                </p>
            </div>
        </div>
    );
}
