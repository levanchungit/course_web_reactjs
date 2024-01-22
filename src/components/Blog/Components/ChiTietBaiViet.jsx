import * as React from "react";
import { Stack } from "@mui/material";
import BinhLuan from "./BinhLuan";
import NoiDungBaiViet from "./NoiDungBaiViet";
import { useMainValues } from "../../../contexts/MainContext";
import { useLocation } from "react-router-dom";
import Secondary from "./Secondary";
import { useEffect } from "react";
import baiVietAPI from "../../../api/BaiVietAPI";

function ChiTietBaiViet() {
  let { state } = useLocation();
  const { isMediumScreen } = useMainValues();
  const [dataChiTiet, setDataChiTiet] = React.useState();

  useEffect(() => {
    const fetchDataChiTietBaiVietSlug = async () => {
      try {
        const response = await baiVietAPI.getPostBySlug(state.slug);
        if (response.status === 200) {
          setDataChiTiet(response.data.result);
          console.log(response.data.result);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchDataChiTietBaiVietSlug();
  }, []);

  return (
    <div className="App">
      <Stack
        width={"100%"}
        s
        direction={"row"}
        justifyContent={"center"}
        backgroundColor={"#fff"}
      >
        <Stack
          width={isMediumScreen ? "100%" : "60%"}
          direction={isMediumScreen ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Stack
            width={isMediumScreen ? "100%" : "70%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <NoiDungBaiViet content={dataChiTiet} />
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
