import * as React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useMainValues } from "../../../contexts/MainContext";
import { Search } from "@mui/icons-material";

export default function Secondary() {
  const { isMediumScreen } = useMainValues();
  const [dagtaGioiThieu, setDaGtaGioiThieu] = React.useState({
    image:
      "https://res.cloudinary.com/ddfyyysdw/image/upload/v1703257175/fwi712gioawm3dbazzvh.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae laoreet justo. Donec euismod, nisl eget ultricies aliquam, velit odio lacinia diam, in malesuada odio odio in velit. Sed non ornare nisl",
  });
  const [dataBaiVietNoiBat, setDataBaiVietNoiBat] = React.useState([
    {
      _id: 1,
      title: "Bài viết nổi bật 1",
    },
    {
      _id: 2,
      title: "Bài viết nổi bật 2",
    },
  ]);
  const [dataHoatDong, setDataHoatDong] = React.useState([
    {
      _id: 1,
      title: "Tin tức",
      content: "Tin tức 1",
      tacgia: "Nguyễn Văn A",
      thoigian: "10/10/2021",
      imgUrl: "https://picsum.photos/200/300",
    },
    {
      _id: 2,
      title: "Sự kiện",
      content: "Sự kiện 1",
      tacgia: "Nguyễn Văn A",
      thoigian: "10/10/2021",
      imgUrl: "https://picsum.photos/200/300",
    },
  ]);
  const data = [
    {
      _id: 1,
      title: "Tin tức",
      lst_content: [
        {
          _id: 11,
          content: "Tin tức 1",
        },
        {
          _id: 12,
          content: "Tin tức 2",
        },
        {
          _id: 13,
          content: "Tin tức 3",
        },
      ],
    },
    {
      _id: 2,
      title: "Sự kiện",
      lst_content: [
        {
          _id: 21,
          content: "Sự kiện 1",
        },
        {
          _id: 22,
          content: "Sự kiện 2",
        },
        {
          _id: 23,
          content: "Sự kiện 3",
        },
      ],
    },
  ];

  const data1 = [
    {
      _id: 11,
      content:
        "Tin tức 1 lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum?",
    },
    {
      _id: 12,
      content:
        "Tin tức 2 lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum?",
    },
    {
      _id: 13,
      content:
        "Tin tức 3 lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum?",
    },
  ];

  return (
    <Stack
      width={isMediumScreen ? "100%" : "30%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/*LIST ICON SOCIAL */}
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100%"}
      >
        <IconButton sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}>
          <InstagramIcon />
        </IconButton>
      </Stack>

      {/* INPUT SEARCH */}
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor={"outlined-adornment-password"}>
          {"Search"}
        </InputLabel>
        <OutlinedInput
          id={"outlined-adornment-password"}
          type={"text"}
          sx={{ borderRadius: "8px" }}
          endAdornment={
            <InputAdornment position={"end"}>
              <IconButton
                sx={{ color: "black" }}
                onClick={() => {
                  console.log("Clicked");
                }}
                onMouseDown={() => {
                  console.log("onMouseDown");
                }}
                edge={"end"}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
          label={"Search"}
        />
      </FormControl>

      {/* GIỚI THIỆU */}
      <Stack
        spacing={2}
        marginY={2}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={"100%"} borderLeft={2 / 8 + "rem solid #000"}>
          <Typography
            p={"10px"}
            fontSize={12}
            fontFamily={"Montserrat"}
            fontStyle={"Regular"}
            textTransform={"uppercase"}
          >
            Giới thiệu
          </Typography>
        </Stack>
        <img
          src={dagtaGioiThieu?.image}
          alt={dagtaGioiThieu?.title}
          width={isMediumScreen ? "40%" : "100%"}
          height="auto"
          style={{
            objectFit: "cover",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Typography
          fontSize={12}
          fontFamily={"Montserrat"}
          fontStyle={"Regular"}
          gutterBottom
          textAlign={"justify"}
        >
          {dagtaGioiThieu?.content}
        </Typography>
      </Stack>

      {/* BÀI VIẾT NỔI BẬT */}
      <Stack
        marginY={2}
        spacing={2}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Stack
          width={"100%"}
          borderLeft={2 / 8 + "rem solid #000"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            p={"10px"}
            fontSize={12}
            fontFamily={"Montserrat"}
            fontStyle={"Regular"}
            textTransform={"uppercase"}
          >
            Bài viết nổi bật
          </Typography>
        </Stack>
        {dataBaiVietNoiBat
          ? dataBaiVietNoiBat.map((item, index) => {
              return (
                <Stack key={index}>
                  <Typography
                    align="justify"
                    fontSize={12}
                    fontFamily={"Montserrat"}
                    fontStyle={"Regular"}
                    key={index}
                    onClick={() => {
                      alert("Chức năng này đang được phát triển");
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    &#8226; {item.title}
                  </Typography>
                </Stack>
              );
            })
          : null}
      </Stack>

      {/* DANH MỤC */}
      <Stack
        marginY={2}
        spacing={2}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Stack
          width={"100%"}
          borderLeft={2 / 8 + "rem solid #000"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            p={"10px"}
            fontSize={12}
            fontFamily={"Montserrat"}
            fontStyle={"Regular"}
            textTransform={"uppercase"}
          >
            Danh mục
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1.5}
        >
          {data.length > 0
            ? data.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    border={"1px solid #ddd"}
                  >
                    <Typography
                      align="center"
                      fontSize={12}
                      fontFamily={"Montserrat"}
                      fontStyle={"Regular"}
                      color={"#333"}
                      lineHeight={1.5}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                );
              })
            : null}
        </Stack>

        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          spacing={1.5}
        >
          {data1 && data1.length > 0
            ? data1.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    px={1.5}
                    py={0.5}
                    borderRadius={3}
                    border={"1px solid #ddd"}
                  >
                    <Typography
                      align="justify"
                      fontSize={12}
                      fontFamily={"Montserrat"}
                      fontStyle={"Regular"}
                      color={"black"}
                      lineHeight={1.5}
                    >
                      {item.content}
                    </Typography>
                  </Stack>
                );
              })
            : null}
        </Stack>
      </Stack>

      {/* CÁC HOẠT ĐỘNG GẦN ĐÂY */}
      <Stack
        marginY={2}
        spacing={2}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Stack
          width={"100%"}
          borderLeft={2 / 8 + "rem solid #000"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            p={"10px"}
            fontSize={12}
            fontFamily={"Montserrat"}
            fontStyle={"Regular"}
            textTransform={"uppercase"}
          >
            Hoạt động gần đây
          </Typography>
        </Stack>

        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1.5}
        >
          {dataHoatDong.length > 0
            ? dataHoatDong.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    direction={"row"}
                    alignItems={"center"}
                    width={"100%"}
                    padding={1}
                    borderRadius={4}
                    border={1 / 8 + "rem solid #ddd"}
                  >
                    <Stack
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"50%"}
                      overflow={"hidden"}
                    >
                      {item.imgUrl ? (
                        <img
                          src={item.imgUrl}
                          alt={item.title}
                          width={60}
                          height={60}
                        />
                      ) : null}
                    </Stack>

                    <Stack
                      direction={"column"}
                      flex={1}
                      padding={1}
                      marginLeft={1}
                    >
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <Typography
                          fontSize={12}
                          fontFamily={"Montserrat"}
                          fontStyle={"Regular"}
                        >
                          {item.tacgia}
                        </Typography>
                        <Typography
                          fontSize={12}
                          fontFamily={"Montserrat"}
                          fontStyle={"Regular"}
                        >
                          {item.thoigian}
                        </Typography>
                      </Stack>

                      <Stack flex={1} alignItems={"flex-start"} width={"100%"}>
                        <Typography
                          fontSize={12}
                          fontFamily={"Montserrat"}
                          fontStyle={"Regular"}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          fontSize={12}
                          fontFamily={"Montserrat"}
                          fontStyle={"Regular"}
                          color={"#999"}
                        >
                          {item.content}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })
            : null}
        </Stack>
      </Stack>
    </Stack>
  );
}
