import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography, Link } from "@mui/material";

function ItemLoatBai(props) {
  const [title, setTitle] = React.useState(props.title);
  const [category, setCategory] = React.useState(props.category);
  const [description, setDescription] = React.useState(props.description);
  const [btnText, setBtnText] = React.useState(props.btnText);
  const [img, setImg] = React.useState(props.img);
  const [href, setHref] = React.useState(props.href);

  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        borderTop={"0.5px solid #D9D9D9"}
      >
        <Stack width={"70%"} direction={"row"} m={2} p={2.5} spacing={2}>
          <Stack spacing={2.5} width={"50%"} direction={"column"}>
            <Typography
              align="left"
              fontSize={24}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              {title}
            </Typography>
            <Typography
              align="left"
              fontSize={32}
              fontFamily={"Open Sans"}
              fontWeight={"Bold"}
              color={"#D2302C"}
              textTransform={"uppercase"}
            >
              {category}
            </Typography>
            <Typography
              align="justify"
              fontSize={18}
              fontFamily={"Open Sans"}
              fontWeight={"Regular"}
              color={"#FFFF"}
            >
              {description}
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
                {btnText}
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
              <Link href={href}>
                <img src={img} width="100%" height="auto" alt={category}></img>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default ItemLoatBai;
