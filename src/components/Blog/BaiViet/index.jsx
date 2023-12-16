import * as React from "react";
import { Button, Stack } from "@mui/material";
import Comment from "../Components/Comment";
import Content from "../Components/Content";
import { useMainValues } from "../../../contexts/MainContext";
import TimKiem from "../Components/TimKiem";
import GioiThieu from "../Components/GioiThieu";
import BaiVietNoiBat from "../Components/BaiVietNoiBat";
import ItemBaiViet from "../Components/ItemBaiViet";
import moment from "moment";

function BaiViet() {
  const { isMediumScreen } = useMainValues();
  const [dagtaGioiThieu, setDaGtaGioiThieu] = React.useState({});
  const [dataBaiVietNoiBat, setDataBaiVietNoiBat] = React.useState([]);

  React.useEffect(() => {
    setDaGtaGioiThieu({
      image:
        "https://cdnmedia.baotintuc.vn/Upload/4l8oGGp94lA5r6lHXppg/files/2022/03/f0conennammaylanh.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae laoreet justo. Donec euismod, nisl eget ultricies aliquam, velit odio lacinia diam, in malesuada odio odio in velit. Sed non ornare nisl",
    });
    setDataBaiVietNoiBat([
      {
        _id: 1,
        title: "Bài viết nổi bật 1",
      },
      {
        _id: 2,
        title: "Bài viết nổi bật 2",
      },
    ]);
  }, []);

  const listBaiViet = {
    total: 1,
    page: 1,
    limit: 2,
    results: [
      {
        _id: "656eed7964af92f2b9f13cfc",
        tittle:
          "Lorem ipsum dolor sit amet consectetur. Venenatis dolor blandit vulputate tincidunt ac sem maecenas.",
        content:
          "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. UltriceLorem ipsum dolor sit amet consectetur. Ultrice amet consectetur. Ultrices quam ultrices nisi orci venenatis erat etiam pharetra lorem. Libero et aliquam risus ut orci amet. Gravida nec velit rhoncus vitae. Ut magnis venenatis risus ac sagittis aliquam fringilla consectetur. Purus euismod ultrices semper sollicitudin condimentum amet aliquam. Risus rhoncus amet magnis tortor. Ut sit massa massa dignissim ornare pharetra sit. Dui morbi vitae molestie nulla. Arcu mattis dui augue in senectus sagittis lorem. Pulvinar turpis id sodales duis sed. Interdum lectus mauris vivamus eu tortor tellus. Malesuada at diam morbi euismod mi senectus. Sagittis ac feugiat ut feugiat urna nec eros. Aliquet suspendisse sed posuere aliquet placerat cum diam sapien. Nam rhoncus felis et vitae. Enim malesuada nulla ultricies facilisis habitasse praesent feugiat. Eget morbi a scelerisque feugiat dapibus velit volutpat adipiscing praesent. Eget ac ultricies praesent viverra nisl ut sed venenatis. Quis gravida egestas lacus egestas viverra scelerisque tincidunt turpis. Eget quis sollicitudin id porttitor felis velit consectetur. Mauris vitae sit facilisis id ullamcorper id nibh lacus odio. Viverra consequat condimentum odio nunc cras amet mi odio. Ornare nunc urna feugiat nam proin egestas urna mauris. Sed elementum suspendisse ultrices condimentum. In cursus in dignissim aenean. Et egestas malesuada fermentum parturient ut egestas tellus. Enim eu lorem egestas pellentesque volutpat quisque tortor. Quis consectetur amet nibh platea id. Tincidunt eget arcu ullamcorper at ipsum.",
        author: "656ee29ca4fca328dc6f0c89",
        cover_image:
          "https://res.cloudinary.com/ddfyyysdw/image/upload/v1701768075/jonxlotb11k5fk5qybgy.png",
        categories: ["656eeceea298d40950091990", "656eed11a298d40950091995"],
        category_names: ["Tự do tài chính", "Phát triển bản thân"],
        view: 0,
        like: 0,
        share: 0,
        status: "draft",
        publish_at: null,
        comments: [],
        createAt: moment().format("L"),
        __v: 0,
      },
      {
        _id: "656eed7964af92f2b9f13cfc",
        tittle:
          "Lorem ipsum dolor sit amet consectetur. Venenatis dolor blandit vulputate tincidunt ac sem maecenas.",
        content:
          "Lorem ipsum dolor sit amet consectetur. UltriceLorem ipsum dolor sit amet consectetur. UltriceLorem ipsum dolor sit amet consectetur. Ultrices quam ultrices nisi orci venenatis erat etiam pharetra lorem. Libero et aliquam risus ut orci amet. Gravida nec velit rhoncus vitae. Ut magnis venenatis risus ac sagittis aliquam fringilla consectetur. Purus euismod ultrices semper sollicitudin condimentum amet aliquam. Risus rhoncus amet magnis tortor. Ut sit massa massa dignissim ornare pharetra sit. Dui morbi vitae molestie nulla. Arcu mattis dui augue in senectus sagittis lorem. Pulvinar turpis id sodales duis sed. Interdum lectus mauris vivamus eu tortor tellus. Malesuada at diam morbi euismod mi senectus. Sagittis ac feugiat ut feugiat urna nec eros. Aliquet suspendisse sed posuere aliquet placerat cum diam sapien. Nam rhoncus felis et vitae. Enim malesuada nulla ultricies facilisis habitasse praesent feugiat. Eget morbi a scelerisque feugiat dapibus velit volutpat adipiscing praesent. Eget ac ultricies praesent viverra nisl ut sed venenatis. Quis gravida egestas lacus egestas viverra scelerisque tincidunt turpis. Eget quis sollicitudin id porttitor felis velit consectetur. Mauris vitae sit facilisis id ullamcorper id nibh lacus odio. Viverra consequat condimentum odio nunc cras amet mi odio. Ornare nunc urna feugiat nam proin egestas urna mauris. Sed elementum suspendisse ultrices condimentum. In cursus in dignissim aenean. Et egestas malesuada fermentum parturient ut egestas tellus. Enim eu lorem egestas pellentesque volutpat quisque tortor. Quis consectetur amet nibh platea id. Tincidunt eget arcu ullamcorper at ipsum.",
        author: "656ee29ca4fca328dc6f0c89",
        cover_image:
          "https://thumbs.dreamstime.com/b/beginning-new-life-growing-sprout-65351666.jpg",
        categories: ["656eeceea298d40950091990", "656eed11a298d40950091995"],
        category_names: ["Tự do tài chính", "Phát triển bản thân"],
        view: 0,
        like: 0,
        share: 0,
        status: "draft",
        publish_at: null,
        createAt: moment().format("L"),
        comments: [],
        __v: 0,
      },
      {
        _id: "656eed7964af92f2b9f13cfc",
        tittle:
          "Lorem ipsum dolor sit amet consectetur. Venenatis dolor blandit vulputate tincidunt ac sem maecenas.",
        content:
          "Lorem ipsum dolor sit amet consectetur. Ultrices quam ultrices nisi orci venenatis erat etiam pharetra lorem. Libero et aliquam risus ut orci amet. Gravida nec velit rhoncus vitae. Ut magnis venenatis risus ac sagittis aliquam fringilla consectetur. Purus euismod ultrices semper sollicitudin condimentum amet aliquam. Risus rhoncus amet magnis tortor. Ut sit massa massa dignissim ornare pharetra sit. Dui morbi vitae molestie nulla. Arcu mattis dui augue in senectus sagittis lorem. Pulvinar turpis id sodales duis sed. Interdum lectus mauris vivamus eu tortor tellus. Malesuada at diam morbi euismod mi senectus. Sagittis ac feugiat ut feugiat urna nec eros. Aliquet suspendisse sed posuere aliquet placerat cum diam sapien. Nam rhoncus felis et vitae. Enim malesuada nulla ultricies facilisis habitasse praesent feugiat. Eget morbi a scelerisque feugiat dapibus velit volutpat adipiscing praesent. Eget ac ultricies praesent viverra nisl ut sed venenatis. Quis gravida egestas lacus egestas viverra scelerisque tincidunt turpis. Eget quis sollicitudin id porttitor felis velit consectetur. Mauris vitae sit facilisis id ullamcorper id nibh lacus odio. Viverra consequat condimentum odio nunc cras amet mi odio. Ornare nunc urna feugiat nam proin egestas urna mauris. Sed elementum suspendisse ultrices condimentum. In cursus in dignissim aenean. Et egestas malesuada fermentum parturient ut egestas tellus. Enim eu lorem egestas pellentesque volutpat quisque tortor. Quis consectetur amet nibh platea id. Tincidunt eget arcu ullamcorper at ipsum.",
        author: "656ee29ca4fca328dc6f0c89",
        cover_image:
          "https://www.shutterstock.com/shutterstock/photos/686332135/display_1500/stock-photo-close-up-of-a-human-hand-protecting-balance-between-life-and-work-on-seesaw-686332135.jpg",
        categories: ["656eeceea298d40950091990", "656eed11a298d40950091995"],
        category_names: ["Tự do tài chính", "Phát triển bản thân"],
        view: 0,
        like: 0,
        share: 0,
        status: "draft",
        publish_at: null,
        createAt: moment().format("L"),
        comments: [],
        __v: 0,
      },
    ],
  };

  return (
    <div className="App">
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        backgroundColor={"#fff"}
      >
        <Stack
          width={isMediumScreen ? "100%" : "60%"}
          direction={isMediumScreen ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          {/* primary */}
          <Stack
            width={isMediumScreen ? "100%" : "60%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* List bài viết */}
            {listBaiViet.results.map((item, index) => {
              return <ItemBaiViet dataItem={item} key={index} />;
            })}

            <Stack width={"100%"} px={2.5}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  color: "#ddd",
                  bgcolor: "#000",
                  textTransform: "initial",
                  fontSize: "16px",
                }}
              >
                Xem các bài cũ hơn
              </Button>
            </Stack>
          </Stack>

          {/* secondary */}
          <Stack
            width={isMediumScreen ? "100%" : "40%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={2.5}
          >
            <TimKiem
              id={"outlined-adornment-password"}
              label={"Tìm kiếm"}
              type={"text"}
              onClick={() => {}}
              ariaLabel={"toggle password visibility"}
              position={"end"}
            />
            <GioiThieu data={dagtaGioiThieu} />

            <BaiVietNoiBat data={dataBaiVietNoiBat} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default BaiViet;
