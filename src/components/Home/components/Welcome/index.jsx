import * as React from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Stack, Typography } from "@mui/material";
import ButtonCustom from "../../../ButtonCustom";
import { useMainValues } from "../../../../contexts/MainContext";

function Welcome(props) {
  const navigate = useNavigate();
  const { isSmallScreen, youtubeData } = useMainValues();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        columns={12}
        width={"100%"}
        justifyContent={"center"}
        borderTop={"0.1px solid #DDDDDD"}
      >
        <Grid item sx={12} sm={9.6} md={5}>
          <Stack width={"100%"} direction={"column"} spacing={2} p={2.5}>
            <Typography
              align="center"
              fontSize={isSmallScreen ? 30 : 32}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              CHÀO MỪNG CÁC BẠN ĐẾN VỚI WEBSITE
            </Typography>

            <Typography
              align="center"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFF"}
              textTransform={"capitalize"}
            >
              999 lượt truy cập và tìm kiếm thông tin tại đây
            </Typography>

            <Typography
              align="center"
              fontSize={isSmallScreen ? 20 : 24}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
            >
              VIDEO MỚI NHẤT
            </Typography>

            <Stack width={"100%"}>
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
                  src={`https://www.youtube.com/embed/${youtubeData}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Stack>

            <Stack alignItems={"center"}>
              <ButtonCustom
                onClick={() => navigate("/podcast")}
                btnText={"Xem toàn bộ loạt bài"}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Welcome;
