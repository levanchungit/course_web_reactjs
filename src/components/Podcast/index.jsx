import * as React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { LIST_LOAT_BAI } from "../../constants/appConstants";
import LoatBaiItem from "./components/LoatBaiItem";
import ButtonCustom from "../ButtonCustom";
import { useMediaQueryValues } from "../../contexts/MediaQueryContext";
import LoatBaiList from "./components/TapGanDayList";

export default function Podcast() {
  const { isMediumScreen } = useMediaQueryValues();

  return (
    <div className="App">
      {/* VIDEO MỚI NHẤT */}
      <Grid
        container
        direction={"column"}
        width={"100%"}
        borderTop={"0.1px solid #DDDDDD"}
      >
        <Grid
          container
          rowGap={2.5}
          p={2.5}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item md={4}>
            <Typography
              align="center"
              fontSize={24}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
            >
              VIDEO MỚI NHẤT
            </Typography>
          </Grid>

          <Grid item width={isMediumScreen ? "100%" : "50%"}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
                src="https://www.youtube.com/embed/kncTDoCPxxQ?si=Ab7LjWoVchFlJIbt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* CÁC TẬP GẦN ĐÂY */}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        borderTop={"0.1px solid #DDDDDD"}
        spacing={2.5}
        p={2.5}
      >
        <Stack alignItems={"center"}>
          <Typography
            align="center"
            fontSize={24}
            fontFamily={"Open Sans"}
            fontWeight={"Bold"}
            color={"#D2302C"}
          >
            CÁC TẬP GẦN ĐÂY
          </Typography>

          <LoatBaiList />
        </Stack>
      </Stack>
      <Stack alignItems={"center"} mb={2.5}>
        <ButtonCustom btnText={"Xem các tập khác"} />
      </Stack>

      <Grid
        container
        direction={"column"}
        width={"100%"}
        borderTop={"0.1px solid #DDDDDD"}
      >
        {LIST_LOAT_BAI.map((item, index) => {
          return (
            item.visible && (
              <LoatBaiItem
                key={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                btnText={item.btnText}
                href={item.href}
                img={item.img}
              />
            )
          );
        })}
      </Grid>
    </div>
  );
}
