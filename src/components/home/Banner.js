import React, { PureComponent } from "react";
import styles from "./Banner.module.css";
import { Tooltip } from "@material-ui/core";

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.root}>
                <div>
                    <h1 className={styles.title}>
                        唯ID是面向 公众应用
                        <Tooltip
                            title="区别于企业内部信息系统"
                            placement="top"
                            enterTouchDelay={0}
                            leaveTouchDelay={5000}
                            classes={{ tooltip: styles.tooltip1 }}
                        >
                            <span className="material-icons">help</span>
                        </Tooltip>{" "}
                        的 IDaaS
                        <Tooltip
                            title="Identity as a Service，基于云端的身份管理"
                            placement="top"
                            enterTouchDelay={0}
                            leaveTouchDelay={5000}
                            classes={{ tooltip: styles.tooltip1 }}
                        >
                            <span className="material-icons">help</span>
                        </Tooltip>{" "}
                        解决方案，
                    </h1>
                    <p className={styles.subtitle}>帮助网站和APP做好用户登录和用户管理两件事。</p>
                    <div>
                        <a
                            className="button button--primary button--lg"
                            href="https://www.onlyid.net/console"
                            target="_blank"
                        >
                            开始使用
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
