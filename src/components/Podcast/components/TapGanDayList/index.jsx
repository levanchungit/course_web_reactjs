import * as React from "react";
import TapGanDayItem from "../TapGanDayItem";
import { Grid } from "@mui/material";
import { useMediaQueryValues } from "../../../../contexts/MediaQueryContext";
import { LIST_PODCASTS } from "../../../../constants/appConstants";

export default function LoatBaiList(props) {
  const { isMediumScreen } = useMediaQueryValues();
  return (
    <React.Fragment>
      <Grid container spacing={2} width={isMediumScreen ? "99%" : "80%"}>
        {LIST_PODCASTS.map((item) => {
          return (
            <TapGanDayItem
              key={item.id}
              title={item.title}
              src={item.src}
              href={item.href}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
