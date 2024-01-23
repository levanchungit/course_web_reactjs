import * as React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { LIST_LOAT_BAI } from "../../constants/appConstants";
import LoatBaiItem from "./components/LoatBaiItem";
import ButtonCustom from "../ButtonCustom";
import { useMainValues } from "../../contexts/MainContext";
import LoatBaiList from "./components/TapGanDayList";
import courseAPI from "../../api/CourseAPI";
import podcastAPI from "../../api/PodcastAPI";
// import getYoutubeVideos from "../../utils/youtubeApi";

export default function Podcast() {
  const { isMediumScreen } = useMainValues();
  const [dataLoatBai, setDataLoatBai] = React.useState([]);
  const [dataVideos, setDataVideos] = React.useState([]);

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

    const fetchDataVideos = async () => {
      try {
        const response = await podcastAPI.getVideos(1, 10, "desc");
        if (response.status === 200) {
          setDataVideos(response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchDataLoatBai();
    fetchDataVideos();
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

          <Grid item width={isMediumScreen ? "100%" : "40%"}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              {dataVideos && dataVideos.length > 0 && (
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src={`https://www.youtube.com/embed/${dataVideos[0].videoId}`}
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
      >
        <Stack
          p={2.5}
          width={isMediumScreen ? "100%" : "60%"}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            align="center"
            fontSize={24}
            fontFamily={"Open Sans"}
            fontWeight={"Bold"}
            color={"#D2302C"}
          >
            CÁC TẬP GẦN ĐÂY
          </Typography>

          <LoatBaiList dataVideos={dataVideos} />
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
