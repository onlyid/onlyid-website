import React, { PureComponent } from "react";
import classNames from "classnames";
import styles from "./Banner.module.css";
import { Paper, Popper } from "@material-ui/core";

export default class extends PureComponent {
    state = {
        anchorEl: null,
        tip: null,
    };

    showTip = (e, tip) => {
        this.setState({ anchorEl: e.currentTarget, tip });
    };

    closeTip = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl, tip } = this.state;

        return (
            <div className={classNames("hero", styles.root)}>
                <div>
                    <h1 className={styles.title}>
                        唯ID是面向 公众应用
                        <span
                            className="material-icons"
                            onMouseEnter={(e) => this.showTip(e, "区别于企业内部信息系统")}
                            onMouseLeave={this.closeTip}
                        >
                            help
                        </span>{" "}
                        的 IDaaS
                        <span
                            className="material-icons"
                            onMouseEnter={(e) =>
                                this.showTip(e, "Identity as a Service，基于云端的身份管理")
                            }
                            onMouseLeave={this.closeTip}
                        >
                            help
                        </span>{" "}
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

                <Popper
                    open={!!anchorEl}
                    anchorEl={anchorEl}
                    placement="top"
                    className={styles.popper1}
                >
                    <Paper>
                        <p>{tip}</p>
                    </Paper>
                </Popper>
            </div>
        );
    }
}
