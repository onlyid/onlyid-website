import React from "react";
import styles from "./_JobType.module.css";

export default function ({ children, title, count, onClick }) {
    return (
        <div className={styles.root}>
            <div className={styles.imgBox} onClick={onClick}>
                {children}
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.count}>{count}个职位</p>
        </div>
    );
}
