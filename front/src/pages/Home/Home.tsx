import React from 'react'
import styles from "./Home.module.scss"
import {Container, Grid, IconButton, InputBase, Paper, Typography} from "@mui/material";
import HeronIcon from "../../components/icons/HeronIcon";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {theme} from "../../theme";
import {styled} from "@mui/styles";

const KurlykPaper = styled(Paper)({
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
})

const KurlykHeader = styled(Paper)({
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: '10px 15px'
})

export const Home: React.FC = (): React.ReactElement => {
    return <section>
        <Container className={styles.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <ul className={styles.sideMenuList}>
                        <li className={styles.sideMenuItem}>
                            <IconButton style={{margin: '10px 0'}} aria-label='logo'>
                                <HeronIcon width={38} height={38} fill={theme.palette.primary.main}/>
                            </IconButton>
                        </li>
                        <li className={styles.sideMenuItem}>
                            <IconButton aria-label='tag' color='primary'>
                                <TagIcon style={{fontSize: 32}}/>
                            </IconButton>
                            <Typography variant="h6">Поиск</Typography>
                        </li>
                        <li className={styles.sideMenuItem}>
                            <IconButton aria-label='notifications' color='primary'>
                                <NotificationsNoneIcon style={{fontSize: 32}}/>
                            </IconButton>
                            <Typography variant="h6">Уведомления</Typography>
                        </li>
                        <li className={styles.sideMenuItem}>
                            <IconButton aria-label='messages' color='primary'>
                                <MailOutlineIcon style={{fontSize: 32}}/>
                            </IconButton>
                            <Typography variant="h6">Сообщения</Typography>
                        </li>
                        <li className={styles.sideMenuItem}>
                            <IconButton aria-label='favourite' color='primary'>
                                <BookmarkBorderIcon style={{fontSize: 32}}/>
                            </IconButton>
                            <Typography variant="h6">Закладки</Typography>
                        </li>
                        <li className={styles.sideMenuItem}>
                            <IconButton aria-label='list' color='primary'>
                                <ListAltIcon style={{fontSize: 32}}/>
                            </IconButton>
                            <Typography variant="h6">Список</Typography>
                        </li>
                        <li className={styles.sideMenuItem}>
                            <IconButton aria-label='profile' color='primary'>
                                <PersonOutlineIcon style={{fontSize: 32}}/>
                            </IconButton>
                            <Typography variant="h6">Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item sm={8} md={6}>
                    <KurlykPaper square variant='outlined'>
                        <KurlykHeader square variant='outlined'>
                            <Typography variant='h6'>
                                Главная
                            </Typography>
                        </KurlykHeader>
                    </KurlykPaper>
                </Grid>
                <Grid item sm={3} md={3}>
                    <InputBase className={styles.searchField} fullWidth placeholder='Поиск по kurlyk.ru'/>
                </Grid>
            </Grid>
        </Container>
    </section>
}
