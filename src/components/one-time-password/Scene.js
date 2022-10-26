import React from "react";
import styles from "./Scene.module.css";
import otpScene from "@site/static/img/otp-scene.jpg";
import classNames from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">应用场景灵活多样</h2>
                <div className="row">
                    <div className="col col--4">
                        <div className={styles.item}>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.password)}>
                                    password
                                </span>
                                完全替代密码
                            </h3>
                            <p className={styles.detail}>
                                得益于无限发送的特点，应用可以一直使用验证码登录，不需要再引导用户设置密码。
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.portrait1)}>
                                    portrait
                                </span>
                                搭配应用自有登录
                            </h3>
                            <p className={styles.detail}>
                                应用已经实现自己的登录模块，但发送短信验证码成本太高，可以使用OTP降低成本。
                            </p>
                        </div>
                    </div>
                    <div className={classNames("col col--4", styles.imgCol)}>
                        <img src={otpScene} alt="otpScene" className={styles.img1} />
                    </div>
                    <div className="col col--4">
                        <div className={styles.item}>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.portrait2)}>
                                    portrait
                                </span>
                                补充SSO单点登录
                            </h3>
                            <p className={styles.detail}>
                                应用已经接入SSO，但一些场景（如促销页领取优惠）需要快速认证，可以使用OTP。
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.title}>
                                <span
                                    className={classNames("material-icons", styles.emoji_objects)}
                                >
                                    emoji_objects
                                </span>
                                其他认证场景
                            </h3>
                            <p className={styles.detail}>
                                凡是需要登录/认证的地方，OTP都可派上用场，请发挥想象，解决独一无二的问题。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
