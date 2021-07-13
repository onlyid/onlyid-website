import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/home/Banner";
import Intro from "../components/home/Intro";

export default function Home() {
    return (
        <Layout title="首页">
            <Banner />
            <Intro />
        </Layout>
    );
}
