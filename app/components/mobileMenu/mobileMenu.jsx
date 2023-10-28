import { colors } from "@/app/lib/theme";
import { Box, Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Link from "next/link";

export default function MobileMenu({ onClick, items }) {
  return (
    <>
      <Box
        sx={{
          width: "55%",
          height: "100vh",
          backgroundColor: colors.white,
          position: "absolute",
          zIndex: "3",
          p: 1,
        }}
      >
        {/* CLOSE BUTTON */}
        <Button onClick={onClick} sx={{ color: colors.black, opacity: "0.7" }}>
          <CloseOutlinedIcon />
        </Button>

        {/* MENUS */}
        <Box
          sx={{
            p: 3,
            fontWeight: "700",
            opacity: "0.9",
          }}
        >
          <ul style={{ listStyleType: "none" }}>
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    transition: "all 500ms",
                    color: colors.black,
                    marginBottom: '1rem'
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Box>

      {/* SHADOW-BACKGROUND */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: colors.lightBoxBg.color,
          opacity: colors.lightBoxBg.opacity,
          position: "absolute",
          zIndex: "2",
        }}
      />
    </>
  );
}
