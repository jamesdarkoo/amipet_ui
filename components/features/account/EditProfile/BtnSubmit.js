import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    'color': theme.palette.secondary.light,
    'backgroundColor': theme.palette.secondary.main,
    'margin': theme.spacing(3, 0),
    'width': '45%',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default function BtnSubmit() {
  const classes = useStyles();

  return (
    <>
      <Button type="submit" fullWidth variant="contained" className={classes.btn}>
        GUARDAR
      </Button>
    </>
  );
}
