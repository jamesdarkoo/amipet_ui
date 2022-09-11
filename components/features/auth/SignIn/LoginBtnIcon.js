import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  LoginBtnCreate: {
    'backgroundColor': 'transparent',
    'borderRadius': '8px',
    'marginBottom': theme.spacing(2),
    'border': '1px solid',
    'color': theme.palette.secondary.main,
    'padding': theme.spacing(1.4),
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.light,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

export default function LoginBtnIcon(props) {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      color="secondary"
      variant="contained"
      className={classes.LoginBtnCreate}
    >
      <i className={`${props.icon}`} /> iniciar con {props.name}
    </Button>
  );
}
