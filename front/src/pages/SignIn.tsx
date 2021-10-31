import {Button, Typography} from "@mui/material";
import {styled} from "@mui/system";
import HeronIcon from "../components/icons/HeronIcon";
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import React from "react";
import styles from "./SignIn.module.scss"

export const SignIn: React.FC = (): React.ReactElement => {
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
                    <Typography variant="h4" className={styles.loginTitle}>Хочешь постоять, как цапля?</Typography>
                    <Typography>
                        <b>Начни курлыкать прямо сейчас!</b>
                    </Typography>
                    <br/>
                    <div className={styles.buttonsBlock}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Зарегистрироваться
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                        >
                            Войти
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
