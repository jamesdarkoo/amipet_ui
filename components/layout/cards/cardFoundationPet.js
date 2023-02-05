import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const CardFoundationPet = ({ backgroundUrl }) => {
  const props = { backgroundUrl };
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Button className={classes.button}>ver</Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    height: 380,
    // width: 420,
    backgroundImage: `url(${props.backgroundUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no repeat',
    backgroundSize: 'cover',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 300,
    },
  }),
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    textTransform: 'capitalize',
    backgroundColor: theme.palette.secondary.yellow,
    padding: 3,
    width: 100,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.secondary.yellow,
    },
  },
}));

export default CardFoundationPet;
