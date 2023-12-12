import * as React from "react";
import { Stack } from "@mui/material";
import Comment from '../Components/Comment';
import Content from "../Components/Content";
import { useMediaQueryValues } from "../../../contexts/MediaQueryContext";
import TimKiem from "../Components/TimKiem";
import GioiThieu from "../Components/GioiThieu";
import BaiVietNoiBac from "../Components/BaiVietNoiBac";

function ChiTietBaiViet() {
  const { isMediumScreen } = useMediaQueryValues();
  const [dagtaGioiThieu, setDaGtaGioiThieu] = React.useState({});
  const [dataBaiVietNoiBac, setDataBaiVietNoiBac] = React.useState([]);
  React.useEffect(() => {
    setDaGtaGioiThieu({
      image: "https://cdnmedia.baotintuc.vn/Upload/4l8oGGp94lA5r6lHXppg/files/2022/03/f0conennammaylanh.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae laoreet justo. Donec euismod, nisl eget ultricies aliquam, velit odio lacinia diam, in malesuada odio odio in velit. Sed non ornare nisl",
    });
    setDataBaiVietNoiBac([  
      {
        _id: 1,
        title: "Bài viết nổi bật 1",
      },
      {
        _id: 2,
        title: "Bài viết nổi bật 2",
      }
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
          width={isMediumScreen ? "100%" : "80%"}
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
            <Content />
            <Comment />
          </Stack>

          <Stack
            width={isMediumScreen ? "100%" : "30%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={2.5}
          >
            <TimKiem
              id={"outlined-adornment-password"}
              label={"Tìm kiếm"}
              type={"text"}
              onClick={() => {}}
              ariaLabel={"toggle password visibility"}
              position={"end"}
            />
            <GioiThieu 
              data={dagtaGioiThieu}
            />

            <BaiVietNoiBac
              data={dataBaiVietNoiBac}
            />
          </Stack>
        </Stack>
      </Stack>


    </div>
  );
}

export default ChiTietBaiViet;
