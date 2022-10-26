import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/one-time-password/Banner";
import Intro from "../components/one-time-password/Intro";
import Unlimited from "../components/one-time-password/Unlimited";
import Scene from "../components/one-time-password/Scene";
import Case from "../components/one-time-password/Case";

export default function () {
    return (
        <Layout title="无密码 轻认证">
            <Banner />
            <Intro />
            <Unlimited />
            <Scene />
            <Case />
        </Layout>
    );
}
