import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Carousel = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Swiper
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={10}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .swiper-container': {
      '& .swiper-pagination': {
        '& .swiper-pagination-bullet:only-child': {
          visibility: 'hidden',
        },
        bottom: 50,
        '& .swiper-pagination-bullet': {
          backgroundColor: theme.palette.primary.main,
          width: 15,
          height: 15,
          opacity: 1,
        },
      },
    },
  },
}));

export default Carousel;
