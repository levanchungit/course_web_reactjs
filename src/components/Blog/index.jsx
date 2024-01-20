import * as React from "react";
import Footer from "./Components/Footer";
import { Button, Skeleton, Stack, Typography } from "@mui/material";
import { useMainValues } from "../../contexts/MainContext";
import ItemDanhSachBaiViet from "./Components/ItemDanhSachBaiViet";
import authAPI from "../../api/BaiVietAPI";
import Secondary from "./Components/Secondary";
import { useState } from "react";
import { useEffect } from "react";

function Blog() {
  const { isMediumScreen } = useMainValues();
  const [dataBaiViet, setDataBaiViet] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limitPost, setLimitPost] = useState(5);
  const [sortPost, setSortPost] = useState("desc");
  const [loading, setLoading] = React.useState(false);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getPosts(
        currentPage,
        limitPost,
        sortPost,
        searchKey
      );

      if (response.status === 200) {
        const { total, page, limit } = response.data;
        if (page === 1) {
          setDataBaiViet(response.data.results);
        } else {
          // Lần sau, lấy dữ liệu mới mà không trùng với dữ liệu hiện tại
          const newData = response.data.results.filter(
            (newItem) =>
              !dataBaiViet.some((item) => item.title === newItem.title)
          );
          setDataBaiViet((prevData) => [...prevData, ...newData]);

          // Kiểm tra xem có thêm dữ liệu để tải không
          setHasMoreData(total > page * limit);
        }
      }
    } catch (e) {
      console.log("error: ", e);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMoreData) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setHasMoreData(false);
    }
  };

  React.useEffect(() => {
    if (hasMoreData) {
      fetchData();
    }
  }, [currentPage, hasMoreData]);

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
            {loading ? (
              // Hiển thị Skeleton khi đang tải dữ liệu
              [...Array(limitPost)].map((_, index) => (
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
                  <Skeleton variant="rectangular" width={"100%"} height={200} />
                  <Skeleton width={"100%"} height={40} />
                  <Skeleton width={"40%"} height={50} />
                </Stack>
              ))
            ) : dataBaiViet.length > 0 ? (
              // Hiển thị dữ liệu bài viết khi có dữ liệu
              dataBaiViet.map((item, index) => (
                <ItemDanhSachBaiViet dataItem={item} key={index} />
              ))
            ) : (
              // Hiển thị thông báo khi không có bài viết
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
            )}

            <Stack width={"100%"} p={2.5}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleLoadMore}
                sx={{
                  borderRadius: "8px",
                  color: "#ddd",
                  bgcolor: "#000",
                  textTransform: "initial",
                  fontSize: "16px",
                }}
              >
                {loading ? "Đang tải..." : "Xem các bài cũ hơn"}
              </Button>
            </Stack>
          </Stack>

          {/* SECONDARY */}
          <Secondary
            fetchData={fetchData}
            searchKey={searchKey}
            setSearchKey={setSearchKey}
          />
        </Stack>
      </Stack>
      {/* Chừa khoảng cách footer */}
      <div style={{ marginBottom: "50px" }}></div>
      <Footer />
    </div>
  );
}

export default Blog;
