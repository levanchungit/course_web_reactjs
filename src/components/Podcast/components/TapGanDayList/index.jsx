import * as React from "react";
import TapGanDayItem from "../TapGanDayItem";
import { Grid } from "@mui/material";
import { useMainValues } from "../../../../contexts/MainContext";

export default function LoatBaiList({ dataVideos }) {
  const { isMediumScreen } = useMainValues();
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        spacing={2}
      >
        {/* bỏ video[0] ra */}
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
