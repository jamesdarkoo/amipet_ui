import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    padding: '0 9px',
    height: 35,
    [theme.breakpoints.down('sm')]: {
      height: 30,
      padding: 'initial',
    },
  },
  img: {
    width: '8em',
    [theme.breakpoints.down('sm')]: {
      width: '7em',
    },
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Link href="/">
        <a>
          <Image src="/amipet-logo.png" className={classes.img} height={46} width={120} alt="Amipet" />
        </a>
      </Link>
    </div>
  );
}
