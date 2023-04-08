import React from "react";
import styles from "./Advantage.module.css";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">产品优势</h2>
                <div className="row">
                    <div className="col">
                        <div className={styles.item}>
                            <span className="material-icons">verified_user</span>
                            <h3>提供校验接口</h3>
                            <p>调用现成接口快速完成验证码校验，节省开发成本和避免潜在的安全风险</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.item}>
                            <span className="material-icons">send</span>
                            <h3>短信秒级抵达</h3>
                            <p>短信三网合一通道，验证码到达率大于99% ，90%以上验证码10秒内抵达</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.item}>
                            <span className="material-icons">email</span>
                            <h3>同时支持邮箱</h3>
                            <p>不需要额外学习成本，快速发送验证码到邮箱，支持国内外主流邮箱品牌</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
