import React from "react";
import styles from "./Usage.module.css";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">三种用法</h2>
                <div className="row">
                    <div className="col col--4">
                        <div className={styles.item}>
                            <span className="material-icons">password</span>
                            <h3>完全替代密码</h3>
                            <p>
                                得益于无限发送的特点，应用可以一直使用验证码登录，不需要再引导用户设置密码
                            </p>
                        </div>
                    </div>
                    <div className="col col--4">
                        <div className={styles.item}>
                            <span className="material-icons">portrait</span>
                            <h3>补充SSO单点登录</h3>
                            <p>
                                应用已经接入SSO，但一些场景（如促销页领取优惠）需要快速认证，可以使用OTP
                            </p>
                        </div>
                    </div>
                    <div className="col col--4">
                        <div className={styles.item}>
                            <span className="material-icons-outlined">account_circle</span>
                            <h3>搭配自有登录</h3>
                            <p>
                                应用已经实现自己的登录模块，但发送短信验证码成本太高，可以使用OTP降低成本
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
