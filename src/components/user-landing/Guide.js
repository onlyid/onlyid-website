import React from "react"
import styles from "./Guide.module.css"
import guide3 from "@site/static/img/user-guide-3.png"
import guide4 from "@site/static/img/user-guide-4.png"
import guide5 from "@site/static/img/user-guide-5.png"
import guide6 from "@site/static/img/user-guide-6.png"

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">如何使用</h2>
                <div className={styles.gridBox}>
                    <div className={styles.item}>
                        <img src={guide3} alt="guide3" className={styles.guide3} />
                        <p>通过注册的唯ID账号密码登录网站APP</p>
                        <span>新用户请使用唯ID APP注册账号、设置密码</span>
                    </div>
                    <div className={styles.item}>
                        <img src={guide4} alt="guide4" className={styles.guide4} />
                        <p>通过唯ID APP扫码登录电脑网站</p>
                        <span>网站接入唯ID后，通过扫码登录体验更流畅</span>
                    </div>
                    <div className={styles.item}>
                        <img src={guide5} alt="guide5" className={styles.guide5} />
                        <p>通过唤起唯ID APP登录手机应用</p>
                        <span>应用接入唯ID后，通过应用间跳转授权登录</span>
                    </div>
                    <div className={styles.item}>
                        <img src={guide6} alt="guide6" className={styles.guide6} />
                        <p>授权应用可以访问你的账号资料</p>
                        <span>使用唯ID APP修改账号资料、管理授权应用</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
