import React from 'react';
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    'width': '50%',
    'margin': '35px auto 0',
    'border': `2px solid ${theme.palette.primary.main}`,
    'borderRadius': 5,
    'borderStyle': 'dotted',
    'cursor': 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    '&:hover': {
      borderColor: `${theme.palette.secondary.yellow}`,
    },
  },
  div: {
    'display': 'flex',
    'padding': 6,
    'justifyContent': 'center',
    '&:focus': {
      outline: 'initial',
    },
  },
  Desc: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    color: theme.palette.secondary.dark,
  },
  Icon: {
    margin: '0 8px',
  },
}));

function MyDropzone(props) {
  const classes = useStyles();

  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section className={classes.section}>
          <div {...getRootProps()} className={classes.div}>
            <input {...getInputProps()} />
            <div className={classes.Desc}>
              <p className={classes.Icon}>{props.icon}</p>
              {props.desc}
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default MyDropzone;
