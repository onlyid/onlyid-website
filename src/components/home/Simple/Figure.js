import React from "react"
import styles from "./Figure.module.css"

export default function () {
    return (
        <div className={styles.root}>
            <div>
                <p className={styles.comment}># 跳转登录页获取code</p>
                <p className={styles.url}>
                    https://onlyid.net/oauth?client-id=应用ID&redirect-uri=应用回调URI
                </p>
            </div>
            <div>
                <p className={styles.comment}># 使用code换取token</p>
                <p className={styles.url}>
                    <span>POST</span> https://onlyid.net/api/open/access-token
                </p>
                <p className={styles.params}>
                    {"{ "}
                    "authCode": <span>"获取到的code"</span>, ...
                    {" }"}
                </p>
            </div>
            <div style={{ width: "fit-content" }}>
                <p className={styles.comment}># 使用token换取用户信息</p>
                <p className={styles.url}>
                    <span>GET</span> https://onlyid.net/api/open/user-info?accessToken=获取到的token
                </p>
            </div>
        </div>
    )
}
