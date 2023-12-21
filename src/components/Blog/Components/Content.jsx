import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Content() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setData({
            title: "Cách chọn mua máy lạnh phù hợp với gia đình, Máy lạnh là một trong những thiết bị không thể thiếu trong mỗi gia đình",
            category: "Máy lạnh",
            description: "Máy lạnh là một trong những thiết bị không thể thiếu trong mỗi gia đình. Tuy nhiên, việc chọn mua máy lạnh phù hợp với gia đình lại không phải là điều dễ dàng. Bởi vì, trên thị trường hiện nay có rất nhiều dòng máy lạnh với nhiều tính năng khác nhau. Nếu bạn không có kinh nghiệm thì sẽ rất dễ mua phải máy lạnh không phù hợp với gia đình. Để giúp bạn có thể chọn mua được máy lạnh phù hợp với gia đình, chúng tôi sẽ chia sẻ đến bạn một số kinh nghiệm chọn mua máy lạnh phù hợp với gia đình.",
            btnText: "Xem thêm",
            img1: "https://cdnmedia.baotintuc.vn/Upload/4l8oGGp94lA5r6lHXppg/files/2022/03/f0conennammaylanh.jpg",
            img2: "https://cdnmedia.baotintuc.vn/Upload/4l8oGGp94lA5r6lHXppg/files/2022/03/f0conennammaylanh.jpg",
            href: "/blog/1",
            dateCreate: "22/09/2021",
        })
    }, []);

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
                    width={'100%'}
                    direction={"column"}
                    flexWrap={"wrap"}
                    p={2.5}
                    spacing={1.5}
                >
                    <Typography
                        align="center"
                        fontSize={22}
                        fontFamily={"Open Sans"}
                        fontWeight={"Bold"}
                        color={"#000"}
                        opacity={0.8}
                        textTransform={"uppercase"}
                    >
                        {data.title ? data.title : ""}
                    </Typography>

                    <Typography
                        align="center"
                        fontSize={14}
                        fontFamily={"Open Sans"}
                        fontWeight={"Bold"}
                        color={"#000"}
                        opacity={0.8}
                        textTransform={"uppercase"}
                    >
                        {data.dateCreate ? data.dateCreate : ""}
                    </Typography>

                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={1.5}
                    >
                        <Stack
                            px={1.5}
                            py={0.5}
                            borderRadius={2}
                            border={"1px solid #ddd"}
                        >
                            <Typography
                                align="center"
                                fontSize={14}
                                fontFamily={"Open Sans"}
                                fontWeight={"Regular"}
                                color={"#333"}
                                lineHeight={1.5}
                            >
                                {data.category ? data.category : ""}
                            </Typography>
                        </Stack>

                    </Stack>


                    <Typography
                        align="justify"
                        fontSize={14}
                        fontFamily={"Open Sans"}
                        fontWeight={"Regular"}
                        color={"#333"}
                    >
                        {data.description ? data.description : ""}
                    </Typography>

                    <Typography
                        borderRadius={2}
                        overflow={"hidden"}
                    >
                        <img
                            src={data.img1 ? data.img1 : ""}
                            alt="img"
                            width="100%"
                            height="100%"
                        />
                    </Typography>

                    <Typography
                        align="justify"
                        fontSize={14}
                        fontFamily={"Open Sans"}
                        fontWeight={"Regular"}
                        color={"#333"}
                    >
                        {data.description ? data.description : ""}
                    </Typography>

                    <Typography
                        borderRadius={2}
                        overflow={"hidden"}
                    >
                        <img
                            src={data.img2 ? data.img2 : ""}
                            alt="img"
                            width="100%"
                            height="100%"
                        />
                    </Typography>
                </Stack>


            </Stack>

            <Stack
                width={"100%"}
                direction={"row"}
                px={2.5}
                spacing={1}
                alignItems={"center"}
            >
                <Button 
                    variant="outlined" 
                    startIcon={<ThumbUpIcon />}
                >
                    Like
                </Button>

                <Button 
                    variant="outlined"
                >
                    Share
                </Button>

                <Typography
                    align="left"
                    fontSize={14}
                    fontFamily={"Open Sans"}
                    fontWeight={"Regular"}
                    color={"#333"}
                >
                    1000 người thích nội dung này
                </Typography>

            </Stack>



        </React.Fragment>
    )
}
