import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  LoginBtnCreate: {
    'backgroundColor': theme.palette.secondary.main,
    'color': theme.palette.secondary.light,
    'marginTop': theme.spacing(2),
    'textTransform': 'none',
    'borderRadius': '8px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    'padding': theme.spacing(1),
  },
}));

export default function LoginBtnSubmit(props) {
  const classes = useStyles();

  return (
    <Button type="submit" fullWidth color="secondary" variant="contained" className={classes.LoginBtnCreate}>
      {props.name}
    </Button>
  );
}
