import { StyledEngineProvider, createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#3F51B5"
        }
    }
})

function Root({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
    )
}

export default Root
