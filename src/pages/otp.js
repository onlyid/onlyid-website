import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/otp/Banner";
import Intro from "../components/otp/Intro";
import Unlimited from "../components/otp/Unlimited";

export default function () {
    return (
        <Layout title="无密码 轻认证">
            <Banner />
            <Intro />
            <Unlimited />
        </Layout>
    );
}
