import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, Button } from '@material-ui/core';
import Carousel from '@/components/layout/carousel/carrouselcard';
// import Carousel from '@/components/features/account/ProfileUser/Carousel';
import ImagesModal from 'components/Shared/ImagesModal';
// import { photos } from '../profile-pet/Photos';

export const photos = [
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
  },
];

const Profile = () => {
  const classes = useStyles();
  const [follow, setFollow] = React.useState(false);
  const onClick = () => {
    setFollow(!follow);
  };

  return (
    <main>
      <div className={classes.root}>
        <div className={classes.container}>
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random"
            className={classes.small}
          />
          <div className={classes.info}>
            <div className={classes.headerName}>
              <h3 className={classes.headerNameUser}>jesica alba</h3>
              <Button
                variant="outlined"
                size="small"
                className={classes.buttonFollow}
                onClick={() => onClick()}
              >
                {!follow ? 'seguir' : 'siguiendo'}
              </Button>
            </div>
            <div>
              <ul className={classes.ul}>
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
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type a
              </p>
            </div>
          </div>
        </div>
         <Carousel />
       <div className={classes.images}>
          <ImagesModal photos={photos} number={4} />
        </div>
      </div>
    </main>
  );
};

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
  },
  buttonFollow: {
    color: theme.palette.secondary.dark,
  },
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
  headerName: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2.5),
    marginLeft: '1em',
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
  headerNameUser: {
    color: theme.palette.secondary.dark,
    textTransform: 'capitalize',
    fontWeight: '600',
    margin: 'initial',
    marginRight: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: '1em',
    },
  },
  ul: {
    listStyle: 'none',
    margin: 'initial',
    marginBottom: theme.spacing(2.5),
    padding: 'initial',
    display: 'flex',
    '&primero': {
      marginLeft: 0,
    },
    '& li': {
      margin: '0 1em',
      display: 'flex',
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
    marginLeft: '1em',
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
  images: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}));

export default Profile;
