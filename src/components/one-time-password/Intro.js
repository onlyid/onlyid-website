import React from "react"
import styles from "./Intro.module.css"
import guide1 from "@site/static/img/user-guide-1.png"

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col col--5">
                        <img src={guide1} alt="intro" className={styles.img1} />
                    </div>
                    <div className="col">
                        <p className={styles.p1}>唯ID综合多种方式推送验证码，降低企业成本同时提升用户体验</p>
                        <div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#3f51b5" }}>
                                        category
                                    </span>
                                    推送APP
                                </h3>
                                <p>用户安装了唯ID APP，推送验证码到APP，速度快、体验好、更加安全</p>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#4caf50" }}>
                                        sms
                                    </span>
                                    自动回退
                                </h3>
                                <p>用户未安装唯ID APP，自动回退到短信/邮箱，确保用户体验连续不中断</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
