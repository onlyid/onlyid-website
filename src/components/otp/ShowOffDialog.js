import { Dialog, DialogContent } from "@material-ui/core";
import styles from "./ShowOffDialog.module.css";
import React from "react";

export default function ({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent className={styles.dialogContent}>
                <p>本栏目（体验案例）接受企业/开发者投稿。</p>
                <p className={styles.title1}>投稿要求</p>
                <ol>
                    <li>你的应用至少使用一项唯ID的产品功能。</li>
                    <li>你的应用是开放给公众访问下载使用的。</li>
                    <li>小而美、解决一些独特问题的应用优先。</li>
                </ol>
                <p className={styles.title1}>投稿方式</p>
                <ol>
                    <li>通过官网底部的联系方式联系我们，有专人对接。</li>
                </ol>
                <p className={styles.title1}>其他事项</p>
                <ol style={{ marginBottom: 0 }}>
                    <li>入选应用会在唯ID官网展示一到三个月时间。</li>
                    <li>参与本活动没有奖励，但也不收取任何费用。</li>
                    <li>本活动即日起长期有效，暂无计划截止日期。</li>
                </ol>
            </DialogContent>
        </Dialog>
    );
}
