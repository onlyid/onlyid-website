import React from "react";
import Figure from "./Figure";
import styles from "./index.module.css";
import classNames from "classnames";
import Java from "@site/static/img/java.svg";
import Php from "@site/static/img/php.svg";
import Python from "@site/static/img/python.svg";
import Js from "@site/static/img/js.svg";
import Net from "@site/static/img/net.svg";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">写代码好轻松</h2>
                <div className="row">
                    <div className="col col--7">
                        <Figure />
                    </div>
                    <div className="col">
                        <dl className={styles.dl1}>
                            <dt>
                                <h3>
                                    <span className={classNames("material-icons", styles.code)}>
                                        code
                                    </span>
                                    上手简单
                                </h3>
                            </dt>
                            <dd>5个精心提炼的API，构成唯ID 80%的产品功能。</dd>
                            <dt style={{ marginTop: 32 }}>
                                <h3>
                                    <span className={classNames("material-icons", styles.category)}>
                                        category
                                    </span>
                                    技术中立
                                </h3>
                            </dt>
                            <dd>中立的API设计，不强制使用特定技术（如JWT）。</dd>
                        </dl>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 35 }}>
                    <div className="col">
                        <ul className={styles.ul1}>
                            <li>
                                <Java style={{ height: 42 }} />
                            </li>
                            <li>
                                <Php style={{ height: 36 }} />
                            </li>
                            <li>
                                <Python style={{ height: 38 }} />
                            </li>
                            <li>
                                <Js style={{ height: 38 }} />
                            </li>
                            <li>
                                <Net style={{ height: 42 }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
