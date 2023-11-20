import * as React from "react";
import Header from "../Header";
import { Button, Grid, Stack, Typography, Link } from "@mui/material";
import {
  IMG_URL_LB_HVBT,
  LIST_LOAT_BAI,
  LIST_PODCASTS,
} from "../../constants/appConstants";
import ItemLoatBai from "../ItemLoatBai";
import { useMediaQuery } from "@mui/material";

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
        borderTop={"0.5px solid #D9D9D9"}
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
            <Button
              sx={{
                border: "2px solid #D2302C",
                color: "#D2302C",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "90%",
                fontWeight: "bold",
                fontFamily: "Open Sans",
              }}
            >
              Xem các tập khác
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* CÁC TẬP GẦN ĐÂY */}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        borderTop={"0.5px solid #D9D9D9"}
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
        <Grid direction={"row"} container width={"70%"}>
          {LIST_PODCASTS.map((item) => {
            return (
              <Grid item xs={12} md={6} xl={4}>
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
        <Button
          sx={{
            border: "2px solid #D2302C",
            color: "#D2302C",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "90%",
            fontWeight: "bold",
            fontFamily: "Open Sans",
          }}
        >
          Xem các tập khác
        </Button>
      </Stack>

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
    </div>
  );
}

export default Podcast;
