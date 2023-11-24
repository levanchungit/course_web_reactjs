import React from "react";
import Button from "@mui/material/Button";

export default function ButtonCustom({ btnText, onClick, ...restProps }) {
  return (
    <Button
      sx={{
        border: "2px solid #D2302C",
        color: "#D2302C",
        borderRadius: "10px",
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: "Open Sans",
      }}
      onClick={onClick}
      {...restProps}
    >
      {btnText}
    </Button>
  );
}
