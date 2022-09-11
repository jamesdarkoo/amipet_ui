import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    height: '38px',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 7,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBox() {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase className={classes.input} placeholder="Buscar" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
}
