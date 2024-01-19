import { AppBar, CssBaseline, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bottom: 0,
          top: "auto",
          backgroundColor: "#000",
          p: 2,
        }}
      >
        <Typography
          fontFamily={"Montserrat"}
          fontSize={12}
          fontWeight={"Regular"}
          color={"#ffffff"}
          textAlign={"center"}
        >
          Chân thành cảm ơn các bạn. Hi vọng các bạn sẽ tìm thấy nhiều chút năng
          lượng tích cực khi ở đây
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}
