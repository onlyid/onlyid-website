import React, { PureComponent } from "react";
import styles from "./index.module.css";
import { Grid, Hidden, Popper, Paper } from "@material-ui/core";
import classNames from "classnames";
import weChat155 from "@site/static/img/wechat-155.jpeg";
import Link from "@docusaurus/Link";

export default class extends PureComponent {
    state = {
        anchorEl: null,
    };

    showWeChat = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };

    closeWeChat = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <footer className={styles.root}>
                <div className={styles.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <ul>
                                <li>佛山市爱达斯科技有限公司</li>
                                <li>Foshan IDaaS Technology Co., Ltd.</li>
                                <li className={styles.address}>
                                    广东省佛山市禅城区张槎一路117号二座自编2号楼六层6655
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ul className={styles.contact}>
                                <li>
                                    <span className="material-icons">phone</span>
                                    电话 / 微信
                                    <Hidden xsDown>
                                        <span
                                            className="material-icons"
                                            style={{ margin: 0 }}
                                            onMouseEnter={this.showWeChat}
                                            onMouseLeave={this.closeWeChat}
                                        >
                                            qr_code
                                        </span>
                                    </Hidden>
                                    ：15521312099
                                </li>
                                <li>
                                    <span className={classNames("iconfont", styles.qq)}>
                                        &#xe676;
                                    </span>
                                    QQ：452391310
                                </li>
                                <li>
                                    <span className="material-icons">mail</span>
                                    邮箱：
                                    <a href="mailto:help@onlyid.net">help@onlyid.net</a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <ul className={styles.links}>
                                <li>
                                    <Link to="/about">关于我们</Link>
                                </li>
                                <li>
                                    <Link to="/careers">加入我们</Link>
                                </li>
                                <li>
                                    <Link to="/terms">用户协议</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">隐私政策</Link>
                                </li>
                            </ul>
                            <p className={styles.copyright}>
                                &copy; 2017-{new Date().getFullYear()} 爱达斯科技 IDaaS Tech
                            </p>
                            <p className={styles.beian}>
                                <a
                                    href="https://beian.miit.gov.cn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    粤ICP备16120960号
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                </div>

                <Popper
                    open={!!anchorEl}
                    anchorEl={anchorEl}
                    placement="top"
                    className={styles.popper1}
                >
                    <Paper>
                        <img src={weChat155} alt="weChat" />
                    </Paper>
                </Popper>
            </footer>
        );
    }
}
