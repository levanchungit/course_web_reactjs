import * as React from "react";
import { Stack } from "@mui/material";
import BinhLuan from "./BinhLuan";
import NoiDungBaiViet from "./NoiDungBaiViet";
import { useMainValues } from "../../../contexts/MainContext";
import { useLocation } from "react-router-dom";
import Secondary from "./Secondary";
import { useEffect } from "react";
import blogAPI from "../../../api/BlogAPI";

function ChiTietBaiViet() {
  const { pathname } = useLocation();
  const slug = pathname.split("/blog/")[1];

  const { isMediumScreen } = useMainValues();
  const [dataChiTiet, setDataChiTiet] = React.useState();

  useEffect(() => {
    const fetchDataChiTietBaiVietSlug = async () => {
      try {
        const response = await blogAPI.getPostBySlug(slug);
        if (response.status === 200) {
          setDataChiTiet(response.data.result);
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
            <NoiDungBaiViet slug={slug} content={dataChiTiet} />
            <BinhLuan slug={slug} comments={dataChiTiet?.comments} />
          </Stack>
          <Secondary />
        </Stack>
      </Stack>
    </div>
  );
}

export default ChiTietBaiViet;
