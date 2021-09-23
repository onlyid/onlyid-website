import React from "react";
import styles from "./Banner.module.css";
import ssoBanner from "@site/static/img/sso-banner.png";
import Link from "@docusaurus/Link";
import { Tooltip } from "@material-ui/core";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col padding--md">
                        <h1 className={styles.title}>
                            统一账号 &nbsp;单点登录
                            <span className="hide-sm">
                                （SSO
                                <Tooltip
                                    title="Single Sign On，单点登录"
                                    placement="top"
                                    enterTouchDelay={0}
                                    leaveTouchDelay={5000}
                                >
                                    <span className="material-icons">help</span>
                                </Tooltip>
                                ）
                            </span>
                        </h1>
                        <p className={styles.subtitle}>
                            接入统一认证中心，跨应用共享账号，在别处注册的用户可以直接登录你的应用。
                        </p>
                        <div className={styles.buttonBox}>
                            <a
                                className="button button--primary button--lg"
                                href="https://www.onlyid.net/console"
                                target="_blank"
                            >
                                开始使用
                            </a>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/sso"
                                style={{ marginLeft: 30 }}
                            >
                                查看文档
                            </Link>
                        </div>
                    </div>
                    <div className="col padding--md">
                        <img src={ssoBanner} alt="ssoBanner" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
