'use client'

import { createTheme } from "@mui/material";
import { Kumbh_Sans } from "next/font/google";

const kumbSans = Kumbh_Sans({ subsets: ["latin"] });

export const colors = {
  orange: "hsl(26, 100%, 55%)",
  paleOrange: "hsl(25, 100%, 94%)",
  veryDarkBlue: "hsl(220, 13%, 13%)",
  darkGrayishBlue: "hsl(219, 9%, 45%)",
  grayishBlue: "hsl(220, 14%, 75%)",
  lightGrayishBlue: "hsl(223, 64%, 98%)",
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
  lightBoxBg: {
    color: "hsl(0, 0%, 0%)",
    opacity: 0.75,
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: kumbSans,
    button: {
      fontFamily: kumbSans
    }
  },
})
