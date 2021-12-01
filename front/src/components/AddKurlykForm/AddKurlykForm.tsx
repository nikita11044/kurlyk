import React from "react"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {Avatar, Button, IconButton, Paper, TextareaAutosize} from "@mui/material";
import styles from './AddKurlykForm.module.scss'

export const AddKurlykForm: React.FC = (): React.ReactElement => {
    return <Paper>
        <div className={styles.formWrapper}>
            <div className={styles.formBody}>
                <Avatar/>
                <TextareaAutosize
                    placeholder="Что происходит, братишка?"
                />
            </div>
            <div className={styles.formFooter}>
                <div>
                    <IconButton>
                        <ImageOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <ImageOutlinedIcon/>
                    </IconButton>
                </div>
                <Button variant="contained">
                    Курлыкнуть
                </Button>
            </div>
        </div>
    </Paper>
}
