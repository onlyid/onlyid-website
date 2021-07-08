import React from "react";
import Head from "@docusaurus/Head";

function Root({ children }) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </Head>
            {children}
        </>
    );
}

export default Root;
