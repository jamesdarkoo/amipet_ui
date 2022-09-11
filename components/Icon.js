import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 20,
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 15,
    },
  },
}));

const Icon = (props) => {
  const classes = useStyles();
  return <i className={`${props.icon} ${classes.root}`} />;
};

export default Icon;
