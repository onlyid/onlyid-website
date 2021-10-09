import React from "react";
import styles from "./Compare.module.css";
import img1 from "@site/static/img/sso-compare.png";
import classNames from "classnames";
import Neutral from "@site/static/img/neutral.svg";
import Privacy from "@site/static/img/privacy.svg";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">SSO不是微信登录</h2>
                <div className="row">
                    <div className={classNames("col", styles.left)}>
                        <p className={styles.origin}>
                            SSO的设计初衷是<span>替代应用的自有登录。</span>
                        </p>
                        <div>
                            <h3 className={styles.title}>
                                <Neutral className={styles.neutral} />
                                中立开放
                            </h3>
                            <p className={styles.detail}>
                                唯ID永远不会涉足和客户竞争的业务，作为对比，腾讯为了扶持自家微视，屏蔽了抖音的微信登录。
                            </p>
                        </div>
                        <div>
                            <h3 className={styles.title}>
                                <span className={classNames("material-icons", styles.dashboard)}>
                                    dashboard
                                </span>
                                功能全面
                            </h3>
                            <p className={styles.detail}>
                                唯ID是专业的IDaaS产品，充分借鉴国内外创新成果，比如配合SSO有完善的用户管理和权限控制功能。
                            </p>
                        </div>
                        <div>
                            <h3 className={styles.title}>
                                <Privacy className={styles.privacy} />
                                保护隐私
                            </h3>
                            <p className={styles.detail}>
                                唯ID非常重视对用户隐私的保护，比如支持用邮箱登录（不暴露手机号），而微信只支持用手机号登录。
                            </p>
                        </div>
                    </div>
                    <div className={classNames("col", styles.right)}>
                        <img src={img1} alt="compare" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
