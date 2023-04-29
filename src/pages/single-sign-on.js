import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/single-sign-on/Banner";
import Intro from "../components/single-sign-on/Intro";
import One from "../components/single-sign-on/One";
import Advantage from "../components/single-sign-on/Advantage";
import Case from "../components/single-sign-on/Case";

export default function () {
    return (
        <Layout title="单点登录 SSO">
            <Banner />
            <Intro />
            <One />
            <Advantage />
            <Case />
        </Layout>
    );
}
