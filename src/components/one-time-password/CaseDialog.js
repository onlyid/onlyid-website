import { Dialog, DialogContent } from "@material-ui/core";
import styles from "./CaseDialog.module.css";
import React from "react";

export default function ({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent className={styles.root}>
                <p>本栏目（体验案例）接受企业/开发者投稿</p>
                <h4>投稿要求</h4>
                <ul>
                    <li>你的应用至少使用一项唯ID的产品功能</li>
                    <li>小而美、解决一些独特问题的应用优先</li>
                </ul>
                <h4>投稿方式</h4>
                <p>通过官网底部信息联系我们，有专人对接</p>
                <h4>其它事项</h4>
                <ul>
                    <li>入选应用会在唯ID官网展示一到三个月时间</li>
                    <li>参与本活动没有奖励，但也不收取任何费用</li>
                    <li>本活动即日起长期有效，暂无计划截止日期</li>
                </ul>
            </DialogContent>
        </Dialog>
    );
}
