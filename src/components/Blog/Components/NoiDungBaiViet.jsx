import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography } from "@mui/material";
import { formatDateTime } from "../../../utils/common";
import MarkDown from "./MarkDown";

export default function NoiDungBaiViet({ slug, content }) {
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
            {content?.categories?.map((item, index) => {
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
                    {item.name}
                  </Typography>
                </Button>
              );
            })}
          </Stack>

          <MarkDown markdown={content?.content} type={"content"} />

          <div
            className="fb-like"
            data-href={`http://192.168.1.220:3000/blog/${slug}`}
            data-width=""
            data-layout="button_count"
            data-action="like"
            data-size="small"
            data-share="true"
          ></div>
          {/* 
          <iframe
            title="Facebook Like Button"
            src={`https://www.facebook.com/plugins/like.php?href=http%3A%2F%2F192.168.1.220%3A3000%2Fblog%2F${slug}&width=100&layout&action&size&share=true&height=35&appId=${process.env.REACT_APP_APPID_FB}`}
            width="100"
            height="35"
            style={{
              width: "100%",
              border: "none",
              overflow: "hidden",
              frameborder: "0",
            }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe> */}
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
