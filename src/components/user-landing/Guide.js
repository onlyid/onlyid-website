import React from "react"
import styles from "./Guide.module.css"
import guide1 from "@site/static/img/user-guide-1.png"
import guide2 from "@site/static/img/otp-intro.png"
import guide3 from "@site/static/img/user-guide-3.png"
import guide4 from "@site/static/img/user-guide-4.png"
import guide5 from "@site/static/img/user-guide-5.png"
import guide6 from "@site/static/img/user-guide-6.png"

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">如何使用</h2>
                <p className={styles.tip}>* 仅部分使用了唯ID服务的应用支持以下功能</p>
                <div className={styles.gridBox}>
                    <div className={styles.item}>
                        <img src={guide1} alt="guide1" className={styles.guide1} />
                        <p>通过唯ID APP接收验证码登录网站APP</p>
                        <span>APP接收验证码，速度快、体验好、更安全</span>
                    </div>
                    <div className={styles.item}>
                        <img src={guide2} alt="guide2" className={styles.guide2} />
                        <p>当未安装APP时，自动回退到短信/邮箱</p>
                        <span>自动回退机制，确保用户体验连续不中断</span>
                    </div>
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
