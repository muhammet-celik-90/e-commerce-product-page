"use client";

import { colors } from "@/app/lib/theme";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  Popover,
} from "@mui/material";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import avatar from "@/public/images/image-avatar.png";
import iconChart from "@/public/icons/icon-cart.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Navbar({ items, onClick }) {
  const [isHover, setIsHover] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [basket, setBasket] = useState("");

  const deleteItem = () => {
    localStorage.clear()
  }

  let localBasket = JSON.parse(localStorage.getItem("basket"));
  
  useEffect(() => {
    setBasket(localBasket);
  }, [localBasket]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        borderBottom: `3px solid ${colors.lightGrayishBlue}`,
        width: "100%",
        height: "7rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        px: { xs: "1rem", sm: 0 },
      }}
    >
      {/* LOGO */}
      <MenuOutlinedIcon
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={onClick}
      />
      <Box
        sx={{
          width: { xs: "60%", sm: "50%", md: "45%", lg: "40%" },
          height: "auto",
          marginLeft: "1rem",
        }}
      >
        <Image
          src={logo}
          style={{ width: "inherit", height: "inherit" }}
          alt="logo"
        />
      </Box>

      {/* NAVBAR */}
      <Box
        sx={{
          marginLeft: "4rem",
          width: "25rem",
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%",
          alignItems: "stretch",
        }}
      >
        {items.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className="navItem"
            style={{
              textDecoration: "none",
              color:
                nav.name === isHover ? colors.black : colors.darkGrayishBlue,
              borderBottom: `3px solid ${
                nav.name === isHover ? colors.orange : "transparent"
              }`,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              transition: "all 500ms",
            }}
            onMouseOver={() => setIsHover(nav.name)}
            onMouseLeave={() => setIsHover("")}
          >
            {nav.name}
          </Link>
        ))}
      </Box>

      {/* CART AND AVATAR */}
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexDirection: "row",
          width: "7rem",
          height: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* CART */}
        <Badge
          //badgeContent={4}
          color="warning"
          variant={basket && 'dot'}
        >
          <Box
            sx={{ color: colors.darkGrayishBlue, cursor: 'pointer' }}
            aria-describedby={id}
            onClick={handleClick}
          >
            <ShoppingCartOutlinedIcon />
          </Box>
        </Badge>

        {/* POPOVER */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box
            sx={{
              width: "18rem",
              height: "15rem",
            }}
          >
            <Typography sx={{ p: 2, fontWeight: "700" }}>Cart</Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "70%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* POPOVER-BASKET */}
              {basket ? (
                <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      src={basket.image}
                      width={50}
                      height={50}
                      style={{ borderRadius: "0.4rem" }}
                      alt={basket.product}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          py: 0.5,
                          px: 1,
                          color: colors.darkGrayishBlue,
                          fontSize: "13px",
                        }}
                      >
                        {basket.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            py: 0.5,
                            px: 1,
                            color: colors.darkGrayishBlue,
                            fontSize: "13px",
                          }}
                        >
                          ${basket.price}.00 x {basket.amount}
                        </Typography>
                        <Typography
                          sx={{
                            color: colors.black,
                            fontSize: "13px",
                            fontWeight: "700",
                          }}
                        >
                          ${basket.price * basket.amount}.00
                        </Typography>
                      </Box>
                    </Box>

                    {/* DELETE ICON */}
                    <Box
                      sx={{
                        color: colors.darkGrayishBlue,
                        cursor: "pointer",
                        opacity: "0.7",
                      }}
                      onClick={deleteItem}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Box>
                  </Box>

                  {/* CHECKOUT BUTTON */}
                  <Box
                    sx={{
                      p: 1.5,
                      backgroundColor: colors.orange,
                      mt: 2,
                      borderRadius: "0.5rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "700",
                        color: colors.white,
                        fontSize: "14px",
                      }}
                    >
                      Checkout
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Typography
                  sx={{
                    p: 2,
                    fontWeight: "700",
                    color: colors.darkGrayishBlue,
                  }}
                >
                  Your cart is empty.
                </Typography>
              )}
            </Box>
          </Box>
        </Popover>

        {/* AVATAR */}
        <Box>
          <Image src={avatar} width={40} height={40} alt="avatar" />
        </Box>
      </Box>
    </Box>
  );
}
