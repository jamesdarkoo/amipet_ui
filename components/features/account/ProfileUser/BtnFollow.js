import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  Btns: {
    color: theme.palette.secondary.dark,
  },
}));

export default function BtnFollow() {
  const classes = useStyles();
  const [follow, setFollow] = useState('Seguir');
  const onClick = () => {
    if (follow === 'Seguir') {
      setFollow('Siguiendo');
    } else {
      setFollow('Seguir');
    }
  };

  return (
    <Button
      variant="outlined"
      size="small"
      className={`${classes.Btns}`}
      onClick={() => onClick()}
    >
      {follow}
    </Button>
  );
}
