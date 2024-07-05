import React from "react";
import styles from "./_Benefit.module.css";

export default function ({ children, title, detail }) {
    return (
        <div className={styles.root}>
            <div className={styles.iconBox}>{children}</div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.detail}>{detail}</p>
            </div>
        </div>
    );
}
