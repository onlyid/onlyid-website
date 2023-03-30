import React from "react";
import styles from "./Subscription.module.css";
import classNames from "classnames";
import img1 from "@site/static/img/otp-subscription.png";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col col--7">
                        <p className={styles.p1}>
                            对比友商竞品，唯ID提供包年订阅服务，更实惠更省心
                        </p>
                        <div className={styles.item}>
                            <h3>
                                <span className={classNames("material-icons", styles.savings)}>
                                    savings
                                </span>
                                价格实惠
                            </h3>
                            <p>使用唯ID标准版（年费200元），每月可以发送一万条验证码</p>
                        </div>
                        <div className={styles.item}>
                            <h3>
                                <span className={classNames("material-icons", styles.infinity)}>
                                    all_inclusive
                                </span>
                                无限发送
                            </h3>
                            <p>升级唯ID专业版（年费2000元），就可以发送无限量的验证码</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={img1} alt="subscription" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
