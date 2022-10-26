import React, { PureComponent } from "react";
import styles from "./Case.module.css";
import caseIcon from "@site/static/img/otp-case-icon.png";
import screenshot from "@site/static/img/otp-case-screenshot.jpg";
import ShowOffDialog from "./ShowOffDialog";
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
                <ShowOffDialog open={dialogOpen} onClose={this.toggleDialog} />
            </section>
        );
    }
}
