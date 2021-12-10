import React from 'react'
import {styled} from "@mui/styles";
import {InputBase} from '@mui/material';

export const SearchField = styled(InputBase)(() => ({
    '& input': {
        borderRadius: 30,
        backgroundColor: '#e6ecf0',
        padding: '14px',
        border: '1px solid transparent',
        '&:focus': {
            border: '1px solid rgb(29, 161, 242)',
            backgroundColor: '#fff',
        }
    },
}))
