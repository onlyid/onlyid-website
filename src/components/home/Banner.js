import React from "react";
import classNames from "classnames";
import styles from "./Banner.module.css";

export default function () {
    return (
        <div className={classNames("hero", styles.root)}>
            <div>
                <h1 className={styles.title}>唯ID是专为面向公众的应用打造的IDaaS解决方案，</h1>
                <p className={styles.subtitle}>
                    帮助网站和APP做好用户登录、用户管理和用户权限控制三件事。
                </p>
                <div>
                    <a
                        className="button button--primary button--lg"
                        href="https://www.onlyid.net/console"
                    >
                        开始使用
                    </a>
                </div>
            </div>
        </div>
    );
}
