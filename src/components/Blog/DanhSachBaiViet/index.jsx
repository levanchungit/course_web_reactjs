import * as React from "react";
import { Button, Skeleton, Stack } from "@mui/material";
import { useMainValues } from "../../../contexts/MainContext";
import TimKiem from "../Components/TimKiem";
import GioiThieu from "../Components/GioiThieu";
import BaiVietNoiBat from "../Components/BaiVietNoiBat";
import ItemBaiViet from "../Components/ItemDanhSachBaiViet";
import authAPI from "../../../api/BaiVietAPI";

function DanhSachBaiViet() {
  const { isMediumScreen } = useMainValues();
  const [dagtaGioiThieu, setDaGtaGioiThieu] = React.useState({});
  const [dataBaiVietNoiBat, setDataBaiVietNoiBat] = React.useState([]);
  const [dataBaiViet, setDataBaiViet] = React.useState([]);
  const itemLoadingSkeletonDataBaiViet = 4;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authAPI.getPosts(1, 10, "created_at");
        console.log("response: ", response);
        if (response.status === 200) {
          setDataBaiViet(response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

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

    fetchData();
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
          {/* primary */}
          <Stack
            width={isMediumScreen ? "100%" : "60%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* List bài viết */}
            {dataBaiViet.length > 0
              ? dataBaiViet.map((item, index) => {
                  return <ItemBaiViet dataItem={item} key={index} />;
                })
              : //loop 4
                [...Array(itemLoadingSkeletonDataBaiViet)].map(
                  (item, index) => {
                    return (
                      <Stack
                        key={index}
                        width={"100%"}
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        px={2.5}
                        spacing={0}
                      >
                        <Skeleton
                          width={"100%"}
                          height={50}
                          variant="text"
                          sx={{ fontSize: "20px" }}
                        />
                        <Skeleton width={"10%"} variant="text" />
                        <Skeleton
                          width={"100%"}
                          variant="text"
                          sx={{ fontSize: "20px" }}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={200}
                        />
                        <Skeleton width={"100%"} height={40} />
                        <Skeleton width={"40%"} height={50} />
                      </Stack>
                    );
                  }
                )}

            <Stack
              width={"100%"}
              px={2.5}
              py={1.25}
              sx={{
                borderTop: "0.3px dashed  #A9A9AC",
                borderBottom: "0.3px dashed  #A9A9AC",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  color: "#ddd",
                  bgcolor: "#000",
                  textTransform: "initial",
                  fontSize: "16px",
                }}
              >
                Xem các bài cũ hơn
              </Button>
            </Stack>
          </Stack>

          {/* secondary */}
          <Stack
            width={isMediumScreen ? "100%" : "40%"}
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
            <GioiThieu data={dagtaGioiThieu} />

            <BaiVietNoiBat data={dataBaiVietNoiBat} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default DanhSachBaiViet;
