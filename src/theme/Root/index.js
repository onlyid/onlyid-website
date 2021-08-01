import React from "react";
import Head from "@docusaurus/Head";
import { StylesProvider } from "@material-ui/core/styles";

function Root({ children }) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <title>唯ID</title>
            </Head>
            <StylesProvider injectFirst>{children}</StylesProvider>
        </>
    );
}

export default Root;
