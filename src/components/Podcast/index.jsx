import * as React from "react";
import Header from "../Header";
import { Grid, Stack, Typography, Link } from "@mui/material";
import { LIST_LOAT_BAI, LIST_PODCASTS } from "../../constants/appConstants";
import ItemLoatBai from "../ItemLoatBai";
import { useMediaQuery } from "@mui/material";
import ButtonCustom from "../ButtonCustom";

function Podcast() {
  const isSmallScreen = useMediaQuery("(max-width:899px)");
  return (
    <div className="App">
      <Header />

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

          <Grid item width={isSmallScreen ? "100%" : "50%"}>
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

          <Stack alignItems={"center"} md={4}>
            <ButtonCustom btnText={"Xem các tập khác"} />
          </Stack>
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
        </Stack>
        <Grid
          container
          direction={"row"}
          width={isSmallScreen ? "100%" : "80%"}
        >
          {LIST_PODCASTS.map((item) => {
            return (
              <Grid item xs={12} md={4} padding={2.5}>
                <Link href={item.href}>
                  <img
                    src={
                      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2147947977/settings_images/11f538e-136-b242-4786-66f2d855a56b_139.jpeg"
                    }
                    width="100%"
                    max-width="100%"
                    height="auto"
                    alt={item.title}
                    sx={{ borderRadius: "20px" }}
                  ></img>
                </Link>
              </Grid>
            );
          })}
        </Grid>
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
              <ItemLoatBai
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

export default Podcast;
