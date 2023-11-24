import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, Grid } from "@mui/material";

export default function TapGanDayItem({ title, src, href }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid item xs={12} md={4}>
        <Link href={href}>
          <img
            src={
              src
                ? src
                : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2147947977/settings_images/11f538e-136-b242-4786-66f2d855a56b_139.jpeg"
            }
            width="100%"
            max-width="100%"
            height="auto"
            alt={title}
            style={{ borderRadius: "10px" }}
          />
        </Link>
      </Grid>
    </React.Fragment>
  );
}
