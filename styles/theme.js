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
    opacity: 'rgba(82, 87, 93, 0.30)',
    blueOpacity: 'rgba(29, 161, 242, 0.30)',
    greenOpacity: 'rgba(5, 192, 137, 0.8)',
    yellowOpacity: 'rgba(255, 182, 23, 0.30)',
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
      color: palette.secondary.dark,
    },
    body2: {
      fontWeight: 500,
      fontSize: 15,
      color: palette.secondary.dark,
    },
    h2: {
      fontWeight: 800,
      color: palette.secondary.dark,
      fontSize: 20,
    },
    h3: {
      fontWeight: 500,
      color: palette.secondary.dark,
      fontSize: '1.1rem',
    },
    h4: {
      fontWeight: 300,
      fontSize: 15,
      color: palette.secondary.dark,
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
        h2: {
          margin: 0,
        },
        h3: {
          fontWeight: 400,
          fontSize: 18,
          margin: 0,
        },
        p: {
          margin: 0,
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#1DA1F2',
        top: -14,
        position: 'relative',
        '@media only screen and (max-width: 600px)': {
          top: -30,
          fontSize: '10px !important',
          padding: '2px !important',
        },
      },
    },
  },
});

export default theme;
