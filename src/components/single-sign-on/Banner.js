import React from "react";
import styles from "./Banner.module.css";
import img1 from "@site/static/img/sso-banner.png";
import Link from "@docusaurus/Link";
import cn from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="row">
                    <div className={cn("col", styles.col1)}>
                        <span className="material-icons">portrait</span>
                        <h1>单点登录 SSO</h1>
                        <p>接入统一认证中心，跨应用共享账号，在别处注册的用户直接登录你的应用</p>
                        <Link className="button button--primary" to="/docs/single-sign-on">
                            查看文档
                        </Link>
                    </div>
                    <div className="col">
                        <img src={img1} alt="sso" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
