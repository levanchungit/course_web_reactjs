import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Link, Stack, Typography } from "@mui/material";
import {
  FacebookOutlined,
  LinkedIn,
  YouTube,
  Instagram,
  Info,
} from "@mui/icons-material/";
import { useMainValues } from "../../../../contexts/MainContext";
import blogAPI from "../../../../api/BlogAPI";

export default function GioiThieu(props) {
  const { isSmallScreen, isMediumScreen } = useMainValues();

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

  React.useEffect(() => {
    const fetchDataAuthor = async () => {
      try {
        const response = await blogAPI.getAuthor();
        if (response.status === 200) {
          setDataTacGia(response.data.result);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchDataAuthor();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.1px solid  #DDDDDD"}
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/ddfyyysdw/image/upload/v1700648404/opuxngoxugrg3afcr2g9.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          width={isMediumScreen ? "100%" : "60%"}
          direction={"row"}
          p={2.5}
          spacing={2}
          alignItems={"left"}
        >
          <Stack
            spacing={2}
            width={isSmallScreen ? "100%" : "50%"}
            direction={"column"}
          >
            <Typography
              align="left"
              fontSize={isMediumScreen ? 30 : 32}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              GIỚI THIỆU
            </Typography>

            <Typography
              align="justify"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFFF"}
            >
              {dataTacGia.author.introduction}
            </Typography>

            <Stack
              direction={"row"}
              spacing={2.5}
              justifyContent={"flex-start"}
            >
              {/* load object dataTacgia.author */}
              {dataTacGia.author.facebook && (
                <Link
                  target="_blank"
                  href={dataTacGia.author.facebook}
                  underline="none"
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"52px"}
                    height={"52px"}
                    borderRadius={"50%"}
                    p={"10px"}
                    border={"2px solid #D2302C"}
                  >
                    <FacebookOutlined
                      sx={{ width: "2rem", height: "2rem", color: "#D2302C" }}
                    />
                  </Box>
                </Link>
              )}

              {dataTacGia.author.instagram && (
                <Link
                  target="_blank"
                  href={dataTacGia.author.instagram}
                  underline="none"
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"52px"}
                    height={"52px"}
                    borderRadius={"50%"}
                    p={"10px"}
                    border={"2px solid #D2302C"}
                  >
                    <Instagram
                      sx={{ width: "2rem", height: "2rem", color: "#D2302C" }}
                    />
                  </Box>
                </Link>
              )}

              {dataTacGia.author.youtube && (
                <Link
                  target="_blank"
                  href={dataTacGia.author.youtube}
                  underline="none"
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"52px"}
                    height={"52px"}
                    borderRadius={"50%"}
                    p={"10px"}
                    border={"2px solid #D2302C"}
                  >
                    <YouTube
                      sx={{ width: "2rem", height: "2rem", color: "#D2302C" }}
                    />
                  </Box>
                </Link>
              )}

              {dataTacGia.author.linkedin && (
                <Link
                  target="_blank"
                  href={dataTacGia.author.linkedin}
                  underline="none"
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"52px"}
                    height={"52px"}
                    borderRadius={"50%"}
                    p={"10px"}
                    border={"2px solid #D2302C"}
                  >
                    <LinkedIn
                      sx={{ width: "2rem", height: "2rem", color: "#D2302C" }}
                    />
                  </Box>
                </Link>
              )}

              {console.log(dataTacGia.author)}

              {dataTacGia.author.portfolio && (
                <Link
                  target="_blank"
                  href={dataTacGia.author.portfolio}
                  underline="none"
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"52px"}
                    height={"52px"}
                    borderRadius={"50%"}
                    p={"10px"}
                    border={"2px solid #D2302C"}
                  >
                    <Info
                      sx={{ width: "2rem", height: "2rem", color: "#D2302C" }}
                    />
                  </Box>
                </Link>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
