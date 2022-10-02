import React, { memo } from 'react';
import { useDropzone } from 'react-dropzone';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    'width': '100px',
    'height': '100px',
    'overflow': 'hidden',
    'margin': 'auto',
    'border': `2px solid ${theme.palette.primary.main}`,
    'borderRadius': '50%',
    'borderStyle': 'dotted',
    'cursor': 'pointer',
    '&:hover': {
      boxShadow: '0px 1px 17px -9px rgba(0,0,0,0.75)',
    },
  },
  div: {
    'display': 'flex',
    'height': '100%',
    'alignItems': 'center',
    'justifyContent': 'center',
    '&:focus': {
      outline: 'initial',
    },
  },
  icon: {
    fontSize: '4em',
    color: theme.palette.primary.main,
  },
}));

function Avatar({ onChange }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ maxFiles: 1, multiple: false, accept: { 'image/*': [] } });
  const classes = useStyles();

  acceptedFiles.forEach((file) => {
    onChange(file);
  });

  return (
    <section className={classes.section}>
      <div {...getRootProps()} className={classes.div}>
        <input name="avatar" {...getInputProps()} />
        <CameraAltOutlinedIcon className={classes.icon} />
      </div>
    </section>
  );
}

export default memo(Avatar);
