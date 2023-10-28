"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { colors } from "./lib/theme";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import { useState } from "react";
import MobileMenu from "./components/mobileMenu/mobileMenu";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navBarItems = [
    {
      name: "Collections",
      href: "/collections",
    },
    {
      name: "Men",
      href: "/men",
    },
    {
      name: "Women",
      href: "/women",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        px: { xs: "0", sm: "2rem", md: "5rem", lg: "10rem" },
      }}
    >
      <Box sx={{display: isMobileMenuOpen ? 'block' : 'none'}}>
        <MobileMenu onClick={closeMobileMenu} items={navBarItems}/>
      </Box>
      <Navbar items={navBarItems} onClick={openMobileMenu}/>
      <Main />
    </Box>
  );
}
