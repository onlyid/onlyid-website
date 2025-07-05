import React from "react";
import Layout from "@theme/Layout";
import cn from "classnames";
import styles from "./about.module.css";
import about1 from "@site/static/img/about1.png";
import about2 from "@site/static/img/about2.png";
import about3 from "@site/static/img/about3.png";

export default function () {
    return (
        <Layout title="关于我们">
            <h2 className={styles.banner}>关于我们</h2>
            <section className={styles.root}>
                <div className="container">
                    <p className={styles.p1}>
                        唯ID隶属佛山市爱达斯科技有限公司，是国内领先的IDaaS提供商，主要产品为企业IDaaS解决方案、账号和认证服务。我们打造了可扩展、易集成的平台以解决复杂的账号和认证问题，也率先利用OAuth协议解决手机号登录成本高问题。引领着账号和认证领域的革命与创新，深受广大开发者和企业客户的信赖。
                    </p>
                    <div className="row">
                        <div className={cn("col col--3", styles.imgBox)}>
                            <img src={about1} alt="about1" style={{ width: 72 }} />
                            <p>创始人简介</p>
                        </div>
                        <div className="col">
                            <div className={styles.card1}>
                                <p className={styles.title}>唯ID由 梁庭宾 于2021年6月12日创立</p>
                                <ul>
                                    <li>2012年毕业于中山大学软件工程专业</li>
                                    <li>前招商银行信用卡团队高级大数据风控工程师</li>
                                    <li>前平安集团智慧城市统一用户平台PAI总负责人</li>
                                </ul>
                                <p>现任唯ID项目总负责人，推进唯ID建立全球统一的账号和认证体系。</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={styles.card1}>
                                <p className={styles.title}>由高学历、高素质人才组成的专家团队</p>
                                <ul>
                                    <li>多毕业于国内知名985高校</li>
                                    <li>多来自国内优秀的科技企业</li>
                                    <li>平均年龄不到30岁，年轻有活力</li>
                                </ul>
                                <p>
                                    作为较早从事IDaaS的团队，我们积累了丰富的行业经验，为客户带来极高经济收益。
                                </p>
                            </div>
                        </div>
                        <div className={cn("col col--3", styles.imgBox)}>
                            <img src={about2} alt="about2" />
                            <p>专业的团队</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className={cn("col col--3", styles.imgBox)}>
                            <img src={about3} alt="about3" />
                            <p>品牌和文化</p>
                        </div>
                        <div className="col">
                            <div className={styles.card1}>
                                <p className={styles.title}>浪漫的词 only，寓意我们：</p>
                                <ul>
                                    <li>专注IDaaS行业并提供相关服务</li>
                                    <li>期盼未来使用一个账号畅游互联网</li>
                                    <li>相信科技有温度，唯ID可以相伴一生</li>
                                </ul>
                                <p>公司文化 —— 从原始的地方出发，天马行空，脚踏实地。</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.p2}>
                        无论你已经是我们的客户，或对产品感兴趣，或有其他方面的合作，我们都真诚期待你的来电（官网左下角有联系方式）。
                    </p>
                </div>
            </section>
        </Layout>
    );
}
