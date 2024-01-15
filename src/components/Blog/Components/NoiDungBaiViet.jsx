import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography } from "@mui/material";
import { formatDateTime } from "../../../utils/common";
import MarkDown from "./MarkDown";
import { Link } from "react-router-dom";

export default function NoiDungBaiViet({ content }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        backgroundColor={"#ffffff"}
      >
        <Stack
          width={"100%"}
          direction={"column"}
          flexWrap={"wrap"}
          p={2.5}
          spacing={1.5}
        >
          <Typography
            align="center"
            fontSize={22}
            fontFamily={"Montserrat"}
            fontWeight={"Medium"}
            color={"#000"}
            opacity={0.8}
            textTransform={"uppercase"}
          >
            {content?.title}
          </Typography>

          <Typography
            align="center"
            fontSize={14}
            fontFamily={"Montserrat"}
            fontWeight={"Regular"}
            color={"#000"}
            opacity={0.8}
            textTransform={"uppercase"}
          >
            {formatDateTime(content?.create_at)}
          </Typography>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1.5}
          >
            <Typography
              fontSize={12}
              fontFamily={"Montserrat"}
              fontWeight={"Regular"}
              color={"#A9A9AC"}
              opacity={0.8}
            >
              Tags:
            </Typography>
            {content?.category_names?.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    color: "#ddd",
                    px: 0.5,
                    py: 0.25,
                  }}
                >
                  <Typography
                    align="center"
                    fontSize={12}
                    fontFamily={"Montserrat"}
                    fontWeight={"Regular"}
                    textTransform={"initial"}
                    color="black"
                  >
                    {item}
                  </Typography>
                </Button>
              );
            })}
          </Stack>

          <MarkDown markdown={content?.content} />
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
