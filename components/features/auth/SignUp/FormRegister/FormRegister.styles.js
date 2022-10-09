import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  LoginBtnCreate: {
    'backgroundColor': 'transparent',
    'borderRadius': '8px',
    'border': '1px solid',
    'color': theme.palette.secondary.main,
    'padding': theme.spacing(2),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  form: {
    'width': '100%',
    '& .MuiFormControl-root': {
      marginBottom: theme.spacing(2),
    },
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
  input: {
    'marginTop': 'initial',
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
  },
  LoginBtnIcon: {
    'backgroundColor': 'transparent',
    'padding': theme.spacing(1),
    'color': (props) => (props.color === 'red' ? `${theme.palette.secondary.facebook}` : `${theme.palette.secondary.google}`),
    'margin': theme.spacing(1, 0),
    'width': '100%',
    'border': (props) => (props.color === 'red' ? `1px solid ${theme.palette.secondary.facebook}` : `1px solid ${theme.palette.secondary.google} `),
    'textTransform': 'capitalize',
    'borderRadius': '8px',
    'boxShadow': 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiButton-label': {
      width: '70%',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        width: '80%',
        justifyContent: 'space-around',
      },
    },
  },
  Link: {
    textDecoration: 'none',
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  BtnSubmit: {
    'backgroundColor': 'transparent',
    'borderRadius': '8px',
    'color': theme.palette.secondary.main,
    'padding': theme.spacing(1),
    'textTransform': 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.light,
    },
  },
  IconFontawesome: {
    marginLeft: 20,
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 15
    }
  }
}));
