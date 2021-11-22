import React from "react";
import styles from "./SideBar.module.scss";
import { Button, IconButton, Typography, useMediaQuery } from "@mui/material";
import HeronIcon from "../icons/HeronIcon";
import { theme } from "../../theme";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { styled } from "@mui/styles";
import { ThemeType } from "../../types";

const KurlykButton = styled(Button)({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
});

export const SideBar: React.FC = (): React.ReactElement => {
  const hidden = useMediaQuery((theme: ThemeType) =>
    theme.breakpoints.down("md")
  );

  return (
    <ul className={styles.sideBarList}>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton style={{ margin: "10px 0" }} aria-label="logo">
            <HeronIcon
              width={38}
              height={38}
              fill={theme.palette.primary.main}
            />
          </IconButton>
        </div>
      </li>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton aria-label="tag" color="primary">
            <TagIcon style={{ fontSize: 32 }} />
          </IconButton>
          {hidden ? null : <Typography variant="h6">Поиск</Typography>}
        </div>
      </li>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton aria-label="notifications" color="primary">
            <NotificationsNoneIcon style={{ fontSize: 32 }} />
          </IconButton>
          {hidden ? null : <Typography variant="h6">Уведомления</Typography>}
        </div>
      </li>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton aria-label="messages" color="primary">
            <MailOutlineIcon style={{ fontSize: 32 }} />
          </IconButton>
          {hidden ? null : <Typography variant="h6">Сообщения</Typography>}
        </div>
      </li>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton aria-label="favourite" color="primary">
            <BookmarkBorderIcon style={{ fontSize: 32 }} />
          </IconButton>
          {hidden ? null : <Typography variant="h6">Закладки</Typography>}
        </div>
      </li>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton aria-label="list" color="primary">
            <ListAltIcon style={{ fontSize: 32 }} />
          </IconButton>
          {hidden ? null : <Typography variant="h6">Список</Typography>}
        </div>
      </li>
      <li className={styles.sideBarItem}>
        <div>
          <IconButton aria-label="profile" color="primary">
            <PersonOutlineIcon style={{ fontSize: 32 }} />
          </IconButton>
          {hidden ? null : <Typography variant="h6">Профиль</Typography>}
        </div>
      </li>
      <KurlykButton variant="contained" color="primary" fullWidth>
        Курлыкнуть
      </KurlykButton>
    </ul>
  );
};
