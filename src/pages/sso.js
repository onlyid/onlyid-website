import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/sso/Banner";
import Intro from "../components/sso/Intro";
import Compare from "../components/sso/Compare";
import Migrate from "../components/sso/Migrate";
import Case from "../components/sso/Case";

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
