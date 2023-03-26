import React from "react";
import styles from "./Product.module.css";
import classNames from "classnames";
import Link from "@docusaurus/Link";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">一站式身份服务</h2>
                <div className="row">
                    <div className="col col--4">
                        <Link className={styles.item} to="/one-time-password">
                            <span className={classNames("material-icons", styles.pin)}>pin</span>
                            <h3>无密码 轻认证 &nbsp;OTP</h3>
                            <p>用短信/邮件验证码替代传统密码，即使新用户也可以快捷访问你的应用</p>
                        </Link>
                    </div>
                    <div className="col col--4">
                        <Link className={styles.item} to="/single-sign-on">
                            <span className={classNames("material-icons", styles.portrait)}>
                                portrait
                            </span>
                            <h3>统一账号 单点登录 &nbsp;SSO</h3>
                            <p>
                                接入统一认证中心，跨应用共享账号，在别处注册的用户可以直接登录你的应用
                            </p>
                        </Link>
                    </div>
                    <div className="col col--4">
                        <Link className={styles.item} to="/user-and-access-management">
                            <span className={classNames("material-icons", styles.groups)}>
                                groups
                            </span>
                            <h3>用户管理 权限控制 &nbsp;UAM</h3>
                            <p>
                                使用控制台和Open API简单快捷地管理用户，为不同的用户灵活分配访问权限
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
