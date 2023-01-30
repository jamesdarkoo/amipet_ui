import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const ButtonDotted = (props) => {
  const classes = useStyles(props.styles);
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.container}>
        <div className={classes.description}>
          <p className={classes.icon}>{props.icon}</p>
          {props.description}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ root = {} }) => ({
    width: '50%',
    // margin: '35px auto 0',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
    borderStyle: 'dotted',
    cursor: 'pointer',
    color: theme.palette.secondary.dark,
    '&:hover': {
      borderColor: `${theme.palette.secondary.yellow}`,
    },
    ...(typeof root === 'function' ? root(theme) : root),
  }),
  container: ({ container = {} }) => ({
    display: 'flex',
    padding: '0px 6px',
    justifyContent: 'center',
    '&:focus': {
      outline: 'initial',
    },
    ...(typeof container === 'function' ? container(theme) : container),
  }),
  description: ({ description = {} }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    ...(typeof description === 'function' ? description(theme) : description),
  }),
  icon: ({ icon = {} }) => ({
    margin: '0 6px',
    ...(typeof icon === 'function' ? icon(theme) : icon),
  }),
}));

ButtonDotted.propTypes = {
  icon: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonDotted;
