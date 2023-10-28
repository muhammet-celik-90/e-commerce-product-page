"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { colors } from "@/app/lib/theme";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import mainImage1 from "@/public/images/image-product-1.jpg";

export default function Infos() {
  const [basket, setBasket] = useState({
    product: "Fall Limited Edition Sneakers",
    amount: 3,
    price: 125.00,
    image: mainImage1
  });

  const decreaseClick = () => {
    if (basket.amount > 0) {
      basket.amount -= 1;
      setBasket({ ...basket, basket });
    }
  };

  const increaseClick = () => {
    basket.amount += 1;
    setBasket({ ...basket, basket });
  };

  const addToCart = () => {
    let newBasket = JSON.stringify(basket)
    localStorage.setItem('basket',newBasket)
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        width: "100%",
        height: "inherit",
        marginTop: { sm: "3rem", lg: "0" },
        //backgroundColor: 'aqua',
        px: { xs: 2, lg: 10 },
        py: { xs: 2, lg: 5 },
      }}
    >
      <Typography
        variant="p"
        sx={{ color: colors.orange, fontWeight: "700", fontSize: "14px" }}
      >
        SNEAKER COMPANY
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "700" }}>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography
        variant="p"
        sx={{ color: colors.darkGrayishBlue, fontSize: "12px" }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Typography>

      {/* PRICE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: { xs: "100%", md: "10rem" },
          height: "4rem",
          py: 1,
          px: { xs: 1, md: 0 },
        }}
      >
        <Stack direction="row">
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            $125.00
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "700",
              fontSize: "15px",
              color: colors.orange,
              backgroundColor: colors.paleOrange,
              px: 1,
              py: 0.5,
              borderRadius: "0.5rem",
              ml: 1,
            }}
          >
            50%
          </Typography>
        </Stack>
        <Typography
          variant="p"
          sx={{
            fontSize: "14px",
            color: colors.darkGrayishBlue,
            textDecoration: "line-through",
          }}
        >
          $250.00
        </Typography>
      </Box>

      {/* ACTION BUTTON */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: colors.lightGrayishBlue,
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: { xs: "100%", md: "" },
          }}
        >
          <Button onClick={decreaseClick}>
            <Typography
              variant="p"
              sx={{ fontWeight: "700", color: colors.orange, fontSize: "20px" }}
            >
              -
            </Typography>
          </Button>
          <Typography variant="p" sx={{ fontWeight: "700", px: 1 }}>
            {basket.amount}
          </Typography>
          <Button onClick={increaseClick}>
            <Typography
              variant="p"
              sx={{ fontWeight: "700", color: colors.orange, fontSize: "20px" }}
            >
              +
            </Typography>
          </Button>
        </Box>

        {/* ADD TO CART BUTTON */}
        <Box
          sx={{
            backgroundColor: colors.orange,
            marginLeft: "auto",
            color: colors.white,
            width: { xs: "100%", md: "50%" },
            height: "2.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            mt: 1,
          }}
          onClick={addToCart}
        >
          <Box
            sx={{
              color: colors.white,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCartOutlinedIcon />
            <Typography variant="p" sx={{ fontSize: "14px", ml: 1 }}>
              Add to cart
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
