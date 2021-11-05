import {Button, FormControl, FormGroup, TextField, Typography} from "@mui/material";
import HeronIcon from "../components/icons/HeronIcon";
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import React, {useState} from "react";
import styles from "./SignIn.module.scss"
import {ModalBlock} from "../components/Dialog/ModalBlock";
import {theme} from "../theme";

export const SignIn: React.FC = (): React.ReactElement => {

    const [modalVisible, setModalVisible] = useState<'signIn' | 'signUp'>()

    const handleOpenSignIn = (): void =>setModalVisible('signIn')

    const handleOpenSignUp = (): void =>setModalVisible('signUp')

    const handleModalClose = (): void => setModalVisible(undefined)

    return (
        <div className={styles.wrapper}>
            <section className={styles.leftBlock}>
                <ul className={styles.leftBlockListInfo}>
                    <li>
                        <Typography variant="h6">
                            <EmojiPeopleRoundedIcon className={styles.leftBlockIcon}/>
                            Братишка! Братишка!
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6">
                            <BedRoundedIcon className={styles.leftBlockIcon}/>
                            Как поспал, братишка?
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6">
                            <EmojiFoodBeverageIcon className={styles.leftBlockIcon}/>
                            Проголодался наверное, братишка?
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={styles.loginBlock}>
                <div>
                    <HeronIcon width={100} height={100}/>
                    <Typography variant="h4">
                        Хочешь постоять, как цапля?
                    </Typography>
                    <Typography>
                        <b>Начни курлыкать прямо сейчас!</b>
                    </Typography>
                    <br/>
                    <div className={styles.buttonsBlock}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOpenSignUp}
                        >
                            Зарегистрироваться
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleOpenSignIn}
                        >
                            Войти
                        </Button>
                        <ModalBlock
                            title='Вход в kurlyk.ru'
                            visible={modalVisible === 'signIn'}
                            onClose={handleModalClose}
                        >
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        id="email"
                                        label="E-mail"
                                        type="email"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        style={{
                                            marginBottom: 18,
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        id="password"
                                        label="Пароль"
                                        type="password"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        style={{
                                            marginBottom: 18,
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth>
                                        Войти
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </ModalBlock>
                        <ModalBlock
                            title='Регистрируйся, братишка!'
                            visible={modalVisible === 'signUp'}
                            onClose={handleModalClose}
                        >
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        id="name"
                                        label="Имя"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        style={{
                                            marginBottom: theme.spacing(5),
                                        }}
                                    />
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        id="email"
                                        label="E-mail"
                                        type="email"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        style={{
                                            marginBottom: theme.spacing(5),
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        id="password"
                                        label="Пароль"
                                        type="password"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        style={{
                                            marginBottom: theme.spacing(5),
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth>
                                        Войти
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </ModalBlock>
                    </div>
                </div>
            </section>
        </div>
    );
};
