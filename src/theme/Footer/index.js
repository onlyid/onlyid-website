import React, { PureComponent } from "react";
import styles from "./index.module.css";
import { Popper, Paper } from "@material-ui/core";
import classNames from "classnames";
import weChat155 from "@site/static/img/footer-wechat-155.jpeg";
import Link from "@docusaurus/Link";
import { withRouter } from "react-router";
import Numbers from "./Numbers";

class Footer extends PureComponent {
    state = {
        anchorEl: null
    };

    showWeChat = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };

    closeWeChat = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const {
            location: { pathname }
        } = this.props;

        const showStat = !pathname.startsWith("/web/blog") && !pathname.startsWith("/web/docs");

        return (
            <footer className={styles.root}>
                {showStat && <Numbers />}
                <div className={classNames("container", styles.container)}>
                    <div className="row">
                        <div className="col">
                            <ul className={styles.contact}>
                                <li>
                                    <span className="material-icons">phone</span>
                                    电话 / 微信
                                    <span
                                        className="material-icons"
                                        style={{ margin: 0 }}
                                        onMouseEnter={this.showWeChat}
                                        onMouseLeave={this.closeWeChat}
                                    >
                                        qr_code
                                    </span>
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
                        </div>
                        <div className="col">
                            <p className={styles.company}>
                                <span>佛山市爱达斯科技有限公司</span>
                                <span>Foshan IDaaS Tech. Co.,Ltd.</span>
                            </p>
                            <ul className={styles.links}>
                                <li>
                                    <Link to="/about">关于我们</Link>
                                </li>
                                <li className={styles.divider} />
                                <li>
                                    <Link to="/careers">加入我们</Link>
                                </li>
                                <li className={styles.divider} />
                                <li>
                                    <a href="https://onlyid.net/static/terms.html" target="_blank">
                                        服务协议
                                    </a>
                                </li>
                                <li className={styles.divider} />
                                <li>
                                    <a
                                        href="https://onlyid.net/static/privacy.html"
                                        target="_blank"
                                    >
                                        隐私政策
                                    </a>
                                </li>
                            </ul>
                            <p className={styles.copyright}>
                                <span>&copy; &nbsp;2021 ~ {new Date().getFullYear()}</span>
                                <span>爱达斯科技</span>
                                <a
                                    href="https://beian.miit.gov.cn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    粤ICP备16120960号
                                </a>
                            </p>
                        </div>
                    </div>
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

export default withRouter(Footer);
