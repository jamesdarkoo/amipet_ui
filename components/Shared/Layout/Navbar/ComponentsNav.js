import React from 'react';
import { IconButton } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import SearchBox from './SearchBox';
import IconLogin from './IconLogin';

const useStyles = makeStyles((theme) => ({
  iconSearch: {
    display: 'none',
    [theme.breakpoints.down('480')]: {
      display: 'flex',
      padding: 8,
    },
  },
  search: {
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    'width': 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      margin: 'auto',
    },
    [theme.breakpoints.down('480')]: {
      display: 'none',
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default function ComponentsNav(props) {
  const user = useSelector((state) => state.auth.user);
  const classes = useStyles();

  return (
    <>
      <IconButton aria-label="search" color="inherit" className={classes.iconSearch}>
        <Search />
      </IconButton>
      <Logo />
      <div className={classes.search}>
        <SearchBox />
      </div>
      {user && <div className={classes.icons}>
        <IconLogin />
      </div>
      }
    </>
  );
}
