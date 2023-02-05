import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageList, ImageListItem } from '@material-ui/core';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { getRandomArrays } from '@/utils/helpers';
import Image from 'next/image';

function Gallery({ desktop, mobile, images, active }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const openLightbox = useCallback((event) => {
    setCurrentImage(event);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const onresize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  }, []);

  let numberCard = 0;
  let height = 0;
  let photos = images;

  if (width > 969) {
    numberCard =
      desktop.columns > photos.length ? photos.length : desktop.columns;
    height = desktop.height; // 200
  } else {
    numberCard =
      mobile.columns > photos.length ? photos.length : mobile.columns;
    height = mobile.height; // 130
    photos = active ? photos.slice(0, numberCard) : getRandomArrays(6, photos);
  }

  return (
    <>
      <ImageList rowHeight={height} cols={numberCard}>
        {photos.map((title, idx) => {
          return (
            <ImageListItem key={idx}> 
              <Image alt={title.name} width={100} height={100} src={title.src} onClick={() => openLightbox(idx)}></Image>
            </ImageListItem>
          );
        })}
      </ImageList>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    })
  ).isRequired,
  desktop: PropTypes.exact({
    columns: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  mobile: PropTypes.exact({
    columns: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
};

export default Gallery;
