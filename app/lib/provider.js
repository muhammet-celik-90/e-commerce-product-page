'use client'

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme"; 
import { CssBaseline } from "@mui/material";


export default function TProvider({children}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}