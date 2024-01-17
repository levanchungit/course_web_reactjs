import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography, Link } from "@mui/material";
import ButtonCustom from "../../../ButtonCustom";
import { useMainValues } from "../../../../contexts/MainContext";

export default function LoatBaiItem({ item }) {
  const { isMediumScreen } = useMainValues();
  const { title, description, cover_image } = item;
  const { videoId, playlistId } = item.items[0];
  console.log(`https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`);
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.1px solid #DDDDDD"}
      >
        <Stack
          width={isMediumScreen ? "100%" : "60%"}
          direction={isMediumScreen ? "column" : "row"}
          flexWrap={isMediumScreen ? "wrap" : "nowrap"}
          p={2.5}
          spacing={2.5}
        >
          <Stack
            spacing={2.5}
            width={isMediumScreen ? "100%" : "50%"}
            direction={"column"}
          >
            <Typography
              align="left"
              fontSize={isMediumScreen ? 18 : 20}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              Loạt bài
            </Typography>
            <Typography
              align="left"
              fontSize={isMediumScreen ? 30 : 32}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              {title}
            </Typography>
            <Typography
              align="justify"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFFF"}
            >
              {description}
            </Typography>
            <Stack alignItems={"flex-start"}>
              <ButtonCustom
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`
                  )
                }
                btnText={"Xem toàn bộ loạt bài"}
              />
            </Stack>
          </Stack>

          <Stack
            width={isMediumScreen ? "100%" : "50%"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                height: "auto",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Link
                target="_blank"
                to={`https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`}
              >
                <img
                  src={cover_image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: 10,
                  }}
                  alt={title}
                />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
