import * as React from "react";
import Footer from "./Components/Footer";
import { Button, Container, Skeleton, Stack, Typography } from "@mui/material";
import { useMainValues } from "../../contexts/MainContext";
import ItemDanhSachBaiViet from "./Components/ItemDanhSachBaiViet";
import authAPI from "../../api/BaiVietAPI";
import Secondary from "./Components/Secondary";

function Blog() {
  const { isMediumScreen } = useMainValues();
  const [dagtaGioiThieu, setDaGtaGioiThieu] = React.useState({});
  const [dataBaiVietNoiBat, setDataBaiVietNoiBat] = React.useState([]);
  const [dataBaiViet, setDataBaiViet] = React.useState([]);
  const itemLoadingSkeletonDataBaiViet = 4;

  React.useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

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
          {/* PRIMARY */}
          <Stack
            width={isMediumScreen ? "100%" : "70%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* List bài viết */}
            {dataBaiViet.length > 0 ? (
              dataBaiViet.map((item, index) => {
                return (
                  <>
                    <ItemDanhSachBaiViet dataItem={item} key={index} />
                    <Stack
                      width={"100%"}
                      px={2.5}
                      py={1.25}
                      sx={{
                        borderBottom: "0.3px dashed  #A9A9AC",
                      }}
                    ></Stack>
                  </>
                );
              })
            ) : dataBaiViet.length == 0 ? (
              // Create typography center screen
              <Stack
                width={"100%"}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1.25}
              >
                <Typography
                  align="center"
                  fontSize={22}
                  fontFamily={"Montserrat"}
                  fontWeight={"Medium"}
                  color={"#000"}
                  opacity={0.8}
                  textTransform={"uppercase"}
                >
                  Không có bài viết nào
                </Typography>
              </Stack>
            ) : (
              //loop 4
              [...Array(itemLoadingSkeletonDataBaiViet)].map((item, index) => {
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
              })
            )}

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

          {/* SECONDARY */}
          <Secondary />
        </Stack>
      </Stack>
      {/* Chừa khoảng cách footer */}
      <div style={{ marginBottom: "50px" }}></div>
      <Footer />
    </div>
  );
}

export default Blog;
