import { createTheme } from '@material-ui/core/styles';
const palette = {
  primary: {
    main: '#05C089',
    dark: '#14171A',
    light: '#fdf9f8',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#1DA1F2',
    dark: '#52575D',
    light: '#FFFFFF',
    yellow: '#FFB617',
    facebook: '#3b5998',
    google: '#db4a39',
  },
  background: {
    default: '#FFFFFF',
  },
};

const backgroundColor = {
  border: 'rgba(0, 0, 0, 0.15)',
  background: {
    main: '#f8f9fb',
  },
};

const theme = createTheme({
  default: '#fff',
  typography: {
    fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontWeight: 300,
      fontSize: 18,
    },
    body2: {
      fontWeight: 300,
      fontSize: 15,
    },
    h2: {
      fontWeight: 600,
      fontSize: 25,
    },
    h3: {
      fontWeight: 600,
      fontSize: 20,
    },
    cameraIcon: {
      size: 40,
    },
  },
  palette,
  backgroundColor,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          color: palette.secondary.dark,
        },
      },
    },
  },
});

export default theme;
