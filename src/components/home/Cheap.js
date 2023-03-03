import React from "react";
import styles from "./Cheap.module.css";
import price from "@site/static/img/home-price.png";
import classNames from "classnames";
import Link from "@docusaurus/Link";

export default function () {
    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="main-title">行业最低价格</h2>
                <p className={styles.p1}>
                    唯ID专为小微企业/独立开发者打造，是行业内性价比最高的IDaaS解决方案。
                </p>
                <div className="row">
                    <div className="col col--7">
                        <div className={styles.item}>
                            <h3>
                                <span className={classNames("iconfont", styles.money)}>
                                    &#xe650;
                                </span>
                                费用固定
                            </h3>
                            <p>唯ID只有两档套餐，年费分别是200元和2000元，没有任何其他收费项目。</p>
                        </div>
                        <div className={styles.item}>
                            <h3>
                                <span className={classNames("material-icons", styles.infinity)}>
                                    all_inclusive
                                </span>
                                无限使用
                            </h3>
                            <p>
                                两档套餐仅月活用户数不同，其他全部一样，均享受无限的登录/认证次数。
                            </p>
                        </div>
                        <Link
                            className={classNames("button button--primary", styles.button1)}
                            to="/pricing"
                        >
                            查看价格
                        </Link>
                    </div>
                    <div className="col col--5">
                        <img src={price} alt="price" className={styles.img1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
