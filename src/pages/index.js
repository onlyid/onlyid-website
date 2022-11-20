import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/home/Banner";
import Intro from "../components/home/Intro";
import Product from "../components/home/Product";
import Simple from "../components/home/Simple";
import Pro from "../components/home/Pro";
import Value from "../components/home/Value";
import Cheap from "../components/home/Cheap";

export default function Home() {
    return (
        <Layout title="首页">
            <Banner />
            <Intro />
            <Product />
            <Simple />
            <Pro />
            <Cheap />
            <Value />
        </Layout>
    );
}
