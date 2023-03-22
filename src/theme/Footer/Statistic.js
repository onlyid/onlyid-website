import React from "react";
import styles from "./Statistic.module.css";
import classNames from "classnames";

export default function () {
    return (
        <div className={classNames("container", styles.root)}>
            <div className="row">
                <div className="col">
                    <h3>
                        100<span>+</span>
                    </h3>
                    <span>注册应用数</span>
                </div>
                <div className="col">
                    <h3>
                        5000<span>+</span>
                    </h3>
                    <span>日均登录人次</span>
                </div>
                <div className="col">
                    <h3>
                        40万<span>+</span>
                    </h3>
                    <span>覆盖用户数</span>
                </div>
            </div>
            <hr className={styles.hr1} />
        </div>
    );
}
