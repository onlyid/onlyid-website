import React from "react";
import styles from "./Banner.module.css";
import otp from "@site/static/img/otp-banner.jpg";
import Link from "@docusaurus/Link";
import { Tooltip } from "@material-ui/core";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className={styles.title}>
                            无密码 &nbsp;轻认证
                            <span style={{ whiteSpace: "nowrap" }}>
                                （OTP
                                <Tooltip
                                    title="One Time Password，一次性密码"
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
                            用短信/邮件验证码替代传统密码，即使新用户也可以快捷访问你的应用。
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
                                to="/docs/otp"
                                style={{ marginLeft: 30 }}
                            >
                                查看文档
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <img src={otp} alt="otp" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
