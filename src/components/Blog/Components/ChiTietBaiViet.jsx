import * as React from "react";
import { Stack } from "@mui/material";
import BinhLuan from "./BinhLuan";
import NoiDungBaiViet from "./NoiDungBaiViet";
import { useMainValues } from "../../../contexts/MainContext";
import { useLocation } from "react-router-dom";
import Secondary from "./Secondary";

function ChiTietBaiViet() {
  let { state } = useLocation();
  const { isMediumScreen } = useMainValues();

  return (
    <div className="App">
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        backgroundColor={"#fff"}
      >
        <Stack
          width={isMediumScreen ? "100%" : "60%"}
          direction={isMediumScreen ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          border={"1px solid pink"}
        >
          <Stack
            width={isMediumScreen ? "100%" : "60%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <NoiDungBaiViet content={state.chiTietBaiViet} />
            <BinhLuan />
          </Stack>

          {/* Secondary */}
          <Secondary />
        </Stack>
      </Stack>
    </div>
  );
}

export default ChiTietBaiViet;
