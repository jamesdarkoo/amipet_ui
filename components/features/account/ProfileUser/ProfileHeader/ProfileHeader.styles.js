import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  small: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: '4em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'initial',
      marginBottom: theme.spacing(3),
    },
  },
  info: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  HeaderName: {
    'display': 'flex',
    'alignItems': 'center',
    'marginBottom': theme.spacing(2.5),
    'marginLeft': '1em',
    '& .MuiButtonBase-root': {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },
    '& .MuiButton-label': {
      textTransform: 'none',
    },
  },
  HeaderNameUser: {
    color: theme.palette.secondary.dark,
    textTransform: 'capitalize',
    fontWeight: '600',
    margin: 'initial',
    marginRight: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: '1em',
    },
  },
  Ul: {
    'listStyle': 'none',
    'margin': 'initial',
    'marginBottom': theme.spacing(2.5),
    'padding': 'initial',
    'display': 'flex',
    '&primero': {
      marginLeft: 0,
    },
    '& li': {
      'margin': '0 1em',
      'display': 'flex',
      '& span': {
        color: theme.palette.secondary.dark,
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },
    },
  },
  description: {
    'marginLeft': '1em',
    '& p': {
      color: theme.palette.secondary.dark,
      width: '70%',
      margin: 'initial',
      fontWeight: '600',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
  Btns: {
    color: theme.palette.secondary.dark,
  },
}));
