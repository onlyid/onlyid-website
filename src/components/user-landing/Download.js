import React from "react"
import styles from "./Download.module.css"
import icon from "@site/static/img/sso-case-icon.png"
import screenshot from "@site/static/img/user-download-screenshot.png"

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title" id="download">下载 唯ID APP</h2>
                <div className="row">
                    <div className="col col--2">
                        <img src={icon} alt="icon" className={styles.icon} />
                    </div>
                    <div className="col col--5">
                        <img src={screenshot} alt="screenshot" className={styles.img1} />
                    </div>
                    <div className="col">
                        <div className={styles.box1}>
                            <div>
                                <h3>
                                    <i className="iconfont">&#xe72c;</i>
                                    iPhone
                                </h3>
                                <p>到App Store搜索 <span>“唯ID”</span>，下载安装</p>
                            </div>
                            <hr />
                            <div>
                                <h3>
                                    <i className="material-icons">android</i>
                                    Android
                                </h3>
                                <p>华为、小米、OPPO、vivo、荣耀：<br />
                                    到应用商店搜索 <span>“唯ID”</span>，下载安装</p>
                                <p>
                                    其他品牌用户点击直接下载{" "}
                                    <a href="https://onlyid.net/static/downloads/onlyid.apk">
                                        安装包
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
