import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Link, Stack, Typography } from "@mui/material";
import { FacebookOutlined, LinkedIn } from "@mui/icons-material/";
import { useMediaQuery } from "@mui/material";
import { URL_INFO } from "../../constants/appConstants";
function GioiThieu(props) {
  const isSmallScreen = useMediaQuery("(max-width:899px)");
  const isVerySmallScreen = useMediaQuery("(max-width:399px)");

  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.1px  #DDDDDD"}
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/ddfyyysdw/image/upload/v1700644583/hhwiuoyqlsevbi7redn4.png)",
          backgroundImage:
            "url(https://res.cloudinary.com/ddfyyysdw/image/upload/v1700648404/opuxngoxugrg3afcr2g9.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          width={isSmallScreen ? "100%" : "80%"}
          direction={"row"}
          p={2.5}
          spacing={2}
          alignItems={"left"}
        >
          <Stack
            spacing={2}
            width={isVerySmallScreen ? "100%" : "60%"}
            direction={"column"}
          >
            <Typography
              align="left"
              fontSize={isSmallScreen ? 30 : 32}
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
              Trang web là nơi tập trung đa dạng nhiều nội dung. Mục tiêu áp
              dụng và chia sẻ kiến thức, hy vọng nội dung mình mang lại nguồn
              động viên và niềm vui tích cực cho mọi người trên hành trình phát
              triển bản thân. Hãy cùng nhau lan toả năng lượng tích cực và khám
              phá thế giới đa sắc mà trang web mang lại!
            </Typography>

            <Stack
              direction={"row"}
              spacing={2.5}
              justifyContent={"flex-start"}
            >
              <Link href={URL_INFO.facebook} underline="none">
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
                    sx={{
                      width: "2rem",
                      height: "2rem",
                      color: "#D2302C",
                    }}
                  />
                </Box>
              </Link>

              <Link href={URL_INFO.linkedin} underline="none">
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

              <Link href={URL_INFO.port_folio} underline="none">
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
                  <Typography
                    sx={{
                      fontSize: "10px",
                      width: "2rem",
                      height: "2rem",
                      color: "#D2302C",
                    }}
                  >
                    Port
                    <br />
                    Folio
                  </Typography>
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default GioiThieu;
