import styles from "./Pro.module.css";
import React from "react";
import pa from "@site/static/img/pingan.jpeg";
import cmb from "@site/static/img/cmb.jpeg";
import support from "@site/static/img/support.png";
import arch from "@site/static/img/arch.png";
import classNames from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">专业、安全、稳定</h2>
                <div className={classNames("row", styles.row1)}>
                    <div className="col col--2 padding--md">
                        <img src={pa} alt="pa" />
                    </div>
                    <div className="col padding--md">
                        <p>
                            前平安集团智慧城市统一用户平台 PAI（Ping An
                            Identity）总负责人创立并领导唯ID。
                        </p>
                    </div>
                </div>
                <div className={classNames("row", styles.row1)}>
                    <div className="col col--2 padding--md">
                        <img src={cmb} alt="cmb" />
                    </div>
                    <div className="col padding--md">
                        <p>
                            前招商银行风控反欺诈专家，打造支付级别安全风控系统，为每一次登录保驾护航。
                        </p>
                    </div>
                </div>
                <div className="row padding-top--md">
                    <div className="col padding--md">
                        <div className={styles.item}>
                            <img src={arch} alt="arch" />
                            <div>
                                <h3>分布式云架构</h3>
                                <p>
                                    基于成熟的Java+Spring分布式技术，可承载数亿用户规模，支持数万人并发使用，全年可用时间高达
                                    99.9% 。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col--1 hide-sm" />
                    <div className="col padding--md">
                        <div className={styles.item}>
                            <img src={support} alt="support" />
                            <div>
                                <h3>全面技术支持</h3>
                                <p>
                                    提供全方位技术支持，覆盖售前咨询、集成顾问、使用帮助等。生产级别问题
                                    7×24 小时随时响应，全年无休。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
