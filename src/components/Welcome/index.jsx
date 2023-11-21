import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Stack, Typography } from "@mui/material";
import ButtonCustom from "../ButtonCustom";

function Welcome(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        columns={16}
        width={"100%"}
        justifyContent={"center"}
        borderTop={"0.5px solid #D9D9D9"}
      >
        <Grid m={2} px={2}>
          <Stack width={"100%"} direction={"column"} spacing={2}>
            <Typography
              align="center"
              fontSize={32}
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
              fontSize={24}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
            >
              VIDEO MỚI NHẤT
            </Typography>

            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/kncTDoCPxxQ?si=Ab7LjWoVchFlJIbt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Stack>

            <Stack alignItems={"center"}>
              <ButtonCustom btnText={"Xem toàn bộ loạt bài"} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Welcome;
