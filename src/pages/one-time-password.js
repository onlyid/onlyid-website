import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/one-time-password/Banner";
import Intro from "../components/one-time-password/Intro";
import Subscription from "../components/one-time-password/Subscription";
import Usage from "../components/one-time-password/Usage";
import Advantage from "../components/one-time-password/Advantage";
import Case from "../components/one-time-password/Case";

export default function () {
    return (
        <Layout title="无密码 轻认证 OTP">
            <Banner />
            <Intro />
            <Subscription />
            <Advantage />
            <Usage />
            <Case />
        </Layout>
    );
}
