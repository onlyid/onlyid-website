import React from "react";
import styles from "./Intro.module.css";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <p className={styles.p1}>现在应用一般使用的 自有+社交 登录方式存在不少弊端</p>
                <div className="row">
                    <div className="col">
                        <div>
                            <div className={styles.sideBox}>
                                <h4>企业端</h4>
                                <div className={styles.divider} />
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#f08c10" }}>
                                        sentiment_very_dissatisfied
                                    </span>
                                    开发麻烦
                                </h3>
                                <p>开发并维护自有+多个社交登录，会耗费开发者大量的时间和精力</p>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#ef4d55" }}>
                                        sentiment_very_dissatisfied
                                    </span>
                                    不够安全
                                </h3>
                                <p>开发自有登录涉及复杂的安全知识，稍有不慎就容易出现安全漏洞</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <div className={styles.sideBox}>
                                <h4>用户端</h4>
                                <div className={styles.divider} />
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#2299dd" }}>
                                        sentiment_very_dissatisfied
                                    </span>
                                    容易迷茫
                                </h3>
                                <p>根据调研数据，超过六成用户会忘记之前是以哪种方式登录某应用</p>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#3f51c5" }}>
                                        sentiment_very_dissatisfied
                                    </span>
                                    难以记忆
                                </h3>
                                <p>自有登录注册过程繁琐，又要记忆多一个密码，用户使用意愿不高</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
