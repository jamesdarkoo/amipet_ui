import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

const CardPet = ({ name, image, style, gender, children }) => {
  const classes = useStyles(style);

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.containerAvatar}>
            <Avatar alt={name} src={image} className={classes.large} />
            <Typography
              className={classes.name}
              color="textSecondary"
              component="h2"
              variant="h3"
              gutterBottom
            >
              {name}
              <FontAwesomeIcon
                icon={
                  gender === 'macho' ? faMars : gender === 'hembra' && faVenus
                }
              />
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button className={classes.button}>ver</Button>
          {children}
        </CardActions>
      </Card>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ root = {} }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: 210,
    minWidth: 135,
    ...(typeof root === 'function' ? root(theme) : root),
  }),
  name: {
    margin: '10px 0',
    '& > svg': {
      marginLeft: 10,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  containerItems: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.yellow,
    color: theme.palette.secondary.light,
    padding: 4,
    width: '60%',
    margin: 'auto',
    marginBottom: 10,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.secondary.yellow,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 2,
    },
  },
  cardActions: {
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
    },
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  containerAvatar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardContent: {
    height: '100%',
    paddingBottom: 0,
  },
}));

CardPet.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default CardPet;
