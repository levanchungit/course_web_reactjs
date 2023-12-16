import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography } from "@mui/material";

function ItemBaiViet(props) {
  const [dataItem, setDataItem] = React.useState(props.dataItem);
  const MAX_LENGTH_CONTENT = 443;
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        backgroundColor={"#ffffff"}
      >
        <Stack
          width={"100%"}
          direction={"column"}
          flexWrap={"wrap"}
          p={2.5}
          spacing={1.25}
        >
          <Typography
            width={"100%"}
            align="center"
            fontSize={20}
            fontFamily={"Montserrat"}
            fontWeight={"Medium"}
            color={"#000"}
            opacity={0.8}
            textTransform={"uppercase"}
          >
            {dataItem && dataItem.tittle ? dataItem.tittle : ""}
          </Typography>

          <Typography
            width={"100%"}
            align="center"
            fontSize={12}
            fontFamily={"Montserrat"}
            fontWeight={"Regular"}
            color={"#000"}
            opacity={0.8}
            textTransform={"uppercase"}
          >
            {dataItem && dataItem.createAt ? dataItem.createAt : ""}
          </Typography>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1.5}
            color={"#ddd"}
            width={"100%"}
            flexWrap={"wrap"}
          >
            <Typography>Tags:</Typography>

            {dataItem &&
              dataItem.category_names &&
              dataItem.category_names.map((item, index) => {
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
                    >
                      {item}
                    </Typography>
                  </Button>
                );
              })}
          </Stack>

          <img
            src={dataItem && dataItem.cover_image ? dataItem.cover_image : ""}
            alt="img"
            //responsive style maxHeight="200px"
            width={"100%"}
            height={"200px"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
            }}
          />

          <Typography
            align="justify"
            fontSize={16}
            fontFamily={"Montserrat"}
            fontWeight={"Regular"}
            color={"#333"}
            width={"100%"}
          >
            {/* limit paraphap  length 200 ... */}
            {dataItem && dataItem.content
              ? dataItem.content.length > MAX_LENGTH_CONTENT
                ? dataItem.content.substr(0, MAX_LENGTH_CONTENT) + "..."
                : dataItem.content
              : ""}
          </Typography>

          <Button
            sx={{
              border: "0.1px solid" + "#A9A9AC",
              color: "#000",
              borderRadius: "8px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontFamily: "Montserrat",
              fontWeight: "Regular",
            }}
            width={"100%"}
            variant="outlined"
          >
            Đọc thêm
          </Button>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default ItemBaiViet;
