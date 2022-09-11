import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MonthAndYear from './MonthAndYear';
import Dropzone from './Dropzone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    alignItems: 'center',
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'column',
  },
  btn: {
    'color': theme.palette.secondary.light,
    'backgroundColor': theme.palette.secondary.main,
    'width': '45%',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  period: {
    color: theme.palette.secondary.dark,
    fontSize: 20,
  },
  TextField: {
    '& .MuiSelect-iconOutlined': {
      color: theme.palette.primary.main,
      fontSize: 40,
      right: 0,
      top: 'initial',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  IconAdd: {
    color: theme.palette.primary.main,
    border: '1px solid',
    borderRadius: 15,
    borderStyle: 'dotted',
    fontSize: 25,
  },
}));

export default function EditProfession() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.TextField}
            size="small"
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            fullWidth
            id="Carrera"
            label="Carrera"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.TextField}
            size="small"
            name="firstName"
            variant="outlined"
            fullWidth
            select
            id="outlined-select-currency-native"
            label="Centro educativo"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={2}>
          <Typography component="h3" variant="h5" className={classes.period}>
            Periodo
          </Typography>
        </Grid>
        <MonthAndYear />
      </Grid>
      <Grid container spacing={2} className={classes.grid}>
        <Dropzone desc="adjuntar titulo profesional" icon={<AddOutlinedIcon className={classes.IconAdd} />} />
      </Grid>
    </>
  );
}
