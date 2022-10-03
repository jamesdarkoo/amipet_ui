import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from 'date-fns/locale/es';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import useStyles from './FormPerfilProfessional.styles';
import Dropzone from '../Dropzone';


export default function FormPerfilProfessional({ formState, updateFormState }) {
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
            label="Carrera"
            value={formState.career}
            onChange={(e) => updateFormState({ career: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.TextField}
            size="small"
            name="firstName"
            variant="outlined"
            fullWidth
            label="Centro educativo"
            value={formState.school}
            onChange={(e) => updateFormState({ school: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={2}>
          <Typography component="h3" variant="h5" className={classes.period}>
            Periodo
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
            <KeyboardDatePicker
              className={classes.TextDate}
              size="small"
              fullWidth
              inputVariant="outlined"
              label="Desde"
              format="MM/dd/yyyy"
              value={formState.periodStart ? parseISO(formState.periodStart) : null}
              onChange={(value) => updateFormState({ periodStart: format(value, 'yyyy-MM-dd') })}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
            <KeyboardDatePicker
              className={classes.TextDate}
              size="small"
              fullWidth
              inputVariant="outlined"
              label="Hasta"
              format="MM/dd/yyyy"
              value={formState.periodEnd ? parseISO(formState.periodEnd) : null}
              onChange={(value) => updateFormState({ periodEnd: format(value, 'yyyy-MM-dd') })}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
      <Grid container spacing={2} className={classes.grid}>
        <Dropzone desc="adjuntar titulo profesional" icon={<AddOutlinedIcon className={classes.IconAdd} />} />
      </Grid>
    </>
  );
}
