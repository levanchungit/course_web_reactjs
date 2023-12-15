import * as React from "react";
import TapGanDayItem from "../TapGanDayItem";
import { Grid } from "@mui/material";
import { useMainValues } from "../../../../contexts/MainContext";

export default function LoatBaiList(props) {
  const { isMediumScreen, youtubeData } = useMainValues();

  return (
    <React.Fragment>
      <Grid
        container
        justifyContent={"center"}
        spacing={2}
        width={isMediumScreen ? "99%" : "80%"}
      >
        {youtubeData.map((item) => {
          const href = "https://www.youtube.com/watch?v=" + item.id.videoId;
          return (
            <TapGanDayItem
              key={item.id.videoId}
              title={item.snippet.title}
              src={item.snippet.thumbnails.high.url}
              href={href}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
