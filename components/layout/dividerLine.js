import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography, Divider } from '@material-ui/core';

const DividerLine = ({ title, styles, icon }) => {
  const classes = useStyles(styles);
  return (
    <>
      <div className={classes.root}>
        <Typography
          component="h2"
          variant="h2"
          className={classes.titleDescription}
        >
          {title}
          {icon && <FontAwesomeIcon icon={icon} />}
        </Typography>
        <Divider className={classes.divider} />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ root = {} }) => ({
    width: '100%',
    '& h2': {
      textAlign: 'center',
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    ...(typeof root === 'function' ? root(theme) : root),
  }),
  divider: ({ divider = {} }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: 2,
    width: '40%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    ...(typeof divider === 'function' ? divider(theme) : divider),
  }),
  titleDescription: {
    '& svg': {
      color: theme.palette.secondary.yellow,
      marginLeft: theme.spacing(1),
    },
  },
}));

DividerLine.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default DividerLine;
