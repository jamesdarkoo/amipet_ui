import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuButton from './MenuButton';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
  },
  grow: {
    flexGrow: 1,
  },
  style: {
    justifyContent: 'space-between',
    minHeight: 60,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));

export default function Navbar({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.style}>
          <MenuButton />
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}
