import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/single-sign-on/Banner";
import Intro from "../components/single-sign-on/Intro";
import Compare from "../components/single-sign-on/Compare";
import Migrate from "../components/single-sign-on/Migrate";
import Case from "../components/single-sign-on/Case";

export default function () {
    return (
        <Layout title="统一账号 单点登录">
            <Banner />
            <Intro />
            <Compare />
            <Migrate />
            <Case />
        </Layout>
    );
}
