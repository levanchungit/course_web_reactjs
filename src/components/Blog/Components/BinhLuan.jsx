import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography, Link, TextField } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

export default function BinhLuan() {
  const [listComment, setListComment] = React.useState([]);

  React.useEffect(() => {
    const listDemo = [
      {
        _id: "1",
        username: "Nguyễn Văn A",
        dateComment: "15/10/2021",
        content:
          "Lorem ipsum dolor sit amet consectetur. Tortor nunc varius neque nunc amet velit ipsum. Praesent faucibus vitae amet praesent diam. Aliquam ut ultricies neque sit nisi aliquet integer arcu ipsum. In eu vestibulum pellentesque urna dolor hac convallis. Ultrices hac neque lacus nec venenatis lacus molestie. Et maecenas lobortis vulputate vitae lectus felis congue. Mauris nulla non eget sem felis congue vitae arcu. In at proin gravida dictum bibendum id semper. Auctor quis pulvinar morbi pharetra elementum eget urna. Ullamcorper nibh pellentesque nec odio pellentesque. Facilisis feugiat turpis felis nec semper. Sit at vel purus et id vel tortor at. Eu ut pellentesque sed praesent sed. Quam purus ornare suspendisse eros nullam aliquet id adipiscing urna. Porttitor mauris id accumsan aliquet vulputate dolor. Amet massa urna sed lectus in. Vivamus at faucibus risus tempor potenti volutpat. Dui sagittis lacus amet aliquam purus consequat consectetur. Sit ipsum gravida tempus nibh non. Aliquam ipsum turpis accumsan ultrices sapien libero sed. Quis egestas gravida mi sit vitae viverra. Et porta massa in nisl eleifend scelerisque mattis. Pharetra aliquet ut feugiat hendrerit nisi. Arcu dignissim cursus enim egestas urna nibh id eget senectus. Pretium a massa tincidunt ultrices. Id lacinia arcu nulla egestas nunc diam sit magna enim. Vel donec eget at vitae parturient placerat imperdiet vehicula morbi. Feugiat ac sagittis diam nisi risus at rhoncus iaculis. Ut in pretium tortor lorem.",
        like: 10,
      },
      {
        _id: "2",
        username: "Nguyễn Văn B",
        dateComment: "15/10/2021",
        content:
          "Lorem ipsum dolor sit amet consectetur. Tortor nunc varius neque nunc amet velit ipsum. Praesent faucibus vitae amet praesent diam. Aliquam ut ultricies neque sit nisi aliquet integer arcu ipsum. In eu vestibulum pellentesque urna dolor hac convallis. Ultrices hac neque lacus nec venenatis lacus molestie. Et maecenas lobortis vulputate vitae lectus felis congue. Mauris nulla non eget sem felis congue vitae arcu. In at proin gravida dictum bibendum id semper. Auctor quis pulvinar morbi pharetra elementum eget urna. Ullamcorper nibh pellentesque nec odio pellentesque. Facilisis feugiat turpis felis nec semper. Sit at vel purus et id vel tortor at. Eu ut pellentesque sed praesent sed. Quam purus ornare suspendisse eros nullam aliquet id adipiscing urna. Porttitor mauris id accumsan aliquet vulputate dolor. Amet massa urna sed lectus in. Vivamus at faucibus risus tempor potenti volutpat. Dui sagittis lacus amet aliquam purus consequat consectetur. Sit ipsum gravida tempus nibh non. Aliquam ipsum turpis accumsan ultrices sapien libero sed. Quis egestas gravida mi sit vitae viverra. Et porta massa in nisl eleifend scelerisque mattis. Pharetra aliquet ut feugiat hendrerit nisi. Arcu dignissim cursus enim egestas urna nibh id eget senectus. Pretium a massa tincidunt ultrices. Id lacinia arcu nulla egestas nunc diam sit magna enim. Vel donec eget at vitae parturient placerat imperdiet vehicula morbi. Feugiat ac sagittis diam nisi risus at rhoncus iaculis. Ut in pretium tortor lorem.",
        like: 10,
      },
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
            width={"100%"}
            direction={"column"}
            flexWrap={"wrap"}
            p={2.5}
            spacing={2.5}
          >
            <Stack spacing={2} width={"100%"} direction={"column"}>
              <Typography
                align="left"
                fontSize={16}
                fontFamily={"Open Sans"}
                fontWeight={"Bold"}
                color={"#333"}
              >
                {item.username}
              </Typography>

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

                <Link underline={"none"} href={"#"} target={"_blank"}>
                  <Typography
                    align="left"
                    fontSize={14}
                    fontFamily={"Open Sans"}
                    fontWeight={"Bold"}
                    color={"red"}
                  >
                    - Trả lời
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
          {listComment.length > 0
            ? listComment.length + " Bình luận"
            : "Chưa có bình luận nào"}
        </Typography>
      </Stack>

      {listComment.map((item, index) => {
        return <CommentItem key={item._id} item={item} />;
      })}

      <Stack
        width={"100%"}
        direction={"column"}
        justifyContent={"flex-start"}
        p={2.5}
        backgroundColor={"#ffffff"}
        spacing={2}
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

        <TextField
          label="Nhập bình luận của bạn"
          multiline
          rows={5}
          maxRows={5}
        />

        <TextField label="Tên của bạn" />

        <TextField label="Email của bạn" />

        <Button
          sx={{
            border: "1px solid #DAE2ED",
            color: "#333",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "1rem",
            fontFamily: "Open Sans",
          }}
          onClick={() => {}}
        >
          Gửi bình luận
        </Button>
      </Stack>
    </React.Fragment>
  );
}
