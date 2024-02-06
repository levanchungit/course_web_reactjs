import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Credit() {
  const imageWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ẩn bất kỳ phần nào của hình ảnh nằm ngoài vùng chứa
    borderRadius: "50%", // Để hình ảnh thành hình tròn
    maxWidth: "200px", // Điều chỉnh chiều rộng tối đa của vùng chứa hình ảnh
    width: "100%", // Đảm bảo rằng hình ảnh sẽ không vượt quá vùng chứa
    margin: "auto", // Căn giữa hình ảnh trong vùng chứa
  };

  const imageStyle = {
    width: "100%", // Chiều rộng của hình ảnh sẽ luôn là 100% của vùng chứa
    height: "auto", // Chiều cao sẽ tự động tính toán dựa trên tỉ lệ khung hình của hình ảnh
  };

  const arr = [
    {
      name: "Lê Văn Chung",
      role: "Developer Full Stack",
      description:
        "Ý tưởng, nội dung, hình ảnh, thiết kế, lập trình, quản lý dự án bản thân Chung cũng đã cố gắng hoàn thiện hết mức có thể.",
      avatar:
        "https://res.cloudinary.com/ddfyyysdw/image/upload/v1704787052/dhwz4mji3zym0k2ncmjg.png",
      bg: "#E95065",
    },
    {
      name: "Nguyễn Trọng Hiếu",
      role: "Frontend Developer",
      description:
        "Lập trình phần giao diện đã đóng góp một phần công sức vào dự án.",
      avatar:
        "https://res.cloudinary.com/ddfyyysdw/image/upload/v1707233181/esssqg1ekyuidrbmmqpk.jpg",
      bg: "#EE7854",
    },
  ];

  return (
    <Box bgcolor={"white"} p={2}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="textSecondary"
        fontFamily={"Montserrat"}
        fontWeight={"Medium"}
      >
        Thành viên trong dự án
      </Typography>
      <Grid
        container
        //align items
        gap={2}
        justifyContent="center"
        alignItems={"stretch"}
      >
        {arr.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} bgcolor={item.bg} p={2}>
            <Box textAlign="center">
              <div style={imageWrapperStyle}>
                <img
                  src={item.avatar}
                  style={imageStyle}
                  alt="Le Van Chung avatar"
                />
              </div>
              <Typography
                variant="h6"
                color="white"
                align="center"
                fontFamily={"Montserrat"}
                fontWeight={"Medium"}
              >
                {item.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="white"
                align="center"
                fontFamily={"Montserrat"}
                fontWeight={"Medium"}
              >
                {item.role}
              </Typography>

              <Typography
                variant="caption"
                color="white"
                align="center"
                fontFamily={"Montserrat"}
                fontWeight={"Medium"}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
