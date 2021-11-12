import React from 'react'
import styles from "./Home.module.scss"
import {Container, Grid, InputBase, Paper, Typography} from "@mui/material";
import {styled} from "@mui/styles";
import {Kurlyk} from "../../components/Kurlyk";
import {SideBar} from "../../components/SideBar/SideBar";

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
                    <SideBar/>
                </Grid>
                <Grid item sm={8} md={6}>
                    <KurlykPaper square variant='outlined'>
                        <Paper square variant='outlined'>
                            <Typography variant='h6'>
                                Главная
                            </Typography>
                        </Paper>
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
                    </KurlykPaper>
                </Grid>
                <Grid item sm={3} md={3}>
                    <InputBase className={styles.searchField} fullWidth placeholder='Поиск по kurlyk.ru'/>
                </Grid>
            </Grid>
        </Container>
    </section>
}
