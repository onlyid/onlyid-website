import React from "react"
import styles from "./Banner.module.css"
import Logo from "@site/static/img/logo.svg"
import Link from "@docusaurus/Link"
import icon from "@site/static/img/sso-case-icon.png"

export default function () {
    return (
        <section className={styles.root}>
            <div className={styles.header}>
                <Logo />
                <Link to="/home" className="button button--primary button--outline">
                    我是开发者
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col--7">
                        <div>
                            <h1>
                                用唯ID登录网站APP<br />
                                安全、快捷、更省心
                            </h1>
                            <Link to="/user-landing#download" className="button button--primary button--lg">
                                下载 唯ID APP
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.phoneBox}>
                            <Link to="/user-landing#download">
                                <img src={icon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
