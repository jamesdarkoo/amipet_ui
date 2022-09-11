import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  Item: {
    '& .MuiSelect-iconOutlined': {
      color: theme.palette.primary.main,
      fontSize: 40,
      right: 0,
      top: 'initial',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiIconButton-root': {
      padding: 8,
    },
  },
}));

export default function EditPassword({ label, width, value, onChange }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FormControl
        className={classes.Item}
        fullWidth
        size="small"
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          {label}
        </InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className={classes.passwordIcon}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          fullWidth
          labelWidth={width}
        />
      </FormControl>
    </>
  );
}
