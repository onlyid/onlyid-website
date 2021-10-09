import React, { PureComponent } from "react";
import styles from "./Case.module.css";
import caseIcon from "@site/static/img/otp-case-icon.png";
import screenshot from "@site/static/img/otp-case-screenshot.jpg";
import { Dialog, DialogContent } from "@material-ui/core";
import classNames from "classnames";

export default class extends PureComponent {
    state = {
        dialogOpen: false,
    };

    toggleDialog = () => {
        this.setState(({ dialogOpen }) => ({ dialogOpen: !dialogOpen }));
    };

    render() {
        const { dialogOpen } = this.state;

        return (
            <section className={styles.root}>
                <div className="container">
                    <h2 className="main-title">体验案例：彼位</h2>
                    <div className="row" style={{ position: "relative" }}>
                        <div className={classNames("col col--3", styles.leftCol)}>
                            <div>
                                <div className={styles.appBox}>
                                    <img src={caseIcon} alt="caseIcon" />
                                    <p>彼位</p>
                                </div>
                                <ul className={styles.desc}>
                                    <li>实时位置轨迹查看</li>
                                    <li>守护家人朋友</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col--4 col--offset-1">
                            <img src={screenshot} alt={screenshot} className={styles.img1} />
                        </div>
                        <div className="col col--3 col--offset-1">
                            <div className={styles.right}>
                                <ul className={styles.ul1}>
                                    <li>
                                        <span>开发者：</span>张佩雯
                                    </li>
                                    <li>
                                        <span>版权：</span>&copy; 2020 BiWEI Inc
                                    </li>
                                </ul>
                                <div className={styles.divider}>
                                    <div />
                                </div>
                                <div>
                                    <p className={styles.tryTitle}>体验方式</p>
                                    <p className={styles.tryDetail}>
                                        iPhone用户请到App Store搜索下载；Android版暂未上架
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className={styles.showOff} onClick={this.toggleDialog}>
                            展示你的应用
                        </p>
                    </div>
                </div>

                <Dialog open={dialogOpen} onClose={this.toggleDialog}>
                    <DialogContent className={styles.dialogContent}>
                        <p>本栏目（体验案例）接受企业/开发者投稿。</p>
                        <p className={styles.title1}>投稿要求</p>
                        <ol>
                            <li>你的应用至少使用一项唯ID的产品功能。</li>
                            <li>你的应用是开放给公众访问下载使用的。</li>
                            <li>小而美、解决一些独特问题的应用优先。</li>
                        </ol>
                        <p className={styles.title1}>投稿方式</p>
                        <ol>
                            <li>通过官网底部的联系方式联系我们，有专人对接。</li>
                        </ol>
                        <p className={styles.title1}>其他事项</p>
                        <ol style={{ marginBottom: 0 }}>
                            <li>入选应用会在唯ID官网展示一到三个月时间。</li>
                            <li>参与本活动没有奖励，但也不收取任何费用。</li>
                            <li>本活动即日起长期有效，暂无计划截止日期。</li>
                        </ol>
                    </DialogContent>
                </Dialog>
            </section>
        );
    }
}
