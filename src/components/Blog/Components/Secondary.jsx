import * as React from "react";
import {
  Button,
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
import tacGiaAPI from "../../../api/TacGiaAPI";
import theLoaiAPI from "../../../api/TheLoaiAPI";
import baiVietAPI from "../../../api/BaiVietAPI";

export default function Secondary() {
  const { isMediumScreen } = useMainValues();
  const [dataTacGia, setDataTacGia] = React.useState({
    email: "levanchung.webcourse@gmail.com",
    author: {
      instagram: "https://www.instagram.com/levanchung.it/",
      linkedin: "https://www.linkedin.com/in/levanchung/",
      youtube: "https://www.youtube.com/channel/UCCA0ty3anrudXp-PZ3gPIfQ",
      avatar:
        "https://res.cloudinary.com/ddfyyysdw/image/upload/v1704787052/dhwz4mji3zym0k2ncmjg.png",
      facebook: "https://www.facebook.com/levanchung.it/",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Sed erat mattis eros suspendisse mauris sit. Eleifend risus pulvinar purus interdum cursus quam ullamcorper ultricies. Sit nulla sit tristique in sem adipiscing. Ante cursus massa nunc morbi nulla nunc duis.",
      name: "Lê Văn Chung",
    },
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
  const [dataDanhMuc, setDataDanhMuc] = React.useState([]);
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

  React.useEffect(() => {
    const fetchDataAuthor = async () => {
      try {
        const response = await tacGiaAPI.getAuthor();
        if (response.status === 200) {
          setDataTacGia(response.data.result);
          console.log("response.result ", response.data.result);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    const fetchDataCategories = async () => {
      try {
        const response = await theLoaiAPI.getCategories();
        if (response.status === 200) {
          setDataDanhMuc(response.data.results);
          console.log("response.result ", response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    const fetchDataPostsPopular = async () => {
      try {
        const response = await baiVietAPI.getPostsPopular();
        if (response.status === 200) {
          setDataBaiVietNoiBat(response.data.results);
          console.log("response.result ", response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchDataAuthor();
    fetchDataCategories();
    fetchDataPostsPopular();
  }, []);

  return (
    <Stack
      width={isMediumScreen ? "100%" : "30%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={isMediumScreen ? "20px" : "0"}
      spacing={2}
    >
      {/*LIST ICON SOCIAL */}
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100%"}
      >
        {/* Open 1 new web browser */}

        <IconButton
          onClick={() => window.open(dataTacGia.author.facebook)}
          sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          onClick={() => window.open(dataTacGia.author.linkedin)}
          sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          onClick={() => window.open(dataTacGia.author.youtube)}
          sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          onClick={() => window.open(dataTacGia.author.instagram)}
          sx={{ fontSize: 24, color: "black", p: "10px", m: "10px" }}
        >
          <InstagramIcon />
        </IconButton>
      </Stack>

      {/* INPUT SEARCH */}
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <InputLabel>{"Search"}</InputLabel>
        <OutlinedInput
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
          src={dataTacGia.author.avatar}
          alt={dataTacGia.author.title}
          // width={isMediumScreen ? "40%" : "100%"}
          height="auto"
          style={{
            maxWidth: "100%",
            height: "300px",
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
          {dataTacGia.author.introduction}
        </Typography>
      </Stack>

      {/* BÀI VIẾT NỔI BẬT */}
      <Stack flexDirection={"column"} justifyContent={"center"} width={"100%"}>
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

        <Stack
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"stretch"}
          gap={0.8}
          p={1}
        >
          {dataBaiVietNoiBat
            ? dataBaiVietNoiBat.map((item, index) => {
                return (
                  <Typography
                    overflow={"hidden"}
                    key={index}
                    align="justify"
                    fontSize={12}
                    fontFamily={"Montserrat"}
                    fontStyle={"Regular"}
                    onClick={() => {
                      alert("Chức năng này đang được phát triển");
                    }}
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      // hover under
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    &#8226; {item.title}
                  </Typography>
                );
              })
            : null}
        </Stack>
      </Stack>

      {/* DANH MỤC */}
      <Stack
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
          useFlexGap
          flexWrap="wrap"
          gap={1}
        >
          {dataDanhMuc.length > 0
            ? dataDanhMuc.map((item, index) => {
                return (
                  <Button
                    key={index}
                    variant="outlined"
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      color: "#ddd",
                      px: 0.5,
                      py: 0.25,
                    }}
                  >
                    <Typography
                      align="center"
                      fontSize={12}
                      fontFamily={"Montserrat"}
                      fontWeight={"Regular"}
                      key={index}
                      textTransform={"initial"}
                      color={"black"}
                    >
                      {item.name}
                    </Typography>
                  </Button>
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
