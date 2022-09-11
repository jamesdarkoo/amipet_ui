import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  LoginBtnCreate: {
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
}));

export default function LoginBtn(props) {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      color="secondary"
      variant="contained"
      className={classes.LoginBtnCreate}
    >
      {props.name}
    </Button>
  );
}
