import React from "react";
import intro from "@site/static/img/intro.png";
import styles from "./Intro.module.css";
import { SentimentVeryDissatisfied } from "@material-ui/icons";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col col--7 padding--md">
                        <div>
                            <p className={styles.p1}>
                                你的应用需要用户注册、登录、管理等功能，但...
                            </p>
                            <ul className={styles.ul1}>
                                <li>
                                    <SentimentVeryDissatisfied />
                                    开发维护相关功能费时费力，手机号登录带来高昂短信成本。
                                </li>
                                <li>
                                    <SentimentVeryDissatisfied />
                                    用户不情愿在你的应用注册，因为又要记忆多一个账号密码。
                                </li>
                            </ul>
                            <p className={styles.p2}>用唯ID解耦认证和业务，</p>
                            <p className={styles.p3}>企业省时省力又省钱，更加提升用户满意度。</p>
                        </div>
                    </div>
                    <div className="col col--5 padding--md">
                        <img src={intro} alt="intro" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
