import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/home/Banner";
import Intro from "../components/home/Intro";
import Product from "../components/home/Product";
import Start from "../components/home/Start";
import Pricing from "../components/home/Pricing";

export default function Home() {
    return (
        <Layout title="首页">
            <Banner />
            <Intro />
            <Product />
            <Start />
            <Pricing />
        </Layout>
    );
}
