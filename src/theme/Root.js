import React from "react";
import { StylesProvider } from "@material-ui/core/styles";

function Root({ children }) {
    return <StylesProvider injectFirst>{children}</StylesProvider>;
}

export default Root;
