import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography, Link, } from "@mui/material";
import ButtonCustom from "../../../ButtonCustom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';



export default function Comment() {
    const [listComment, setListComment] = React.useState([]);

    React.useEffect(() => {
        const listDemo = [
            {
                _id: "1",
                username: "Nguyễn Văn A",
                dateComment: "15/10/2021",
                content: "Lorem ipsum dolor sit amet consectetur. Tortor nunc varius neque nunc amet velit ipsum. Praesent faucibus vitae amet praesent diam. Aliquam ut ultricies neque sit nisi aliquet integer arcu ipsum. In eu vestibulum pellentesque urna dolor hac convallis. Ultrices hac neque lacus nec venenatis lacus molestie. Et maecenas lobortis vulputate vitae lectus felis congue. Mauris nulla non eget sem felis congue vitae arcu. In at proin gravida dictum bibendum id semper. Auctor quis pulvinar morbi pharetra elementum eget urna. Ullamcorper nibh pellentesque nec odio pellentesque. Facilisis feugiat turpis felis nec semper. Sit at vel purus et id vel tortor at. Eu ut pellentesque sed praesent sed. Quam purus ornare suspendisse eros nullam aliquet id adipiscing urna. Porttitor mauris id accumsan aliquet vulputate dolor. Amet massa urna sed lectus in. Vivamus at faucibus risus tempor potenti volutpat. Dui sagittis lacus amet aliquam purus consequat consectetur. Sit ipsum gravida tempus nibh non. Aliquam ipsum turpis accumsan ultrices sapien libero sed. Quis egestas gravida mi sit vitae viverra. Et porta massa in nisl eleifend scelerisque mattis. Pharetra aliquet ut feugiat hendrerit nisi. Arcu dignissim cursus enim egestas urna nibh id eget senectus. Pretium a massa tincidunt ultrices. Id lacinia arcu nulla egestas nunc diam sit magna enim. Vel donec eget at vitae parturient placerat imperdiet vehicula morbi. Feugiat ac sagittis diam nisi risus at rhoncus iaculis. Ut in pretium tortor lorem.",
                like: 10,
            },
            {
                _id: "2",
                username: "Nguyễn Văn B",
                dateComment: "15/10/2021",
                content: "Lorem ipsum dolor sit amet consectetur. Tortor nunc varius neque nunc amet velit ipsum. Praesent faucibus vitae amet praesent diam. Aliquam ut ultricies neque sit nisi aliquet integer arcu ipsum. In eu vestibulum pellentesque urna dolor hac convallis. Ultrices hac neque lacus nec venenatis lacus molestie. Et maecenas lobortis vulputate vitae lectus felis congue. Mauris nulla non eget sem felis congue vitae arcu. In at proin gravida dictum bibendum id semper. Auctor quis pulvinar morbi pharetra elementum eget urna. Ullamcorper nibh pellentesque nec odio pellentesque. Facilisis feugiat turpis felis nec semper. Sit at vel purus et id vel tortor at. Eu ut pellentesque sed praesent sed. Quam purus ornare suspendisse eros nullam aliquet id adipiscing urna. Porttitor mauris id accumsan aliquet vulputate dolor. Amet massa urna sed lectus in. Vivamus at faucibus risus tempor potenti volutpat. Dui sagittis lacus amet aliquam purus consequat consectetur. Sit ipsum gravida tempus nibh non. Aliquam ipsum turpis accumsan ultrices sapien libero sed. Quis egestas gravida mi sit vitae viverra. Et porta massa in nisl eleifend scelerisque mattis. Pharetra aliquet ut feugiat hendrerit nisi. Arcu dignissim cursus enim egestas urna nibh id eget senectus. Pretium a massa tincidunt ultrices. Id lacinia arcu nulla egestas nunc diam sit magna enim. Vel donec eget at vitae parturient placerat imperdiet vehicula morbi. Feugiat ac sagittis diam nisi risus at rhoncus iaculis. Ut in pretium tortor lorem.",
                like: 10,
            }
        ];
        setListComment(listDemo);
    }, []);

    const CommentItem = ({ item }) => {
        return (
            <React.Fragment>
                <CssBaseline />

                <Stack
                    width={"100%"}
                    direction={"row"}
                    justifyContent={"center"}
                    backgroundColor={"#ffffff"}
                    borderBottom={"0.1px solid #DDDDDD"}
                >
                    <Stack
                        width={'100%'}
                        direction={"column"}
                        flexWrap={"wrap"}
                        p={2.5}
                        spacing={2.5}
                    >
                        <Stack
                            spacing={2}
                            width={'100%'}
                            direction={"column"}
                        >
                            <Typography
                                align="left"
                                fontSize={16}
                                fontFamily={"Open Sans"}
                                fontWeight={"Bold"}
                                color={"#333"}
                            >
                                {item.username}
                            </Typography>
                            {/* dateComment va - tra loi nam trn 1 dong */}
                            <Stack
                                direction={"row"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                            >
                                <Typography
                                    align="left"
                                    fontSize={14}
                                    fontFamily={"Open Sans"}
                                    fontWeight={"Bold"}
                                    color={"#333"}
                                >
                                    {item.dateComment} &nbsp;
                                </Typography>

                                <Link
                                    underline={"none"}
                                    href={"#"}
                                    target={"_blank"}
                                >
                                    <Typography
                                        align="left"
                                        fontSize={14}
                                        fontFamily={"Open Sans"}
                                        fontWeight={"Bold"}
                                        color={"red"}
                                    >
                                        -  Trả lời
                                    </Typography>
                                </Link>


                            </Stack>


                            <Typography
                                align="justify"
                                fontSize={18}
                                fontFamily={"Open Sans"}
                                fontWeight={"Regular"}
                                color={"#000000"}
                            >
                                {item.content}
                            </Typography>
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Stack direction={"row"} spacing={1}>
                                    <FavoriteIcon color={"error"} />
                                    <Typography
                                        align="left"
                                        fontSize={18}
                                        fontFamily={"Open Sans"}
                                        fontWeight={"Regular"}
                                        color={"#000000"}
                                    >
                                        {item.like}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </React.Fragment>
        );
    }

    const TextareaAutosize = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        width: 100%;
        // margin-top: 10px;
        margin-bottom: 10px;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-start"}
                p={2.5}
                backgroundColor={"#ffffff"}
            >
                <Typography
                    align="left"
                    fontSize={22}
                    fontFamily={"Open Sans"}
                    fontWeight={"Bold"}
                    color={"#000"}
                    mt={2.5}
                >
                    {
                        listComment.length > 0
                            ? listComment.length + ' Bình luận'
                            : 'Chưa có bình luận nào'
                    }
                </Typography>
            </Stack>
            {listComment.map((item, index) => {
                return (
                    <CommentItem
                        key={item._id}
                        item={item}
                    />
                );
            })};

            <Stack
                width={"100%"}
                direction={"column"}
                justifyContent={"flex-start"}
                p={2.5}
                backgroundColor={"#ffffff"}
            >
                <Typography
                    align="left"
                    fontSize={22}
                    fontFamily={"Open Sans"}
                    fontWeight={"Bold"}
                    color={"#000"}
                >
                    Bình luận của bạn
                </Typography>

                <Typography
                    align="left"
                    fontSize={16}
                    fontFamily={"Open Sans"}
                    fontWeight={"Regular"}
                    color={"#000"}
                    mt={2.5}
                    mb={2.5}
                >
                    Địa chỉ email của bạn sẽ được Chung giữ bí mật cho nhé !
                </Typography>

                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Nhập bình luận của bạn"
                    maxRows={5}
                />

                <TextareaAutosize
                    aria-label="minimum height"
                    placeholder="Tên của bạn"
                    maxRows={1}
                />

                <TextareaAutosize
                    aria-label="minimum height"
                    placeholder="Email của bạn"
                    maxRows={1}
                />

                <ButtonCustom
                    btnText={"Gửi bình luận"}
                    onClick={() => { console.log('click'); }}
                />
            </Stack>




        </React.Fragment>
    )
}
