import React from "react";
import styles from "./Figure.module.css";

export default function () {
    return (
        <div className={styles.root}>
            <p className={styles.comment}># 发送验证码</p>
            <p className={styles.url}>
                <span>POST</span> https://onlyid.net/api/open/send-otp
            </p>
            <p className={styles.method}>
                <span>Content-Type</span>: application/json
            </p>
            <div className={styles.params}>
                <p style={{ marginLeft: 0 }}>{"{"}</p>
                <p>
                    "recipient": <span>"13612345678"</span>,
                </p>
                <p>
                    "clientId": <span>"07c9770f22b1460398d44b4a3543db79"</span>,
                </p>
                <p>
                    "clientSecret": <span>"8d08fbbd89a547df8bda56eba12fac2e"</span>
                </p>
                <p style={{ marginLeft: 0, marginBottom: 0 }}>}</p>
            </div>
        </div>
    );
}
