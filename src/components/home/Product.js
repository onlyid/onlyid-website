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
                    <div className="col col--4 padding--md">
                        <Link className={styles.item} to="/otp">
                            <span className={classNames("material-icons", styles.pin)}>pin</span>
                            <h3>无密码 &nbsp;轻认证</h3>
                            <p>用短信/邮件验证码替代传统密码，即使新用户也可以快捷访问你的应用。</p>
                        </Link>
                    </div>
                    <div className="col col--4 padding--md">
                        <Link className={styles.item} to="/sso">
                            <span className={classNames("material-icons", styles.portrait)}>
                                portrait
                            </span>
                            <h3>统一账号 &nbsp;单点登录</h3>
                            <p>
                                接入统一认证中心，跨应用共享账号，在别处注册的用户可以直接登录你的应用。
                            </p>
                        </Link>
                    </div>
                    <div className="col col--4 padding--md">
                        <Link className={styles.item} to="/uam">
                            <span className={classNames("material-icons", styles.groups)}>
                                groups
                            </span>
                            <h3>用户管理 &nbsp;权限控制</h3>
                            <p>
                                使用控制台和Open
                                API简单快捷地管理用户，为不同的用户灵活分配访问权限。
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
