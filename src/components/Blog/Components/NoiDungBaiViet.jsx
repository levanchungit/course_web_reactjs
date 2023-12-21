import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography } from "@mui/material";
import { formatDateTime } from "../../../utils/common";

export default function NoiDungBaiViet({ content }) {
  console.log("content ", content);
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
            {content?.tittle}
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
                <Stack
                  key={index}
                  px={1.5}
                  py={0.5}
                  borderRadius={2}
                  border={"1px solid #ddd"}
                >
                  <Typography
                    fontSize={12}
                    fontFamily={"Montserrat"}
                    fontWeight={"Regular"}
                    color={"#A9A9AC"}
                    opacity={0.8}
                  >
                    {item}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>

          <Typography borderRadius={2} overflow={"hidden"}>
            <img
              src={content?.cover_image}
              alt="img"
              width="100%"
              height="100%"
            />
          </Typography>

          <Typography
            align="justify"
            fontSize={14}
            fontFamily={"Montserrat"}
            fontWeight={"Regular"}
            color={"#333"}
          >
            {content?.content}
          </Typography>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
