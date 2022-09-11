import React from 'react';
import ProfileContainer from './ProfileContainer';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BtnFollow from './BtnFollow';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: '4em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'initial',
      marginBottom: theme.spacing(3),
    },
  },
  info: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  HeaderName: {
    'display': 'flex',
    'alignItems': 'center',
    'marginBottom': theme.spacing(2.5),
    'marginLeft': '1em',
    '& .MuiButtonBase-root': {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },
    '& .MuiButton-label': {
      textTransform: 'none',
    },
  },
  HeaderNameUser: {
    color: theme.palette.secondary.dark,
    textTransform: 'capitalize',
    fontWeight: '600',
    margin: 'initial',
    marginRight: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: '1em',
    },
  },
  Ul: {
    'listStyle': 'none',
    'margin': 'initial',
    'marginBottom': theme.spacing(2.5),
    'padding': 'initial',
    'display': 'flex',
    '&primero': {
      marginLeft: 0,
    },
    '& li': {
      'margin': '0 1em',
      'display': 'flex',
      '& span': {
        color: theme.palette.secondary.dark,
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },
    },
  },
  description: {
    'marginLeft': '1em',
    '& p': {
      color: theme.palette.secondary.dark,
      width: '70%',
      margin: 'initial',
      fontWeight: '600',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
}));

export default function ProfileHeader() {
  const classes = useStyles();

  return (
    <ProfileContainer>
      <Avatar
        alt="Remy Sharp"
        src="https://source.unsplash.com/random"
        className={classes.small}
      />
      <div className={classes.info}>
        <div className={classes.HeaderName}>
          <h3 className={classes.HeaderNameUser}>jesica alba</h3>
          <BtnFollow />
        </div>
        <div>
          <ul className={classes.Ul}>
            <li>
              <span>
                <span>4</span>
                Mascotas
              </span>
            </li>
            <Divider orientation="vertical" flexItem />
            <li>
              <span>
                <span>4</span>
                Amigos
              </span>
            </li>
            <Divider orientation="vertical" flexItem />
            <li>
              <span>
                <span>4</span>
                Seguidores
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.description}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type a
          </p>
        </div>
      </div>
    </ProfileContainer>
  );
}
