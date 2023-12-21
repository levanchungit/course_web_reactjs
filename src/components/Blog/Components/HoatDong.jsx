import * as React from "react";
import { Stack, Typography } from "@mui/material";

export default function HoatDong() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData([
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
  }, []);

  const Item = ({ item }) => {
    return (
      <Stack
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

        <Stack direction={"column"} flex={1} padding={1} marginLeft={1}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Typography variant="body1" fontWeight={600} fontSize={14}>
              {item.tacgia}
            </Typography>
            <Typography variant="body1" fontSize={12}>
              {item.thoigian}
            </Typography>
          </Stack>

          <Stack flex={1} alignItems={"flex-start"} width={"100%"}>
            <Typography variant="body1" fontWeight={600} fontSize={14}>
              {item.title}
            </Typography>

            <Typography variant="body1" fontSize={12} color={"#999"}>
              {item.content}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    );
  };
  return (
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
        <Typography variant="h6" textTransform={"uppercase"}>
          Hoạt động gần đây
        </Typography>
      </Stack>

      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1.5}
      >
        {data.length > 0
          ? data.map((item, index) => {
              return <Item key={index} item={item} />;
            })
          : null}
      </Stack>
    </Stack>
  );
}
