import React, { PureComponent } from "react";
import styles from "./Case.module.css";
import caseIcon from "@site/static/img/sso-case-icon.png";
import screenshot from "@site/static/img/sso-case-screenshot.png";
import ShowOffDialog from "../one-time-password/CaseDialog";
import classNames from "classnames";

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
                <div className="container">
                    <h2 className="main-title">体验案例：唯ID控制台</h2>
                    <div className="row" style={{ position: "relative" }}>
                        <div className={classNames("col col--3", styles.leftCol)}>
                            <div>
                                <div className={styles.appBox}>
                                    <img src={caseIcon} alt="caseIcon" />
                                    <p>唯ID</p>
                                </div>
                                <p className={styles.desc}>
                                    唯ID控制台使用SSO实现用户登录功能（可以理解为控制台是接入SSO的一个普通应用）
                                </p>
                            </div>
                        </div>
                        <div className="col col--4 col--offset-1">
                            <img src={screenshot} alt={screenshot} className={styles.img1} />
                        </div>
                        <div className="col col--3 col--offset-1">
                            <div className={styles.right}>
                                <ul className={styles.ul1}>
                                    <li>
                                        <span>开发者：</span>唯ID团队
                                    </li>
                                    <li>
                                        <span>版权：</span>&copy; 2021 爱达斯科技
                                    </li>
                                </ul>
                                <div className={styles.divider}>
                                    <div />
                                </div>
                                <div>
                                    <p className={styles.tryTitle}>体验方式</p>
                                    <p className={styles.tryDetail}>
                                        点击官网右上角控制台开始体验（注：未适配移动端）
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className={styles.showOff} onClick={this.toggleDialog}>
                            展示你的应用
                        </p>
                    </div>
                </div>
                <ShowOffDialog open={dialogOpen} onClose={this.toggleDialog} />
            </section>
        );
    }
}
