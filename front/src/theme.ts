import type {} from '@material-ui/lab/themeAugmentation';
import { red } from "@mui/material/colors";
import {createTheme, IThemeOptions} from "@mui/material/styles";
import {ThemeOptions} from "@mui/material";

declare module '@mui/material/styles' {
  export interface IThemeOptions extends ThemeOptions {
    [key: string]: any
  }
}

const themeSettings = {
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Helvetica Neue',
      'sans-serif',
    ]
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#14171a',
    },
    action: {
      disabledBackground: 'rgb(153 216 255)',
      disabled: '#fff',
    },
    shadows: [],
  }
}

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40,
        fontWeight: 700,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      outlinedPrimary: {
        borderColor: 'rgb(29, 161, 243)',
      }
    },
  },
  MuiTypography: {
    styleOverrides: {
      h4: {
        fontSize: 32,
        fontWeight: 800,
        marginTop: 20,
        marginBottom: 45,
      },
      h6: {
        fontWeight: 700,
        fontSize: 20,
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)',
      }
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 15,
      }
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        marginBottom: 8,
      }
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        borderBottom: '1px solid rgb(204, 214, 221)',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 800,
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    }
  },
}

export const theme = createTheme({ themeSettings, components } as IThemeOptions)
