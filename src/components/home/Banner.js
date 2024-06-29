import React from "react";
import styles from "./Banner.module.css";

export default function () {
    return (
        <section className={styles.root}>
            <div>
                <h1 className={styles.title}>唯ID统一认证服务</h1>
                <p className={styles.subtitle}>
                    帮助网站和APP做好用户登录
                    <br className={styles.showSm} />
                    这一件事
                </p>
                <div>
                    <a
                        className="button button--primary button--lg"
                        href="https://onlyid.net/console"
                        target="_blank"
                    >
                        开始使用
                    </a>
                </div>
            </div>
        </section>
    );
}
