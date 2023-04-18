import React from "react";
import styles from "./Banner.module.css";
import otp from "@site/static/img/otp-banner.png";
import Link from "@docusaurus/Link";
import classNames from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className={classNames("col", styles.col1)}>
                        <span className="material-icons">pin</span>
                        <h1>轻认证 OTP</h1>
                        <p>用短信/邮件验证码替代传统密码，即使新用户也可以快捷访问你的应用</p>
                        <Link className="button button--primary" to="/docs/one-time-password">
                            查看文档
                        </Link>
                    </div>
                    <div className="col">
                        <img src={otp} alt="otp" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
