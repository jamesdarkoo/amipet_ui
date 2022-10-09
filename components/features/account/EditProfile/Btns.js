import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const useStyles = makeStyles((theme) => ({
  Container: {
    'display': 'flex',
    'margin': '20px auto',
    '& .MuiButton-outlined': {
      width: '15%',
      [theme.breakpoints.down('md')]: {
        width: 'auto',
      },
    },
    '& .MuiButton-label': {
      textTransform: 'capitalize',
    },
  },
  Arrow: {
    marginRight: 5,
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
    },
  },
  Title: {
    fontWeight: '600',
    fontSize: 25,
    width: '70%',
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  Btns: {
    color: theme.palette.secondary.dark,
  },
  Hidden: {
    display: 'none',
  },
}));

export default function Btns(props) {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <Link href="/profile">
        <Button variant="outlined" className={classes.Btns}>
          <ArrowBackOutlinedIcon className={classes.Arrow} />
          {props.btn1}
        </Button>
      </Link>
      <Typography component="h3" variant="h5" className={classes.Title}>
        {props.title}
      </Typography>
      <Button variant="outlined" className={`${classes.Btns} ${classes.Hidden}`}>
        {props.btn2}
        {props.icon1}
      </Button>
    </div>
  );
}
