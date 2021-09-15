import React from "react";
import styles from "./Unlimited.module.css";
import classNames from "classnames";
import otpUnlimited from "@site/static/img/otp-unlimited.png";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">订阅式包年服务</h2>
                <div className="row">
                    <div className="col col--7 padding--md">
                        <p className={styles.p1}>
                            相比友商同类产品，唯ID提供包年服务，不按发送条数计费。
                        </p>
                        <div>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.infinity)}>
                                    all_inclusive
                                </span>
                                无限发送
                            </h3>
                            <p className={styles.detail}>
                                唯ID的两档套餐（200/2000）均可以无差别发送无限量的验证码。
                            </p>
                        </div>
                        <div className={styles.box1}>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.savings)}>
                                    savings
                                </span>
                                费用兜底
                            </h3>
                            <p className={styles.detail}>
                                除固定年费外，不管是短信还是邮件验证码均不额外再计算费用。
                            </p>
                        </div>
                    </div>
                    <div className="col col--5 padding--md">
                        <img src={otpUnlimited} alt="otpUnlimited" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
