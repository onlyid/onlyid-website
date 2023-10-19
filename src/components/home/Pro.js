import styles from "./Pro.module.css";
import React from "react";
import pa from "@site/static/img/home-pro-pingan.jpeg";
import cmb from "@site/static/img/home-pro-cmb.jpeg";
import support from "@site/static/img/home-pro-support.png";
import arch from "@site/static/img/home-pro-arch.png";
import cn from "classnames";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">专业 &nbsp;安全 &nbsp;稳定</h2>
                <div className={cn("row", styles.row1, styles.rowPa)}>
                    <div className="col col--2">
                        <img src={pa} alt="pa" />
                    </div>
                    <div className="col">
                        <p>
                            前平安集团智慧城市统一用户平台负责人，创立唯ID并长期担任总负责人指引前进方向
                        </p>
                    </div>
                </div>
                <div className={cn("row", styles.row1, styles.rowCmb)}>
                    <div className="col col--2">
                        <img src={cmb} alt="cmb" />
                    </div>
                    <div className="col">
                        <p>
                            前招商银行高级风控工程师，打造支付级别安全风控系统，为用户每一次登录保驾护航
                        </p>
                    </div>
                </div>
                <div className={cn("row", styles.row2)}>
                    <div className="col">
                        <div className={styles.item}>
                            <img src={arch} alt="arch" />
                            <div>
                                <h3>分布式云架构</h3>
                                <p>
                                    基于成熟的Java+Spring技术，可承载数千万用户规模，支持数万人并发使用，全年可用时间高达
                                    99.9%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.item}>
                            <img src={support} alt="support" />
                            <div>
                                <h3>全面技术支持</h3>
                                <p>
                                    提供全面技术支持，覆盖售前咨询、集成顾问、使用帮助等；生产级别问题
                                    7×24 小时随时响应，全年无休
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
