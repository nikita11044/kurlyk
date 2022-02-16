import {InputBase} from '@mui/material';
import {styled} from "@mui/material/styles";

export const SearchField = styled(InputBase)(() => ({
    borderRadius: 30,
    backgroundColor: '#e6ecf0',
    padding: '14px',
    border: '1px solid transparent',
    '&.Mui-focused': {
        border: '1px solid rgb(29, 161, 242)',
        backgroundColor: '#fff',
    }
}))
