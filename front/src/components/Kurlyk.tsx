import React from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { styled } from "@mui/styles";
import { User } from "../types";

type KurlykProps = {
  text: string;
  user: User;
};

const KurlykContentWrapper = styled(Paper)(({theme}) => ({
  padding: "10px 15px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(245, 248, 250)",
  },
//   [theme.breakpoints.down('lg')]: {
//     ".kurlykText": {
//       paddingLeft: "35px",
//     },
//   },
}));

export const Kurlyk: React.FC<KurlykProps> = ({
  text,
  user,
}): React.ReactElement => {
  return (
    <KurlykContentWrapper square variant="outlined">
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar alt="Аватар пользователя" src={user.avatarUrl} />
        </Grid>
        <Grid className="kurlykText" item xs={11}>
          <Typography>
            <b>{user.fullName}</b>
            <span style={{ color: "#9e9e9e" }}>@{user.userName}</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <IconButton>
                <ChatBubbleOutlineIcon fontSize="small" />
              </IconButton>
              <span>1</span>
            </Grid>
            <Grid item xs={3}>
              <IconButton>
                <RepeatOutlinedIcon fontSize="small" />
              </IconButton>
              <span>1</span>
            </Grid>
            <Grid item xs={3}>
              <IconButton>
                <FavoriteBorderOutlinedIcon fontSize="small" />
              </IconButton>
              <span>1</span>
            </Grid>
            <Grid item xs={3}>
              <IconButton>
                <FileUploadOutlinedIcon fontSize="small" />
              </IconButton>
              <span>1</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </KurlykContentWrapper>
  );
};
