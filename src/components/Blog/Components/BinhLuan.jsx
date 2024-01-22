import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography, TextField } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import baiVietAPI from "../../../api/BaiVietAPI";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { formatDateTime } from "../../../utils/common";

export default function BinhLuan({ slug, comments }) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [validateForm, setValidateForm] = useState({
    content: false,
    name: false,
    email: false,
    helperTextContent: "",
    helperTextName: "",
    helperTextEmail: "",
  });

  const [dataComment, setDataComment] = useState({
    slug: "",
    name: "",
    email: "",
    content: "",
    type: "comment",
  });

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
                {item.name}
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
                  {formatDateTime(item.create_at)} &nbsp;
                </Typography>

                <Button variant="text">
                  <Typography
                    align="left"
                    fontSize={14}
                    fontFamily={"Open Sans"}
                    fontWeight={"Bold"}
                    color={"red"}
                  >
                    - Trả lời
                  </Typography>
                </Button>
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

  const validate = (email, content, name) => {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Kiểm tra rỗng
    if (!email.trim() || !content.trim() || !name.trim()) {
      setValidateForm({
        content: !content.trim(),
        name: !name.trim(),
        email: !email.trim(),
        helperTextContent: content.trim() ? "" : "Vui lòng nhập nội dung",
        helperTextName: name.trim() ? "" : "Vui lòng nhập tên của bạn",
        helperTextEmail: email.trim() ? "" : "Vui lòng nhập email của bạn",
      });
      return false;
    }

    // Kiểm tra định dạng email
    if (!emailRegex.test(email)) {
      setValidateForm({
        content: false,
        name: false,
        email: true,
        helperTextEmail: "Email không hợp lệ",
      });
      return false;
    }

    if (!captchaValue) {
      alert("Vui lòng xác nhận captcha");
      return false;
    }

    // Nếu không có lỗi
    setValidateForm({
      content: false,
      name: false,
      email: false,
      helperTextContent: "",
      helperTextName: "",
      helperTextEmail: "",
    });

    return true;
  };

  const handleComment = async () => {
    const isValid = validate(
      dataComment.email,
      dataComment.content,
      dataComment.name
    );

    if (!isValid) return;

    const data = {
      tokenCaptcha: captchaValue,
      name: dataComment.name,
      slug: slug,
      email: dataComment.email,
      content: dataComment.content,
      type: dataComment.type,
    };

    try {
      const response = await baiVietAPI.createComment(data);
      console.log("response ", response);
      if (response.status === 201) {
        // refresh page
        alert("Gửi bình luận thành công");
      } else {
        alert("Đã xảy ra lỗi vui lòng thử lại");
      }
    } catch (e) {
      console.log("errors ", e);
      alert("Đã xảy ra lỗi vui lòng thử lại");
    }
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
          {comments && comments.length > 0
            ? comments.length + " Bình luận"
            : "Chưa có bình luận nào"}
        </Typography>
      </Stack>

      {comments &&
        comments.map((item, index) => {
          return <CommentItem key={index} item={item} />;
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
          value={dataComment.content}
          onChange={(e) => {
            setDataComment({ ...dataComment, content: e.target.value });
          }}
          label="Nhập bình luận của bạn"
          multiline
          rows={5}
          error={validateForm.content}
          helperText={validateForm.helperTextContent}
        />

        <TextField
          error={validateForm.name}
          value={dataComment.name}
          onChange={(e) => {
            setDataComment({ ...dataComment, name: e.target.value });
          }}
          label="Tên của bạn"
          helperText={validateForm.helperTextName}
        />

        <TextField
          error={validateForm.email}
          value={dataComment.email}
          onChange={(e) => {
            setDataComment({ ...dataComment, email: e.target.value });
          }}
          label="Email của bạn"
          helperText={validateForm.helperTextEmail}
        />

        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Thay YOUR_SITE_KEY bằng khóa công khai bạn nhận được từ reCAPTCHA
          onChange={(value) => setCaptchaValue(value)}
        />

        <Button
          sx={{
            border: "1px solid #DAE2ED",
            color: "#333",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "1rem",
            fontFamily: "Open Sans",
          }}
          onClick={handleComment}
        >
          Gửi bình luận
        </Button>
      </Stack>
    </React.Fragment>
  );
}
