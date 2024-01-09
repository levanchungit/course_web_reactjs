import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography } from "@mui/material";
import { formatDateTime } from "../../../utils/common";
import { Link } from "react-router-dom";
import MarkDown from "./MarkDown";

function ItemDanhSachBaiViet(props) {
  const [dataItem] = React.useState(props.dataItem);

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
          textAlign={"justify"}
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
            {dataItem && dataItem.title ? dataItem.title : ""}
          </Typography>

          <Stack direction={"row"} alignItems={"center"}>
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
              {dataItem && dataItem.create_at
                ? formatDateTime(dataItem.create_at)
                : ""}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1.5}
            color={"#ddd"}
            width={"100%"}
            flexWrap={"wrap"}
          >
            <Typography
              fontSize={12}
              fontFamily={"Montserrat"}
              fontWeight={"Regular"}
            >
              Tags:{" "}
            </Typography>
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
                      color="black"
                    >
                      {item}
                    </Typography>
                  </Button>
                );
              })}
          </Stack>

          <MarkDown
            markdown={
              dataItem.content.length > 400
                ? dataItem.content.substring(0, 400) + "..."
                : dataItem.content
            }
          />

          {dataItem && dataItem.slug && (
            <Link
              to={`/blog/${dataItem.slug}`}
              state={{ chiTietBaiViet: dataItem }}
            >
              <Button
                sx={{
                  border: "0.1px solid" + "#A9A9AC",
                  color: "#000",
                  borderRadius: "8px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "Regular",
                  width: "100%",
                }}
                variant="outlined"
              >
                Đọc thêm
              </Button>
            </Link>
          )}
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default ItemDanhSachBaiViet;
