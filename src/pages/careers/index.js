import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import JobType from "./_JobType";
import Benefit from "./_Benefit";
import jianpan from "@site/static/img/careers-jianpan.png";
import kanban from "@site/static/img/careers-kanban.png";
import yinhang from "@site/static/img/careers-yinhang.png";
import zhaopian from "@site/static/img/careers-zhaopian.png";
import Svg1 from "@site/static/img/careers-benefit1.svg";
import Svg2 from "@site/static/img/careers-benefit2.svg";
import Svg3 from "@site/static/img/careers-benefit3.svg";
import Svg4 from "@site/static/img/careers-benefit4.svg";
import { useHistory } from "@docusaurus/router";

export default function () {
    const history = useHistory();

    const goType = () => {
        history.push("#positions");
    };

    return (
        <Layout title="加入我们">
            <h2 className={styles.banner}>加入我们</h2>

            <section className={styles.section1}>
                <div className="container">
                    <p className={styles.p1}>
                        我们在寻找聪明创新的高素质人才，哪个角色让你游刃有余？
                    </p>
                    <div className={styles.gridBox}>
                        <JobType count={0} title="工程" onClick={() => goType(0)}>
                            <img src={jianpan} alt="jianpan" />
                        </JobType>
                        <JobType count={0} title="产品" onClick={() => goType(1)}>
                            <img src={yinhang} alt="yinhang" />
                        </JobType>
                        <JobType count={0} title="设计" onClick={() => goType(2)}>
                            <img src={zhaopian} alt="zhaopian" />
                        </JobType>
                        <JobType count={0} title="营销" onClick={() => goType(3)}>
                            <img src={kanban} alt="kanban" />
                        </JobType>
                    </div>
                </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                    <p className={styles.title1}>福利待遇</p>
                    <div className="row">
                        <div className="col">
                            <Benefit
                                title="极具竞争力的总体薪酬"
                                detail="为每一位员工提供极具竞争力的薪酬待遇"
                            >
                                <Svg1 />
                            </Benefit>
                        </div>
                        <div className="col">
                            <Benefit
                                title="职业发展"
                                detail="提供不间断的反馈和众多机会，让人们成长和发展"
                            >
                                <Svg3 />
                            </Benefit>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Benefit
                                title="平衡工作和生活"
                                detail="提供灵活和充裕的时间让人们休息和充电"
                            >
                                <Svg2 />
                            </Benefit>
                        </div>
                        <div className="col">
                            <Benefit
                                title="多样和包容"
                                detail="以包容环境吸引多样人才，让每个人都可以大展身手"
                            >
                                <Svg4 />
                            </Benefit>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3} id="positions">
                <div className="container">
                    <p className={styles.title1}>所有职位</p>
                    <p className={styles.p1}>当前暂无职位开放申请，敬请留意后续页面更新。</p>
                </div>
            </section>
        </Layout>
    );
}
