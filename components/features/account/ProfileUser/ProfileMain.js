import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileImages from './ProfileImages';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    padding: theme.spacing(3.7, 2.5),
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '97%',
      padding: theme.spacing(3.7, 0),
    },
  },
}));

export default function ProfileMain() {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.root}>
        <ProfileHeader />
        <Carousel />
        <ProfileImages />
      </div>
    </main>
  );
}
