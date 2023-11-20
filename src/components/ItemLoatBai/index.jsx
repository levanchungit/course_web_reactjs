import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography } from "@mui/material";
import { IMG_URL_LB_HVBT } from "../../constants/appConstants";

function ItemLoatBai(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.5px solid #D9D9D9"}
      >
        <Stack width={"70%"} direction={"row"} m={2} px={2} spacing={2}>
          <Stack spacing={2.5} width={"50%"} direction={"column"}>
            <Typography
              align="left"
              fontSize={24}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              Loạt bài
            </Typography>
            <Typography
              align="left"
              fontSize={32}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              Hiểu về bản thân
            </Typography>
            <Typography
              align="justify"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFFF"}
            >
              Chỉ có thấu hiểu về bản thân mình, biết được đâu là điểm mạnh điểm
              yếu, hiểu được cách suy nghĩ, cách vận hành những cảm xúc của
              mình,.. Chỉ khi hiểu rõ tường tận về bản thân thì chúng ta mới có
              thể thiết kế cho mình một cuộc sống phù hợp. Và từ đó, nó sẽ chính
              là những nền tảng quan trọng để chúng ta xây dựng cho mình một
              cuộc đời đáng sống sau này.
            </Typography>
            <Stack alignItems={"flex-start"}>
              <Button
                sx={{
                  border: "2px solid #D2302C",
                  color: "#D2302C",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "90%",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                }}
              >
                Xem toàn bộ loạt bài
              </Button>
            </Stack>
          </Stack>

          <Stack
            width={"50%"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack direction={"row"} p={2}>
              <img
                src={IMG_URL_LB_HVBT}
                width="100%"
                height="auto"
                maxWidth="100%"
                alt="Xem toàn bộ loạt bài"
              ></img>
            </Stack>
            {/* <iframe
              width="100%"
              height="100%"
              maxWidth="100%"
              maxHeight="50%"
              src="https://www.youtube.com/embed/72V-K9BlpWg?si=5mLLFmMBapUFe21K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default ItemLoatBai;
