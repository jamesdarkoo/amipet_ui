import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Carousel, { Modal, ModalGateway } from 'react-images';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  modal: {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': '100%',
    '& li div': {
      width: 100,
      height: 100,
    },
  },
}));

export default function ImagesModal({ photos, number }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event) => {
    setCurrentImage(event);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };
  const width = (typeof window !== 'undefined' && window.innerWidth) || 0;
  const classes = useStyles();
  const [mobile, setMobile] = useState(width);

  const onresize = () => {
    setMobile(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  });

  let numberCard = 0;
  let height = 0;

  if (mobile > 969) {
    numberCard = number;
    height = 200;
  } else {
    numberCard = 3;
    height = 130;
  }
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={height}
        cols={numberCard}
        className={classes.gridList}
      >
        {photos.map((tile, idx) => {
          return (
            <GridListTile key={idx}>
              <Image
                src={tile.src}
                height={46}
                width={120}
                alt={tile.title}
                onClick={() => openLightbox(idx)}
              />
            </GridListTile>
          );
        })}
      </GridList>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
