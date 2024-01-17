import React, { useState } from "react";
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
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      if (validateForm()) {
        setOpen(false);
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
          <DialogTitle>Hi 👋!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Nếu có bất kỳ câu hỏi, thắc mắc về bất cứ vấn đề hi vọng🌟 bạn sẽ
              đóng góp để Chung ngày càng hoàn thiện hơn nữa nhé🔥.<br></br>{" "}
              Trân trọng cảm ơn, biết ơn 😇🍀. Chúc bạn có một ngày tốt lành🐧
            </DialogContentText>
            <CustomTextField
              autoFocus={true}
              margin="dense"
              id="email"
              label="Email của bạn"
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
              maxRows={5}
              length={100}
              error={contentError}
              helperText={
                contentError ? "Nội dung không hợp lệ" : "Tối đa 500 ký tự"
              }
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </DialogContent>
          <DialogActions>
            <ButtonCustom
              btnText="Huỷ bỏ"
              onClick={() => {
                setEmail("");
                setContent("");
                setOpen(false);
                setEmailError(false);
                setContentError(false);
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
