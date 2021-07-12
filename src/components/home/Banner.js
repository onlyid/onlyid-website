import React, { PureComponent } from "react";
import classNames from "classnames";
import styles from "./Banner.module.css";
import { Paper, Popper } from "@material-ui/core";

export default class extends PureComponent {
    state = {
        anchorEl: null,
    };

    showTip = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };

    closeTip = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div className={classNames("hero", styles.root)}>
                <div>
                    <h1 className={styles.title}>
                        唯ID是面向 公众应用
                        <span
                            className="material-icons"
                            onMouseEnter={this.showTip}
                            onMouseLeave={this.closeTip}
                        >
                            help
                        </span>{" "}
                        的IDaaS解决方案，
                    </h1>
                    <p className={styles.subtitle}>
                        帮助网站和APP做好用户登录、用户管理和用户权限控制三件事。
                    </p>
                    <div>
                        <a
                            className="button button--primary button--lg"
                            href="https://www.onlyid.net/console"
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
                        <p>开放给公众注册、使用的网站和APP</p>
                    </Paper>
                </Popper>
            </div>
        );
    }
}
