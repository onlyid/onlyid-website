import React from "react";
import styles from "./Product.module.css";
import classNames from "classnames";
import Link from "@docusaurus/Link";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">两个产品功能</h2>
                <div className="row">
                    <div className="col">
                        <Link className={styles.item} to="/one-time-password">
                            <span className={classNames("material-icons", styles.pin)}>pin</span>
                            <h3>轻认证 OTP</h3>
                            <p>用短信/邮件验证码替代传统密码，即使新用户也可以快捷访问你的应用</p>
                        </Link>
                    </div>
                    <div className="col">
                        <Link className={styles.item} to="/single-sign-on">
                            <span className={classNames("material-icons", styles.portrait)}>
                                portrait
                            </span>
                            <h3>单点登录 SSO</h3>
                            <p>
                                接入统一认证中心，跨应用共享账号，在别处注册的用户直接登录你的应用
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
