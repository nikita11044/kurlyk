import React from 'react'
import {InputAdornment, InputBase} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const searchFieldTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    backgroundColor: '#e6ecf0',
                    padding: '14px',
                    border: '1px solid transparent',
                },
                focused: {
                    border: '1px solid rgb(29, 161, 242)',
                    backgroundColor: '#fff',
                }
            }
        }
    }
})

export const SearchField = () => (
        <ThemeProvider theme={searchFieldTheme}>
            <InputBase
                fullWidth
                placeholder='Поиск по kurlyk.ru'
                    startAdornment={
                       <InputAdornment position='start'>
                           <SearchIcon/>
                       </InputAdornment>
                    }/>
        </ThemeProvider>
    )

// export const SearchField = styled(InputBase)(() => ({
//     '& input': {
//         borderRadius: 30,
//         backgroundColor: '#e6ecf0',
//         padding: '14px',
//         border: '1px solid transparent',
//         '&:focus': {
//             border: '1px solid rgb(29, 161, 242)',
//             backgroundColor: '#fff',
//         }
//     },
// }))
