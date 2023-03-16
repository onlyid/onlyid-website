import React from "react";
import Figure from "./Figure";
import styles from "./index.module.css";
import classNames from "classnames";
import Java from "@site/static/img/home-java.svg";
import Php from "@site/static/img/home-php.svg";
import Python from "@site/static/img/home-python.svg";
import Js from "@site/static/img/home-js.svg";
import Net from "@site/static/img/home-net.svg";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">写代码好轻松</h2>
                <div className="row">
                    <div className="col">
                        <Figure />
                    </div>
                    <div className="col">
                        <div>
                            <div className={styles.item}>
                                <h3>
                                    <span className={classNames("material-icons", styles.code)}>
                                        code
                                    </span>
                                    上手简单
                                </h3>
                                <p>通过5个精心提炼的API，快速调用OTP和接入SSO功能</p>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <span className={classNames("material-icons", styles.category)}>
                                        category
                                    </span>
                                    技术中立
                                </h3>
                                <p>中立的API设计，兼容所有技术栈，不强制使用特定技术</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box1}>
                    <Java style={{ height: 43 }} />
                    <Php style={{ height: 36 }} />
                    <Python style={{ height: 38 }} />
                    <Js style={{ height: 38 }} />
                    <Net style={{ height: 42 }} />
                </div>
            </div>
        </section>
    );
}
