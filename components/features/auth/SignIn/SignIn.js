import React from 'react';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LoginBtn from './LoginBtn';
import LoginBtnSubmit from './LoginBtnSubmit';
import EditPassword from '../../../EditPassword';

const useStyles = makeStyles((theme) => ({
  form: {
    'width': '100%',
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
    marginTop: 'initial',
    marginBottom: theme.spacing(2),
  },
  LoginText: {
    'textAlign': 'center',
    'margin': theme.spacing(2, 0),
    '&  a': {
      color: theme.palette.primary.dark,
    },
  },
  Link: {
    textDecoration: 'none',
    display: 'flex',
    width: '100%',
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          className={classes.input}
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          id="email"
          label="Correo electronico"
          name="email"
          autoComplete="email"
        />
        <EditPassword label="Contraseña" width={80} />
        <LoginBtnSubmit name="Ingresar" />
        <Grid container>
          <Grid item xs className={classes.LoginText}>
            <Link href="#">
              <a>No recuerdas tu contraseña?</a>
            </Link>
          </Grid>
        </Grid>
      </form>
      <Link href="/register" className={classes.Link}>
        <a>
          <LoginBtn name="Crear cuenta" />
        </a>
      </Link>
    </>
  );
}
