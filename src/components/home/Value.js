import React from "react";
import styles from "./Value.module.css";
import Neutral from "@site/static/img/home-neutral.svg";
import OAuth from "@site/static/img/home-oauth.svg";
import classNames from "classnames";
import { Tooltip } from "@material-ui/core";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">坚持两个原则</h2>
                <p className={styles.p1}>唯ID的使命是建立全球统一的账号认证体系，我们坚持：</p>
                <div className="row">
                    <div className="col">
                        <div className={classNames(styles.item, styles.neutral)}>
                            <div className={styles.titleBox}>
                                <div className={styles.iconBox}>
                                    <Neutral />
                                </div>
                                <h3>绝对中立</h3>
                            </div>
                            <ul>
                                <li>承诺永远不会接受任何互联网垄断巨头的投资</li>
                                <li>承诺永远不会涉足任何可能和客户竞争的业务</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className={classNames(styles.item, styles.open)}>
                            <div className={styles.titleBox}>
                                <div className={styles.iconBox}>
                                    <OAuth />
                                </div>
                                <h3>开源开放</h3>
                            </div>
                            <ul>
                                <li>代码开源在GitHub，透明公开，接受公众监管</li>
                                <li>拥抱开放标准，如单点登录采用OAuth授权协议</li>
                                <li>
                                    单点登录返回真实用户标识（手机号/邮箱）
                                    <Tooltip
                                        title="一些社交登录只返回平台相关ID，意在绑定应用不能自由迁出"
                                        placement="top"
                                        enterTouchDelay={0}
                                        leaveTouchDelay={5000}
                                    >
                                        <span className="material-icons">help_outline</span>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
