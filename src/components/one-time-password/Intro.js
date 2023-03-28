import React from "react";
import styles from "./Intro.module.css";
import classNames from "classnames";
import intro from "@site/static/img/otp-intro.png";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col col--5">
                        <img src={intro} alt="intro" className={styles.img1} />
                    </div>
                    <div className="col">
                        <p className={styles.p1}>如今验证码逐渐替代密码，广泛应用在登录/认证场景</p>
                        <div>
                            <div className={styles.item}>
                                <h3 className={styles.title}>
                                    <span
                                        className={classNames("material-icons", styles.satisfied)}
                                    >
                                        sentiment_very_satisfied
                                    </span>
                                    用户轻松
                                </h3>
                                <p className={styles.detail}>
                                    在每次需要时生成，不像密码需要记忆，用户体验简单友好
                                </p>
                            </div>
                            <div className={styles.item}>
                                <h3 className={styles.title}>
                                    <span className={classNames("material-icons", styles.security)}>
                                        security
                                    </span>
                                    更加安全
                                </h3>
                                <p className={styles.detail}>
                                    动态的验证码仅一次性使用，杜绝密码长期不变的安全风险
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
