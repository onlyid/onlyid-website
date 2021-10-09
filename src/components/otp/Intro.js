import React from "react";
import styles from "./Intro.module.css";
import classNames from "classnames";
import otpIntro from "@site/static/img/otp-intro.png";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">用验证码替代密码</h2>
                <div className="row">
                    <div className="col col--5">
                        <img src={otpIntro} alt="otpIntro" className={styles.img1} />
                    </div>
                    <div className="col col--6 col--offset-1">
                        <p className={styles.p1}>如今验证码广泛使用在应用的登录/认证场景，因为：</p>
                        <div>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.satisfied)}>
                                    sentiment_very_satisfied
                                </span>
                                用户轻松
                            </h3>
                            <p className={styles.detail}>
                                在每次需要时生成，不像密码需要记忆，用户体验简单友好。
                            </p>
                        </div>
                        <div className={styles.box1}>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.security)}>
                                    security
                                </span>
                                更加安全
                            </h3>
                            <p className={styles.detail}>
                                动态的验证码仅一次性使用，杜绝密码长期不变的安全风险。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
