import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  createProfile: {
    display: 'none',
    fontWeight: '600',
    color: theme.palette.secondary.dark,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'inherit',
    },
  },
}));

export default function Title(props) {
  const classes = useStyles();

  return (
    <Typography component="h3" variant="h5" className={classes.createProfile}>
      {props.title}
    </Typography>
  );
}
