import React from 'react'
import styles from "./Home.module.scss"
import {Container, Grid, InputAdornment, Paper, Typography} from "@mui/material";
import {styled} from "@mui/styles";
import {Kurlyk} from "../../components/Kurlyk";
import {SideBar} from "../../components/SideBar/SideBar";
import {AddKurlykForm} from "../../components/AddKurlykForm/AddKurlykForm";
import {TagsBlock} from "../../components/TagsBlock";
import {SearchField} from "../../components/SearchField";
import SearchIcon from '@mui/icons-material/Search';

const KurlykPaper = styled(Paper)({
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
    '& div': {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
    }
})

export const Home: React.FC = (): React.ReactElement => {
    return <section>
        <Container className={styles.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <div className={styles.leftSideWrapper}>
                        <SideBar/>
                    </div>
                </Grid>
                <Grid item sm={8} md={6}>
                    <KurlykPaper square variant='outlined'>
                        <Paper square variant='outlined'>
                            <Typography variant='h6'>
                                Главная
                            </Typography>
                        </Paper>
                        <AddKurlykForm/>
                        {[
                            ...new Array(20).fill(
                                <Kurlyk
                                    text={'Тут будет какой-нибудь текст'}
                                    user={{
                                        fullName: 'Pahom',
                                        userName: 'poyehavshiy',
                                        avatarUrl: 'https://cs9.pikabu.ru/post_img/2020/03/17/9/1584456163198879176.jpg'
                                    }}
                                />
                            )
                        ]}
                    </KurlykPaper>
                </Grid>
                <Grid item sm={3} md={3}>
                    <div className={styles.rightSideWrapper}>
                        <SearchField
                            fullWidth
                            placeholder='Поиск по kurlyk.ru'
                            startAdornment={
                                <InputAdornment position='start'>
                                    <SearchIcon/>
                                </InputAdornment>
                            }/>
                        <TagsBlock/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </section>
}
