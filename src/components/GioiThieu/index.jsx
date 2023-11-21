import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography } from "@mui/material";
import { IMG_URL_GIOI_THIEU } from "../../constants/appConstants";
import { FacebookOutlined, YouTube } from "@mui/icons-material/";
function GioiThieu(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.5px solid #D9D9D9"}
      >
        <Stack
          width={"80%"}
          direction={"row"}
          px={2}
          spacing={2}
          alignItems={"center"}
        >
          <Stack
            width={"50%"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack direction={"row"}>
              <img
                src={IMG_URL_GIOI_THIEU}
                width="100%"
                max-width="100%"
                height="auto"
                alt={"Gioi Thieu"}
              ></img>
            </Stack>
          </Stack>

          <Stack spacing={2} width={"50%"} direction={"column"}>
            <Typography
              align="center"
              fontSize={24}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              GIỚI THIỆU
            </Typography>

            <Typography
              align="center"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFFF"}
            >
              Xin chào Chung đây !<br></br>Đây là website mình đang nổ lực tạo
              ra một nguồn kiến thức về lập trình, kỹ năng, sách và podcast và
              nhiều thứ khác! Hãy cùng trải nghiệm khám phá và đắm chìm trong
              một biển năng lượng, sự trẻ trung và nhiệt huyết, để chúng ta cùng
              phát triển và học hỏi mỗi ngày nhé.
            </Typography>
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <FacebookOutlined sx={{ color: "#D2302C" }} />
              <YouTube sx={{ color: "#D2302C" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default GioiThieu;
