import React from "react";
import styles from "./Statistic.module.css";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className="col padding--md">
                        <h3>
                            100<span>+</span>
                        </h3>
                        <span>注册应用数</span>
                    </div>
                    <div className="col padding--md">
                        <h3>
                            5000<span>+</span>
                        </h3>
                        <span>每天登录/认证人次</span>
                    </div>
                    <div className="col padding--md">
                        <h3>
                            400,000<span>+</span>
                        </h3>
                        <span>覆盖用户数</span>
                    </div>
                </div>
                <hr className={styles.hr1} />
            </div>
        </section>
    );
}
