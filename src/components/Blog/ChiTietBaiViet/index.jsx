import * as React from "react";
import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BinhLuan from "../Components/BinhLuan";
import NoiDungBaiViet from "../Components/NoiDungBaiViet";
import { useMainValues } from "../../../contexts/MainContext";
import TimKiem from "../Components/TimKiem";
import GioiThieu from "../Components/GioiThieu";
import BaiVietNoiBat from "../Components/BaiVietNoiBat";
import DanhMuc from "../Components/DanhMuc";
import HoatDong from "../Components/HoatDong";
import { useLocation } from "react-router-dom";

function ChiTietBaiViet() {
  let { state } = useLocation();
  const { isMediumScreen } = useMainValues();
  const [dagtaGioiThieu, setDaGtaGioiThieu] = React.useState({});
  const [dataBaiVietNoiBat, setDataBaiVietNoiBat] = React.useState([]);
  React.useEffect(() => {
    setDaGtaGioiThieu({
      image:
        "https://cdnmedia.baotintuc.vn/Upload/4l8oGGp94lA5r6lHXppg/files/2022/03/f0conennammaylanh.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae laoreet justo. Donec euismod, nisl eget ultricies aliquam, velit odio lacinia diam, in malesuada odio odio in velit. Sed non ornare nisl",
    });
    setDataBaiVietNoiBat([
      {
        _id: 1,
        title: "Bài viết nổi bật 1",
      },
      {
        _id: 2,
        title: "Bài viết nổi bật 2",
      },
    ]);
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
            width={isMediumScreen ? "100%" : "60%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <NoiDungBaiViet content={state.chiTietBaiViet} />
            <BinhLuan />
          </Stack>

          <Stack
            width={isMediumScreen ? "100%" : "40%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={2.5}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
              width={"100%"}
              marginBottom={2}
            >
              <FacebookIcon fontSize="large" onClick={() => {}} />
              <LinkedInIcon fontSize="large" onClick={() => {}} />
              <YouTubeIcon fontSize="large" onClick={() => {}} />
              <InstagramIcon fontSize="large" onClick={() => {}} />
            </Stack>

            <TimKiem
              id={"outlined-adornment-password"}
              label={"Tìm kiếm"}
              type={"text"}
              onClick={() => {}}
              ariaLabel={"toggle password visibility"}
              position={"end"}
            />
            <GioiThieu data={dagtaGioiThieu} />

            <BaiVietNoiBat data={dataBaiVietNoiBat} />

            <DanhMuc />

            <HoatDong />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default ChiTietBaiViet;
