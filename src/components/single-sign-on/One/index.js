import React from "react";
import Figure from "./Figure";
import styles from "./index.module.css";
import cn from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title" style={{ fontSize: 30 }}>
                    SSO可以取代<span style={{ whiteSpace: "nowrap" }}>自有+社交登录</span>
                </h2>
                <div className="row">
                    <div className={cn("col", styles.col1)}>
                        <Figure />
                    </div>
                    <div className={cn("col", styles.col2)}>
                        <div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#f08c10" }}>
                                        password
                                    </span>
                                    一个密码
                                </h3>
                                <p>用户首次注册设置密码，后续就可以登录所有接入SSO的应用</p>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#3f51b5" }}>
                                        portrait
                                    </span>
                                    一套资料
                                </h3>
                                <p>用户账号有头像、昵称、邮箱和手机号等字段供应用直接使用</p>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className="material-icons" style={{ color: "#2299dd" }}>
                                        category
                                    </span>
                                    唯ID APP
                                </h3>
                                <p>APP支持扫码登录，还有修改用户资料、管理授权应用等功能</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
