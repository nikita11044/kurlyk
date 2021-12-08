import React from 'react'
import {styled} from "@mui/styles";
import {TextField} from "@mui/material";

export const SearchField = styled(TextField)({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#e6ecf0',
            padding: 0,
            paddingLeft: 15,
            '&. Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {borderWidth: 1}
            }
        }
    }
})
