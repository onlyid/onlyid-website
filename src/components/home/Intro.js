import React from "react";
import intro from "@site/static/img/home-intro.png";
import styles from "./Intro.module.css";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col col--7">
                        <p className={styles.p1}>你的应用需要用户登录和用户管理功能，但...</p>
                        <ul className={styles.ul1}>
                            <li>
                                <span className="material-icons">sentiment_very_dissatisfied</span>
                                开发维护相关功能费时费力，手机号登录带来高昂短信成本。
                            </li>
                            <li>
                                <span className="material-icons">sentiment_very_dissatisfied</span>
                                用户不情愿在你的应用注册，因为又要记忆多一个账号密码。
                            </li>
                        </ul>
                        <p className={styles.p2}>
                            使用唯ID，<span>企业省时省力又省钱，更加提升用户满意度。</span>
                        </p>
                    </div>
                    <div className="col col--5">
                        <img src={intro} alt="intro" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
