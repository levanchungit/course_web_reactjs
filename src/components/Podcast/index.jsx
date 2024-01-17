import * as React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { LIST_LOAT_BAI } from "../../constants/appConstants";
import LoatBaiItem from "./components/LoatBaiItem";
import ButtonCustom from "../ButtonCustom";
import { useMainValues } from "../../contexts/MainContext";
import LoatBaiList from "./components/TapGanDayList";
import courseAPI from "../../api/CourseAPI";
// import getYoutubeVideos from "../../utils/youtubeApi";

export default function Podcast() {
  const { isMediumScreen, youtubeData } = useMainValues();
  const [dataLoatBai, setDataLoatBai] = React.useState([]);

  React.useEffect(() => {
    const fetchDataLoatBai = async () => {
      try {
        const response = await courseAPI.getCourses();
        if (response.status === 200) {
          setDataLoatBai(response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchDataLoatBai();
  }, []);

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
              {youtubeData && youtubeData.length > 0 && (
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src={`https://www.youtube.com/embed/${youtubeData[0].id.videoId}}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
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
        <ButtonCustom
          onClick={() => window.open("https://www.youtube.com/@ChungLV/videos")}
          btnText={"Xem các tập khác"}
        />
      </Stack>

      <Grid
        container
        direction={"column"}
        width={"100%"}
        borderTop={"0.1px solid #DDDDDD"}
      >
        {dataLoatBai.map((item, index) => {
          return <LoatBaiItem key={index} item={item} />;
        })}
      </Grid>
    </div>
  );
}
