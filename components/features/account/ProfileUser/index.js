import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { makeStyles } from '@material-ui/core/styles';

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
  container: {
    display: 'flex',
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
}));

const ProfileUser = (props) => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.root}>
        <div className={classes.container}>
          <ProfileHeader {...props} />
        </div>
      </div>
    </main>
  );
};

export default ProfileUser;
