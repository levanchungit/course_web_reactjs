import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography, Link } from "@mui/material";
import ButtonCustom from "../../../ButtonCustom";
import { useMainValues } from "../../../../contexts/MainContext";

export default function LoatBaiItem({
  title,
  category,
  description,
  btnText,
  img,
  href,
}) {
  const { isMediumScreen } = useMainValues();

  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.1px solid #DDDDDD"}
      >
        <Stack
          width={isMediumScreen ? "100%" : "60%"}
          direction={isMediumScreen ? "column" : "row"}
          flexWrap={isMediumScreen ? "wrap" : "nowrap"}
          p={2.5}
          spacing={2.5}
        >
          <Stack
            spacing={2.5}
            width={isMediumScreen ? "100%" : "50%"}
            direction={"column"}
          >
            <Typography
              align="left"
              fontSize={isMediumScreen ? 18 : 20}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              {title}
            </Typography>
            <Typography
              align="left"
              fontSize={isMediumScreen ? 30 : 32}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              {category}
            </Typography>
            <Typography
              align="justify"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFFF"}
            >
              {description}
            </Typography>
            <Stack alignItems={"flex-start"}>
              <ButtonCustom btnText={btnText} />
            </Stack>
          </Stack>

          <Stack
            width={isMediumScreen ? "100%" : "50%"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack direction={"row"} p={isMediumScreen ? 0 : 2}>
              <Link href={href}>
                <img src={img} width="100%" height="auto" alt={category}></img>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
