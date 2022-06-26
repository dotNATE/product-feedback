import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(173, 31, 234)',
    },
    secondary: {
      main: 'rgb(58, 67, 116)',
    },
  },
  typography: {
    fontFamily: [
      'Jost',
      'sans-serif',
    ].join(', '),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '700',
        },
      },
    },
  }
};

export default lightThemeOptions;