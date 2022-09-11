import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchBox from './SearchBox';
import Navbar from './Navbar';
import ComponentsNav from './ComponentsNav';

const useStyles = makeStyles((theme) => ({
  searchMobile: {
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'paddingRight': 8,
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    'width': 'auto',
    'zIndex': '1',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const width = (typeof window !== 'undefined' && window.innerWidth) || 0;
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(width);
  const onresize = () => {
    setIsMobile(width);
  };
  useEffect(() => {
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  });

  if (isMobile > 480) {
    return (
      <Navbar>
        <ComponentsNav />
      </Navbar>
    );
  }

  return (
    <Navbar>
      {active ? (
        <div className={classes.searchMobile}>
          <SearchBox />
        </div>
      ) : (
        <ComponentsNav
          click={() => {
            setActive(true);
          }}
        />
      )}
    </Navbar>
  );
}
