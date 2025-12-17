import React from "react"
import styles from "./Banner.module.css"
import Link from "@docusaurus/Link"

export default function () {
    return (
        <section className={styles.root}>
            <div>
                <h1 className={styles.title}>
                    唯ID帮助网站APP
                    <br className={styles.showSm} />
                    快速实现登录功能
                </h1>
                <div style={{ textAlign: "center" }}>
                    <Link className="button button--primary button--lg" to="/single-sign-on">
                        了解产品
                    </Link>
                </div>
            </div>
        </section>
    )
}
