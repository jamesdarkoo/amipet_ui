import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  TextField: {
    'margin': '10px 0',
    '& .MuiFormLabel-asterisk': {
      display: 'none',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  Count: {
    textAlign: 'end',
    fontSize: 18,
    color: theme.palette.secondary.dark,
  },
}));

export default function Bio(props) {
  const [bio, setBio] = useState('');
  const [count] = useState(props.number);
  const handleChange = (e) => {
    setBio(e.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.TextField}
        onChange={handleChange}
        value={bio}
        size="small"
        name={props.desc}
        variant="outlined"
        multiline
        fullWidth
        rows="4"
        id="outlined-multiline-static"
        label={props.desc}
        inputProps={{ maxLength: count }}
      />
      <p className={classes.Count}>{count - bio.length}</p>
    </>
  );
}
