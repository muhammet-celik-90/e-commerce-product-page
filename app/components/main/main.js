"use client";

import { Box } from "@mui/material";
import Images from "./images/images";
import Infos from "./infos/infos";

export default function Main() {
  return (
    <Box
      sx={{
        padding: {xs: '0', sm:'2rem 2rem 1rem 2rem', md:"4rem 4rem 1rem 4rem"},
        display: "flex",
        flexDirection: {xs:'column', lg:'row'},
        justifyContent: "space-between",
        height: "30rem",
      }}
    >
      <Images />
      <Infos />
    </Box>
  );
}
