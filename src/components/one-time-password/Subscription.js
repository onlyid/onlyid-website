import React from "react"
import styles from "./Subscription.module.css"
import img1 from "@site/static/img/otp-subscription.png"

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className={styles.p1}>
                            唯ID提供极具竞争力的价格方案，满足各种规模应用的认证需求
                        </p>
                        <div className={styles.item}>
                            <h3>
                                <span className="material-icons" style={{ color: "#f5ce15" }}>
                                    savings
                                </span>
                                按年订阅
                            </h3>
                            <p>唯ID的订阅年费仅300元，赠送6000条短信，满足小微应用的认证需求</p>
                        </div>
                        <div className={styles.item}>
                            <h3>
                                <span className="material-icons" style={{ color: "#2299dd" }}>
                                    sms
                                </span>
                                短信计费
                            </h3>
                            <p>超出6000条短信部分，按 3.5 分钱每条计费，满足大型应用的认证需求</p>
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
