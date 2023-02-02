import React from "react";
import Head from "@docusaurus/Head";
import { StylesProvider } from "@material-ui/core/styles";

function Root({ children }) {
    return (
        <>
            <Head>
                <title>唯ID</title>
            </Head>
            <StylesProvider injectFirst>{children}</StylesProvider>
        </>
    );
}

export default Root;
