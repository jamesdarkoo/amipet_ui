import React from 'react';
import { photos } from './ImagesForGrid';
import { makeStyles } from '@material-ui/core/styles';
import ImagesModal from '../../../Shared/ImagesModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}));

export default function ProfilelImages() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImagesModal photos={photos} number={4} />
    </div>
  );
}
