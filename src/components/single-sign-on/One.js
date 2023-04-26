import React from "react";
import styles from "./One.module.css";
import img1 from "@site/static/img/sso-one1.png";
import img2 from "@site/static/img/sso-one2.png";
import cn from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className={styles.title}>
                    SSO可以取代<span style={{ whiteSpace: "nowrap" }}>自有+社交登录</span>
                </h2>
                <div className="row">
                    <div className={cn("col col--5", styles.col1)}>
                        <div className={styles.imgBox1}>
                            <img src={img1} alt="intro" />
                            <p>不建议</p>
                        </div>
                        <div className={styles.imgBox2}>
                            <img src={img2} alt="intro" />
                            <p>
                                <span className="material-icons">check</span> 推荐
                            </p>
                        </div>
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
                                    一个APP
                                </h3>
                                <p>APP支持扫码登录，还有修改用户资料、管理登录设备等功能</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
