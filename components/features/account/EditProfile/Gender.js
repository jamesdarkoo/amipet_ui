import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

const Gender = ({
  description,
  value1,
  value2,
  icon,
  iconTwo,
  name,
  value,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.group}>
      <FormLabel component="legend" className={classes.gender}>
        {description}:
      </FormLabel>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="gender"
          name={name}
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            value={value1}
            control={<Radio color="primary" />}
            label={value1}
            labelPlacement="start"
          />
          {icon}
          <FormControlLabel
            value={value2}
            control={<Radio color="primary" />}
            labelPlacement="start"
            label={value2}
          />
          {iconTwo}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0),
    alignItems: 'center',
  },
  gender: {
    color: theme.palette.secondary.dark,
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
    },
  },
  formControl: {
    '& .MuiFormGroup-root': {
      flexDirection: 'initial',
    },
    '& .MuiFormControlLabel-labelPlacementStart': {
      flexDirection: 'initial',
    },
  },
  group: {
    display: 'flex',
    alignItems: 'center',
  },
}));

Gender.propTypes = {
  description: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Gender;
