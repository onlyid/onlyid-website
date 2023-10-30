import React, { PureComponent } from "react";
import styles from "./Case.module.css";
import icon from "@site/static/img/sso-case-icon.png";
import screenshot from "@site/static/img/sso-case-screenshot.png";
import CaseDialog from "../one-time-password/CaseDialog";

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
                            <div className={styles.appBox}>
                                <img src={icon} alt="icon" />
                                <p>唯ID控制台</p>
                            </div>
                            <div className={styles.box1}>
                                <p className={styles.desc}>
                                    控制台是接入SSO的第一个应用，它调用SSO的方式和你的应用并无不同。
                                </p>
                                <p className={styles.p1}>体验方式</p>
                                <p className={styles.p2}>点击官网顶部 “控制台” 开始登录流程。</p>
                            </div>
                            <div className={styles.buttonBox}>
                                <span className={styles.button} onClick={this.toggleDialog}>
                                    展示我的应用
                                </span>
                            </div>
                        </div>
                        <div className="col col--7">
                            <img src={screenshot} alt="screenshot" className={styles.img1} />
                        </div>
                    </div>
                </div>

                <CaseDialog open={dialogOpen} onClose={this.toggleDialog} />
            </section>
        );
    }
}
