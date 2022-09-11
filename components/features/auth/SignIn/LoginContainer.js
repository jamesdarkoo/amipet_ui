import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  LoginContainer: {
    maxWidth: '30%',
    borderRadius: 10,
    [theme.breakpoints.down('md')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '95%',
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    height: '91vh',
    padding: '20em 0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none',
      height: '35em',
    },
  },
}));

export default function LoginContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <Grid
        item
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.LoginContainer}
      >
        <div className={classes.paper}>{props.children}</div>
      </Grid>
    </div>
  );
}
