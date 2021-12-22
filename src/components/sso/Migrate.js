import styles from "./Migrate.module.css";
import React from "react";
import { Tooltip } from "@material-ui/core";
import migrate1 from "@site/static/img/sso-migrate1.png";
import migrate2 from "@site/static/img/sso-migrate2.png";
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
                    <div className={classNames("col", styles.left)}>
                        <img src={migrate1} alt="migrate1" className={styles.img1} />
                    </div>
                    <div className={classNames("col", styles.right)}>
                        <p className={styles.title}>
                            <span className={classNames(styles.step, styles.first)}>1</span>
                            将自有登录替换成 "用唯ID登录"，并增加提示文案引导用户。
                        </p>
                        <div className={styles.guideBox} style={{ display: "flex" }}>
                            <span className="material-icons">thumb_up</span>
                            <p>
                                建议文案：已迁移用唯ID登录，老用户请使用之前的手机号/邮箱登录，即可自动匹配到原来的用户数据。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={classNames("col", styles.left)}>
                        <img src={migrate2} alt="migrate2" className={styles.img1} />
                    </div>
                    <div className={classNames("col", styles.right)}>
                        <p className={styles.title}>
                            <span className={classNames(styles.step, styles.second)}>2</span>
                            用户登录后，根据三种不同情况更新应用的数据库用户表。
                        </p>
                        <div className={styles.guideBox}>
                            <p>用返回的手机号/邮箱去查询数据库用户表：</p>
                            <ol>
                                <li>
                                    找到记录，且记录的onlyid字段为空，则是老用户首次通过SSO登录，更新onlyid字段为返回的用户id。
                                </li>
                                <li>
                                    找到记录，且onlyid字段不为空，则用户之前已使用过SSO登录，不作处理。
                                </li>
                                <li>
                                    找不到记录，则是新用户，新建一条记录（将返回的用户id赋给onlyid字段）。
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
