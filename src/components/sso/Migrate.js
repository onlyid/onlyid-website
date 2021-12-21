import styles from "./Migrate.module.css";
import React from "react";
import { Tooltip } from "@material-ui/core";
import migrate1 from "@site/static/img/sso-migrate1.png";
import classNames from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">迁移，很简单</h2>
                <p className={styles.p1}>
                    得益于返回{" "}
                    <span>
                        真实用户标识{" "}
                        <Tooltip
                            title="指用户的手机号 / 邮箱"
                            placement="top"
                            enterTouchDelay={0}
                            leaveTouchDelay={5000}
                        >
                            <span className="material-icons">help</span>
                        </Tooltip>
                    </span>{" "}
                    的特点，你的应用可以很简单地迁移到SSO。
                </p>
                <div className="row">
                    <div className="col col--4">
                        <img src={migrate1} alt="migrate1" className={styles.img1} />
                    </div>
                    <div className="col col--offset-1 col--7">
                        <p className={styles.title}>
                            <span className={classNames(styles.step, styles.first)}>1</span>
                            将自有登录替换成 "用唯ID登录"，并增加提示文案引导用户。
                        </p>
                        <div className={styles.guideBox}>
                            <span className="material-icons">thumb_up</span>
                            <p>
                                建议文案：已迁移用唯ID登录，老用户请使用之前的手机号/邮箱登录，即可自动匹配到原来的用户数据。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
