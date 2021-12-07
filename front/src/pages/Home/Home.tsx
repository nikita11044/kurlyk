import React from 'react'
import styles from "./Home.module.scss"
import {Container, Divider, Grid, InputBase, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {styled} from "@mui/styles";
import {Kurlyk} from "../../components/Kurlyk";
import {SideBar} from "../../components/SideBar/SideBar";
import {AddKurlykForm} from "../../components/AddKurlykForm/AddKurlykForm";
import {List} from "@mui/icons-material";

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
                                    text={'Ну, «Три семерки» выпил, блядь… Ну, бутылку… С одной дурой… Ну, а потом\n' +
                                    '                    поебалися! Быстро так, мы десять минут всего ебалися-то… А у меня потом, блядь,\n' +
                                    '                    малафья сразу полилася… Много малафьи налилось, я, ну, когда дрочил просто…'}
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
                        <InputBase className={styles.searchField} fullWidth placeholder='Поиск по kurlyk.ru'/>
                        <Paper className={styles.rightSideListBlock}>
                            <Paper className={styles.rightSideListHeader}>
                                <b>Это надо знать</b>
                            </Paper>
                            <List>
                                <ListItem className={styles.rightSideListHeader}>
                                    <ListItemText
                                        primary={'Москва'}
                                        secondary={
                                            <Typography component={'span'} variant={'body2'}>
                                                Курлыков: 777
                                            </Typography>
                                        }/>
                                </ListItem>
                                <Divider component={'li'}/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </section>
}
