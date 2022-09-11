import React from 'react';
import LoginBtnSubmit from './LoginBtnSubmit';
import EditPassword from '../EditProfile/EditPassword';
import TextField from '@material-ui/core/TextField';
import LoginContainer from './LoginContainer';
import LoginBtn from './LoginBtn';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '../EditProfile/Icon';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme) => ({
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
    'color': (props) =>
      props.color === 'red'
        ? `${theme.palette.secondary.facebook}`
        : `${theme.palette.secondary.google}`,
    'margin': theme.spacing(1, 0),
    'width': '100%',
    'border': (props) =>
      props.color === 'red'
        ? `1px solid ${theme.palette.secondary.facebook}`
        : `1px solid ${theme.palette.secondary.google} `,
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
}));

function LoginBtnIcon(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return (
    <Button className={classes.LoginBtnIcon} {...other}>
      {props.icon}registrarse {props.name}
    </Button>
  );
}

LoginBtnIcon.propTypes = {
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

export default function LoginBtnCreate() {
  const classes = useStyles();
  return (
    <LoginContainer>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          size="small"
          className={classes.input}
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          autoComplete="name"
        />
        <TextField
          size="small"
          className={classes.input}
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Correo electronico"
          name="email"
          autoComplete="email"
        />
        <EditPassword label="Contraseña" width={80} />
        <div className={classes.LoginCreateBtns}>
          <LoginBtnIcon
            name="con facebook"
            color="red"
            icon={<Icon icon="fab fa-facebook-f" />}
          />
          <LoginBtnIcon
            name="con google"
            color="blue"
            icon={<Icon icon="fab fa-google" />}
          />
        </div>
        <LoginBtnSubmit name="Registrarse" />
      </form>
      <Link to="/sign-in" className={classes.Link}>
        <LoginBtn name="Ingresa con tu cuenta" />
      </Link>
    </LoginContainer>
  );
}
