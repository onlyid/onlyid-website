import React from "react";
import styles from "./Value.module.css";
import Neutral from "@site/static/img/neutral.svg";
import OAuth from "@site/static/img/oauth.svg";
import classNames from "classnames";
import { Tooltip } from "@material-ui/core";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">坚持两大原则</h2>
                <div className="row">
                    <div className="col">
                        <div className={classNames(styles.item, styles.neutral)}>
                            <div className={styles.iconBg}>
                                <Neutral />
                            </div>
                            <h3>绝对中立</h3>
                            <ol>
                                <li>现在、将来都不会接受任何互联网垄断巨头的投资。</li>
                                <li>现在、将来都不会涉足任何可能和客户竞争的业务。</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col">
                        <div className={classNames(styles.item, styles.open)}>
                            <div className={styles.iconBg}>
                                <OAuth />
                            </div>
                            <h3>开源开放</h3>
                            <ol>
                                <li>代码开源在GitHub，透明公开，欢迎参与贡献。</li>
                                <li>拥抱开放标准，如单点登录采用了OAuth授权协议。</li>
                                <li>
                                    单点登录返回真实用户标识（手机号/邮箱）
                                    <Tooltip
                                        title="一些社会化登录方式（如微信、微博）不返回真实用户标识给应用，意在绑定应用不能自由迁出。"
                                        placement="top"
                                        enterTouchDelay={0}
                                        leaveTouchDelay={5000}
                                    >
                                        <span className="material-icons">help</span>
                                    </Tooltip>
                                    。
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
