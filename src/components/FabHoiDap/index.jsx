import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import { styled } from "@mui/system";
import ButtonCustom from "../ButtonCustom";
import baiVietAPI from "../../api/BaiVietAPI";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { FormHelperText } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#D2302C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#D2302C",
  },
});

const withDialog = (WrappedComponent) => {
  return function WithDialog(props) {
    const captchaRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [content, setContent] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState(false);
    const [type, setType] = useState("contribute");
    const handleClickOpen = () => {
      setOpen(true);
    };

    useEffect(() => {
      if (open) {
        setRecaptchaError("");
      }
    }, [open]);

    //call api
    const handleCreateComment = async (
      tokenCaptcha,
      name,
      slug,
      email,
      content,
      type
    ) => {
      const data = {
        tokenCaptcha: tokenCaptcha,
        name: name,
        slug: slug,
        email: email,
        content: content,
        type: type,
      };
      try {
        const response = await baiVietAPI.createComment(data);
        if (response.status === 201) {
          alert(
            "Gửi thành công! Chân thành cảm ơn bạn đã đóng góp ý kiến của mình🍀"
          );
          setOpen(false);
          setEmail("");
          setContent("");
          setName("");
          captchaRef.current.reset();
        } else {
          alert("Gửi thất bại, vui lòng thử lại sau");
        }
      } catch (err) {
        console.log(err);
        alert("Đã xảy ra lỗi, vui lòng thử lại sau");
      } finally {
        captchaRef.current.reset();
      }
    };

    const handleClose = async () => {
      if (validateForm()) {
        const token = captchaRef.current.getValue();
        handleCreateComment(token, name, "", email, content, type, "1");
      }
    };

    const validateForm = () => {
      let isValid = true;

      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setEmailError(true);
        isValid = false;
      } else {
        setEmailError(false);
      }

      if (!content || content.length > 500) {
        setContentError(true);
        isValid = false;
      } else {
        setContentError(false);
      }

      if (!name || !name.length > 0) {
        setNameError(true);
        isValid = false;
      } else {
        setNameError(false);
      }

      return isValid;
    };

    return (
      <React.Fragment>
        <WrappedComponent
          openDialog={handleClickOpen}
          closeDialog={handleClose}
          {...props}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Xin chào 👋!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Nếu có bất kỳ câu hỏi, thắc mắc về bất cứ vấn đề hi vọng🌟 bạn sẽ
              đóng góp để Chung ngày càng hoàn thiện hơn nữa nhé🔥.<br></br>{" "}
              Trân trọng cảm ơn, biết ơn 😇. Chúc bạn có một ngày tốt lành🐧
            </DialogContentText>

            <CustomTextField
              margin="dense"
              id="content"
              label="Tên của bạn"
              type="text"
              fullWidth
              variant="standard"
              error={nameError}
              helperText={nameError ? "Tên không hợp lệ" : ""}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <CustomTextField
              autoFocus={true}
              margin="dense"
              id="email"
              label="Email của bạn (Sẽ được mình giữ bí mật)"
              type="email"
              fullWidth
              variant="standard"
              required
              error={emailError}
              helperText={emailError ? "Email không hợp lệ" : ""}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextField
              margin="dense"
              id="content"
              label="Nội dung của bạn"
              type="text"
              fullWidth
              variant="standard"
              multiline
              length={100}
              error={contentError}
              helperText={
                contentError ? "Nội dung không hợp lệ" : "Tối đa 500 ký tự"
              }
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <ReCAPTCHA
              ref={captchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Thay YOUR_SITE_KEY bằng khóa công khai bạn nhận được từ reCAPTCHA
            />
            <FormHelperText error={recaptchaError ? true : false}>
              {recaptchaError ? "Vui lòng xác nhận reCAPTCHA" : ""}
            </FormHelperText>
          </DialogContent>
          <DialogActions>
            <ButtonCustom
              btnText="Huỷ bỏ"
              onClick={() => {
                setEmail("");
                setContent("");
                setName("");
                setOpen(false);
                setEmailError(false);
                setContentError(false);
                setNameError(false);
              }}
            />

            <ButtonCustom btnText="Gửi" onClick={handleClose} />
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  };
};

const FabHoiDap = ({ openDialog }) => {
  return (
    <Fab
      sx={{
        bgcolor: "#D2302C",
        position: "fixed",
        m: 0,
        top: "auto",
        right: 20,
        bottom: 60,
        left: "auto",
      }}
      aria-label="add"
      onClick={openDialog}
    >
      <ModeCommentRoundedIcon sx={{ color: "#FFF" }} />
    </Fab>
  );
};

export default withDialog(FabHoiDap);
