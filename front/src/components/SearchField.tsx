import React from 'react'
import {styled} from "@mui/styles";
import {TextField} from '@mui/material';

export const SearchField = styled(TextField)(() => ({
    borderRadius: 30,
    backgroundColor: '#e6ecf0',
    '& .Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
            borderWidth: 1,
            borderRadius: 30,
            borderColor: 'rgb(29, 161, 242)'
        },
        '& svg path': {
            fill: 'rgb(29, 161, 242)'
        }
    },
    '& fieldset': {
        borderColor: "transparent",
        borderRadius: 30,
        borderWidth: 1
    },
    '& .MuiOutlinedInput-input': {
        padding: '12px 14px 14px 5px'
    }
}))
