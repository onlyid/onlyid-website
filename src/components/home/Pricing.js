import React from "react";
import styles from "./Pricing.module.css";
import price from "@site/static/img/price.png";
import classNames from "classnames";
import Link from "@docusaurus/Link";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">全行业最低价格</h2>
                <div className="row">
                    <div className="col col--5">
                        <img src={price} alt="price" className={styles.img1} />
                    </div>
                    <div className="col col--7">
                        <dl className={styles.dl1}>
                            <dt>
                                <h3>
                                    <span className={classNames("iconfont", styles.money)}>
                                        &#xe650;
                                    </span>
                                    费用固定
                                </h3>
                            </dt>
                            <dd>唯ID只有两档套餐，年费分别是200元和2000元，无任何其他收费。</dd>
                            <dt style={{ marginTop: 32 }}>
                                <h3>
                                    <span className={classNames("material-icons", styles.infinity)}>
                                        all_inclusive
                                    </span>
                                    无限使用
                                </h3>
                            </dt>
                            <dd>
                                两档套餐仅月活用户数不同，其他全部一样，均享受无限的登录/认证次数。
                            </dd>
                        </dl>
                        <Link
                            className={classNames("button button--secondary", styles.button1)}
                            to="/pricing"
                        >
                            查看价格
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
