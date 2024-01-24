import * as React from "react";
import TapGanDayItem from "../TapGanDayItem";
import { Grid } from "@mui/material";

export default function LoatBaiList({ dataVideos }) {
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        spacing={2}
      >
        {dataVideos &&
          dataVideos.length > 0 &&
          dataVideos.slice(1).map((item, key) => {
            return (
              <TapGanDayItem
                key={key}
                title={item.title}
                src={item.thumbnails.url}
                href={`https://www.youtube.com/watch?v=${item.videoId}`}
              />
            );
          })}
      </Grid>
    </React.Fragment>
  );
}
