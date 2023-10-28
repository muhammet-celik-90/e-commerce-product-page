"use client";

import { Box, Button } from "@mui/material";
import mainImage1 from "@/public/images/image-product-1.jpg";
import mainImage2 from "@/public/images/image-product-2.jpg";
import mainImage3 from "@/public/images/image-product-3.jpg";
import mainImage4 from "@/public/images/image-product-4.jpg";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/app/lib/theme";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function Images() {
  const images = [mainImage1, mainImage2, mainImage3, mainImage4];
  let lastImageIndex = images.length - 1;

  const [selected, setSelected] = useState(images[0]);

  let selectedImagesIndex = images.indexOf(selected);

  const arrowStyle = {
    backgroundColor: colors.white,
    borderRadius: "50%",
    width: "2.5rem",
    height: "2.5rem",
    padding: "0.7rem",
    color: colors.lightBoxBg.color,
  };

  const handlePrevClick = () => {
    let newImage;

    if (selectedImagesIndex > 0) {
      newImage = images[selectedImagesIndex - 1];
      setSelected(newImage);
    } else {
      newImage = images[lastImageIndex];
      setSelected(newImage);
    }
  };

  const handleNextClick = () => {
    let newImage;

    if (selectedImagesIndex < lastImageIndex) {
      newImage = images[selectedImagesIndex + 1];
      setSelected(newImage);
    } else {
      newImage = images[0];
      setSelected(newImage);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "inherit",
        //backgroundColor: 'crimson',
      }}
    >
      {/* MAIN IMAGE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          borderRadius: { xs: 0, sm: "1rem" },
        }}
      >
        <Image
          src={selected}
          style={{
            width: "inherit",
            height: "inherit",
            borderRadius: "inherit",
            objectFit: "contain",
          }}
          alt="main-image"
        />

        {/* ARROWS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            zIndex: "1",
            width: "100%",
            justifyContent: "space-between",
            px: 0.1,
          }}
        >
          <Button
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handlePrevClick}
          >
            <ArrowBackIosNewOutlinedIcon sx={arrowStyle} />
          </Button>
          <Button
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleNextClick}
          >
            <ArrowForwardIosOutlinedIcon sx={arrowStyle} />
          </Button>
        </Box>
      </Box>

      {/* THUMBNAILS */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
          alingItems: "center",
          width: "90%",
          mt: 2,
        }}
      >
        {images &&
          images.map((img, index) => (
            <Box
              key={index}
              sx={{
                border:
                  selected === img
                    ? `2px solid ${colors.orange}`
                    : "2px solid transparent",
                borderRadius: "0.7rem",
              }}
            >
              <Image
                src={img}
                width={80}
                height={80}
                style={{
                  borderRadius: "0.7rem",
                  cursor: "pointer",
                  opacity: selected === img ? "0.3" : "1",
                  transition: "all 200ms",
                }}
                alt={img}
                onClick={() => setSelected(img)}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
