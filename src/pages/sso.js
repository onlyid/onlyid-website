import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/sso/Banner";
import Intro from "../components/sso/Intro";

export default function () {
    return (
        <Layout title="统一账号 单点登录">
            <Banner />
            <Intro />
        </Layout>
    );
}
