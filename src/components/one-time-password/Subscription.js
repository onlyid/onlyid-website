import React from "react";
import styles from "./Subscription.module.css";
import classNames from "classnames";
import img1 from "@site/static/img/otp-subscription.png";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col">
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
                            <p>唯ID只有一档套餐，年费仅200元，没有其他隐形收费项目</p>
                        </div>
                        <div className={styles.item}>
                            <h3>
                                <span className={classNames("material-icons", styles.infinity)}>
                                    all_inclusive
                                </span>
                                无限发送
                            </h3>
                            <p>除固定年费外，短信不额外计费，可以发送无限量的验证码</p>
                        </div>
                    </div>
                    <div className="col col--5">
                        <img src={img1} alt="subscription" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
