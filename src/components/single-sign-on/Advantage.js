import React from "react";
import { Tooltip } from "@material-ui/core";
import styles from "./Advantage.module.css";
import oauth from "@site/static/img/sso-oauth.png";
import cn from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">产品优势</h2>
                <div className={styles.gridBox}>
                    <div className={styles.item}>
                        <h3>
                            <span className={cn("material-icons", styles.neutral)}>
                                local_hospital
                            </span>
                            保持中立
                        </h3>
                        <p>唯ID自身没有任何其他业务，不会出现抖音不能用微信登录的情况</p>
                    </div>
                    <div className={styles.item}>
                        <h3>
                            <span className={cn("iconfont", styles.github)}>&#xe6f6;</span>
                            代码开源
                        </h3>
                        <p>项目代码开源在GitHub，透明公开，接受公众监管，也欢迎参与贡献</p>
                    </div>
                    <div className={styles.item}>
                        <h3>
                            <span className={cn("material-icons", styles.user)}>
                                account_circle
                            </span>
                            真实用户
                        </h3>
                        <p>
                            UserInfo接口返回用户邮箱和手机号信息，可以唯一标识真实用户{" "}
                            <Tooltip
                                title="一些社交登录只返回平台相关ID，意在绑定应用不能自由迁出"
                                placement="top"
                                enterTouchDelay={0}
                                leaveTouchDelay={0}
                            >
                                <span className="material-icons">help_outline</span>
                            </Tooltip>
                        </p>
                    </div>
                    <div className={styles.item}>
                        <h3>
                            <span className="material-icons" style={{ color: "#4caf50" }}>
                                security
                            </span>
                            安全风控
                        </h3>
                        <p>全程https加密，密码安全存储，银行风控专家为用户安全保驾护航</p>
                    </div>
                    <div className={styles.item}>
                        <h3>
                            <img src={oauth} alt="oauth" className={styles.oauth} />
                            OAuth流程
                        </h3>
                        <p>标准OAuth协议流程，3个设计良好的API，30分钟就可以完成接入</p>
                    </div>
                    <div className={styles.item}>
                        <h3>
                            <span className="material-icons" style={{ color: "#f5ce15" }}>
                                savings
                            </span>
                            价格实惠
                        </h3>
                        <p>唯ID提供包年订阅服务，年费是200元，可以无限制使用所有功能</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
