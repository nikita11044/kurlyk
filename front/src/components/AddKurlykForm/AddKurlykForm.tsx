import React, {useState} from "react"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import {Avatar, Box, Button, CircularProgress, IconButton, TextareaAutosize, Typography} from "@mui/material";
import styles from './AddKurlykForm.module.scss'

type AddKurlykFormPropsType = {
    maxRows?: number
}


export const AddKurlykForm: React.FC<AddKurlykFormPropsType> = ({maxRows}): React.ReactElement => {

    const [text, setText] = useState<string>('')
    const calculateTextPercentage = Math.round((text.length / 280) * 100)
    const isMaxLength = text.length > 280

    const handleChangeTextValue = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    return <div className={styles.formWrapper}>
        <div className={styles.formBody}>
            <Avatar src={'https://cs9.pikabu.ru/post_img/2020/03/17/9/1584456163198879176.jpg'} alt={'User avatar'}/>
            <TextareaAutosize
                className={styles.formTextArea}
                placeholder="Что происходит, братишка?"
                value={text}
                onChange={handleChangeTextValue}
                maxRows={maxRows}
            />
        </div>
        <div className={styles.formFooter}>
            <div className={styles.formFooterLeft}>
                <IconButton>
                    <ImageOutlinedIcon color={'primary'}/>
                </IconButton>
                <IconButton>
                    <EmojiEmotionsOutlinedIcon color={'primary'}/>
                </IconButton>
            </div>
            <div className={styles.formFooterRight}>
                <div className={styles.circularProgress}>
                    {
                        text &&
                        <Box sx={{position: 'relative', display: 'inline-flex'}}>
                            <CircularProgress
                                variant={'determinate'}
                                size={35}
                                thickness={3.5}
                                value={isMaxLength ? 100 : calculateTextPercentage}
                                style={isMaxLength ? {color: 'red'} : {}}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                >{isMaxLength ? (280 - text.length) : text.length}</Typography>
                            </Box>
                        </Box>
                    }
                </div>
                <Button variant="contained" disabled={isMaxLength}>
                    Курлыкнуть
                </Button>
            </div>
        </div>
    </div>

}
