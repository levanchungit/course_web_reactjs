import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Stack, Typography } from "@mui/material";
import { formatDateTime } from "../../../utils/common";
import MarkDown from "./MarkDown";
import { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
export class NoiDungBaiViet extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // $(window).scrollTo(0, "0.5s");
    if (window.FB) {
      window.FB.XFBML.parse();
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_APPID_FB,
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: "v2.5", // use version 2.1
      });
    }.bind(this);

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/vi_VN/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    const { content } = this.props;
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
            spacing={1.5}
          >
            <Typography
              align="center"
              fontSize={22}
              fontFamily={"Montserrat"}
              fontWeight={"Medium"}
              color={"#000"}
              opacity={0.8}
              textTransform={"uppercase"}
            >
              {content?.title}
            </Typography>

            <Typography
              align="center"
              fontSize={14}
              fontFamily={"Montserrat"}
              fontWeight={"Regular"}
              color={"#000"}
              opacity={0.8}
              textTransform={"uppercase"}
            >
              {formatDateTime(content?.create_at)}
            </Typography>

            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1.5}
            >
              <Typography
                fontSize={12}
                fontFamily={"Montserrat"}
                fontWeight={"Regular"}
                color={"#A9A9AC"}
                opacity={0.8}
              >
                Tags:
              </Typography>
              {content?.categories?.map((item, index) => {
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
                      textTransform={"initial"}
                      color="black"
                    >
                      {item.name}
                    </Typography>
                  </Button>
                );
              })}
            </Stack>

            <MarkDown markdown={content?.content} type={"content"} />

            <FacebookShareButton
              style={{ width: "70px" }}
              url={window.location.href}
              quote={"Helllo"}
              title={"Good morning"}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </Stack>
        </Stack>
      </React.Fragment>
    );
  }
}
