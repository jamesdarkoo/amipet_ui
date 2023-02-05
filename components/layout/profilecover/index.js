import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Avatar,
  Paper,
  Grid,
  Hidden,
} from '@material-ui/core';
import { Favorite, FavoriteBorder, StarBorder } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faEnvelope,
  faLocationArrow,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import SocialNetWork from '@/components/Shared/socialnetwork';

const HeaderCover = ({
  nameProfile,
  name,
  imageProfile,
  distance,
  rating,
  handleMenuClose,
  anchorEl,
  handleProfileMenuOpen,
  favorite,
  onChange,
  isMobile,
  style,
}) => {
  const classes = useStyles(style);
  const [follow, setFollow] = React.useState(false);

  const RenderIcon = () => (
    <span>
      siguiendo 
      {' '}
      <FontAwesomeIcon icon={faSmile} />
    </span>
  );

  return (
    <Paper className={classes.root}>
      <Grid
        container
        alignItems="center"
        spacing={2}
        style={{ marginBottom: 10 }}
      >
        <div className={classes.name}>
          <Avatar
            className={classes.avatarSize}
            src={imageProfile}
            alt={name}
          />
          <Typography className={classes.nameText} variant="h2" component="h2">
            {name}
            <FontAwesomeIcon icon={faCertificate} />
          </Typography>
        </div>
        <Hidden only={['md', 'lg', 'xl']}>
          <Grid item xs={12} md={2}>
            <Button variant="outlined" className={[classes.button].join(' ')}>
              Enviar mensaje
            </Button>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={2}>
          <Button
            variant="outlined"
            className={[
              classes.button,
              follow ? classes.buttonOpcionFollowActive : '',
            ].join(' ')}
            onClick={() => setFollow(!follow)}
          >
            {follow ? <RenderIcon /> : 'seguir'}
          </Button>
        </Grid>
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={12} md={2}>
            <Button variant="outlined" className={[classes.button].join(' ')}>
              Editar perfil
            </Button>
          </Grid>
        </Hidden>
      </Grid>
      <Divider className={classes.diviver} />
      <div className={classes.containerReferences}>
        <div className={classes.referencesOptions}>
          <div className={classes.referencesHiddenMobile}>{nameProfile}</div>
          <div
            className={`${classes.referencesItems} ${classes.referencesHiddenMobile}`}
          >
            <IconButton color="secondary" className={classes.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
            <span>Enviar mensaje</span>
          </div>
          <div className={classes.referencesItems}>
            <IconButton
              color="secondary"
              className={classes.referencesIconDistance}
            >
              <FontAwesomeIcon icon={faLocationArrow} />
            </IconButton>
            {distance}
            <span>km</span>
          </div>
          <div className={classes.referencesItemsVetsShowMobile}>
            <span>{nameProfile}</span>
          </div>
          <div className={classes.rating}>
            <Rating
              name="calificacion"
              value={rating}
              precision={0.5}
              max={isMobile <= 720 ? 1 : 5}
              emptyIcon={<StarBorder fontSize="inherit" />}
              readOnly
            />
            <span className={`${classes.ratingName}`}>
              {rating} 
              {' '}
              {rating === 1 ? 'opinión' : 'opiniones'}
            </span>
          </div>
        </div>
        <div>
          <IconButton
            className={classes.iconButtonShared}
            color="secondary"
            onClick={handleProfileMenuOpen}
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </IconButton>
          <FormControlLabel
            control={(
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="like-vet"
                onChange={onChange}
                color="primary"
                value={favorite}
                className={classes.buttonIconFavorite}
              />
            )}
          />
        </div>
      </div>
      <SocialNetWork handleClick={handleMenuClose} anchorEl={anchorEl} />
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: -20,
    zIndex: 1,
    position: 'relative',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      width: '100%',
    },
  },
  avatarSize: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
  diviver: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button: {
    width: '100%',
    padding: theme.spacing(0.3),
    textTransform: 'capitalize',
    color: theme.palette.secondary.dark,
  },
  buttonOpcionFollowActive: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  nameText: {
    color: theme.palette.secondary.dark,
    marginLeft: 10,
    fontWeight: '900',
    '& svg': {
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(1.8),
      fontSize: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2.1),
      '& svg': {
        fontSize: theme.spacing(2),
      },
    },
  },
  containerReferences: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2.5)}px ${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      padding: 0,
      marginTop: theme.spacing(0.5),
    },
  },
  referencesItems: {
    display: 'flex',
    marginLeft: theme.spacing(2.5),
    alignItems: 'center',
    '& svg': {
      color: theme.palette.secondary.main,
      fontSize: theme.spacing(2.5),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  referencesOptions: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    color: theme.palette.secondary.dark,
    fontSize: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.6),
      width: '55%',
      margin: 'auto',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1.5),
      width: '100%',
    },
  },
  rating: ({ rating = {} }) => ({
    marginLeft: theme.spacing(2.5),
    alignItems: 'center',
    display: 'flex',
    '& .MuiRating-root': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    ...(typeof rating === 'function' ? rating(theme) : rating),
  }),
  ratingName: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  iconButtonShared: {
    marginRight: theme.spacing(2.5),
    color: theme.palette.secondary.dark,
    '& svg': {
      fontSize: theme.spacing(3),
    },
  },
  buttonIconFavorite: {
    '& .MuiIconButton-label': {
      '& svg': {
        fontSize: theme.spacing(4),
      },
    },
  },
  referencesIconDistance: ({ referencesIconDistance = {} }) => ({
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginRight: theme.spacing(0.5),
    },
    ...(typeof referencesIconDistance === 'function'
      ? referencesIconDistance(theme)
      : referencesIconDistance),
  }),
  icon: ({ icon = {} }) => ({
    ...(typeof icon === 'function' ? icon(theme) : icon),
  }),
  // hide some items on mobile
  referencesHiddenMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  referencesItemsVetsShowMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default HeaderCover;
