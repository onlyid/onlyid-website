import React, { PureComponent } from "react";
import styles from "./Case.module.css";
import icon from "@site/static/img/otp-case-icon.png";
import screenshot from "@site/static/img/otp-case-screenshot.jpg";
import CaseDialog from "./CaseDialog";

export default class extends PureComponent {
    state = {
        dialogOpen: false
    };

    toggleDialog = () => {
        this.setState(({ dialogOpen }) => ({ dialogOpen: !dialogOpen }));
    };

    render() {
        const { dialogOpen } = this.state;

        return (
            <section className={styles.root}>
                <div className="container" style={{ position: "relative" }}>
                    <h2 className="main-title">体验案例</h2>
                    <div className="row">
                        <div className="col">
                            <div className={styles.box1}>
                                <img src={icon} alt="icon" />
                                <p>彼位</p>
                            </div>
                            <ul className={styles.ul1}>
                                <li>实时位置轨迹查看</li>
                                <li>守护家人朋友安全</li>
                            </ul>
                            <div className={styles.buttonBox}>
                                <span className={styles.button} onClick={this.toggleDialog}>
                                    展示我的应用
                                </span>
                            </div>
                        </div>
                        <div className="col col--5">
                            <img src={screenshot} alt="screenshot" className={styles.img1} />
                        </div>
                        <div className="col">
                            <div>
                                <div className={styles.box2}>
                                    <p>
                                        开发者：<span>张佩雯</span>
                                    </p>
                                    <p>
                                        版权：<span>&copy; 2020 BiWei Inc</span>
                                    </p>
                                </div>
                                <p className={styles.p1}>体验方式</p>
                                <div className={styles.box3}>
                                    <p>iPhone用户请到App Store搜索下载</p>
                                    <p>Android平台暂未上架</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CaseDialog open={dialogOpen} onClose={this.toggleDialog} />
            </section>
        );
    }
}
