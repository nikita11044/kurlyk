import React from 'react'
import styles from "./Home.module.scss"
import {Avatar, Container, Grid, IconButton, InputBase, Paper, Typography} from "@mui/material";
import HeronIcon from "../../components/icons/HeronIcon";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {theme} from "../../theme";
import {styled} from "@mui/styles";

const KurlykPaper = styled(Paper)({
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
})

const KurlykContent = styled(Paper)({
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: 'rgb(245, 248, 250)'
    }
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
                        <Paper square variant='outlined'>
                            <Typography variant='h6'>
                                Главная
                            </Typography>
                        </Paper>
                        <KurlykContent square variant='outlined'>
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar
                                        alt='user avatar'
                                        src='https://cs9.pikabu.ru/post_img/2020/03/17/9/1584456163198879176.jpg'
                                    />
                                </Grid>
                                <Grid className={styles.kurlykText} item xs={11}>
                                    <Typography>
                                        <b>Pahom</b>
                                        <span style={{color: '#9e9e9e'}}>@pahom</span>
                                    </Typography>
                                    <Typography variant='body1' gutterBottom>
                                        Ну, «Три семерки» выпил, блядь… Ну, бутылку… С одной дурой… Ну, а потом
                                        поебалися! Быстро так, мы десять минут всего ебалися-то… А у меня потом, блядь,
                                        малафья сразу полилася… Много малафьи налилось, я, ну, когда дрочил просто…
                                    </Typography>
                                    <Grid container spacing={1}>
                                        <Grid item xs={3}>
                                            <IconButton>
                                                <ChatBubbleOutlineIcon fontSize='small'/>
                                            </IconButton>
                                            <span>1</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <IconButton>
                                                <RepeatOutlinedIcon fontSize='small'/>
                                            </IconButton>
                                            <span>1</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <IconButton>
                                                <FavoriteBorderOutlinedIcon fontSize='small'/>
                                            </IconButton>
                                            <span>1</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <IconButton>
                                                <FileUploadOutlinedIcon fontSize='small'/>
                                            </IconButton>
                                            <span>1</span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </KurlykContent>
                    </KurlykPaper>
                </Grid>
                <Grid item sm={3} md={3}>
                    <InputBase className={styles.searchField} fullWidth placeholder='Поиск по kurlyk.ru'/>
                </Grid>
            </Grid>
        </Container>
    </section>
}
