import React from "react";
import styles from "./Intro.module.css";
import intro from "@site/static/img/sso-intro.png";
import classNames from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">密码，一个就好</h2>
                <div className="row">
                    <div className={classNames("col", styles.left)}>
                        <img src={intro} alt="intro" className={styles.img1} />
                    </div>
                    <div className={classNames("col", styles.right)}>
                        <div>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.password)}>
                                    password
                                </span>
                                一个密码
                            </h3>
                            <p className={styles.detail}>
                                密码本身不是问题，密码太多才是问题。接入SSO，让用户用一个密码登录你和其他开发者的应用。
                            </p>
                        </div>
                        <div>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.account)}>
                                    portrait
                                </span>
                                一套账号
                            </h3>
                            <p className={styles.detail}>
                                用户标准账号包括头像、昵称、邮箱和手机号等十个字段，供你的应用直接使用而不需要再单独维护。
                            </p>
                        </div>
                        <div>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.fingerprint)}>
                                    fingerprint
                                </span>
                                多种认证
                            </h3>
                            <p className={styles.detail}>
                                除了传统的密码和验证码，还支持主动推送、扫码登录等多种认证方式，解放用户的同时也更加安全。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
