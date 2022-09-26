import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from 'date-fns/locale/es';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './FormPerfil.styles';


export default function FormPerfil({ formState, updateFormState }) {
  const [selectedDate, setSelectedDate] = useState(new Date('2020-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            label="Nombres"
            required
            value={formState.firstName}
            onChange={(e) => updateFormState({firstName: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="lastName"
            variant="outlined"
            fullWidth
            id="lastName"
            label="Apellidos"
            required
            value={formState.lastName}
            onChange={(e) => updateFormState({ lastName: e.target.value })} />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="region"
            variant="outlined"
            fullWidth
            select
            id="outlined-select-currency-native"
            label="Región"
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="comuna"
            variant="outlined"
            fullWidth
            select
            id="outlined-select-currency-native"
            label="Comuna"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
            <KeyboardDatePicker
              className={classes.TextDate}
              size="small"
              fullWidth
              inputVariant="outlined"
              id="date-picker-dialog"
              label="Fecha de nacimiento"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="rut"
            variant="outlined"
            fullWidth
            id="rut"
            label="Rut:"
            value={formState.rut}
            onChange={(e) => updateFormState({ rut: e.target.value })}/>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="domicilio"
            variant="outlined"
            fullWidth
            id="domicilio"
            label="Domicilio"
            value={formState.address}
            onChange={(e) => updateFormState({ address: e.target.value })}
            />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="celular"
            variant="outlined"
            fullWidth
            id="celular"
            label="Celular"
            type="number"
            inputProps={{ min: 0 }}
            value={formState.cellPhone}
            onChange={(e) => updateFormState({ cellPhone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="telefono"
            variant="outlined"
            fullWidth
            id="telefono"
            label="Telefono"
            type="number"
            inputProps={{ min: 0 }}
            value={formState.phone}
            onChange={(e) => updateFormState({ phone: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.Item}>
          <FormControl component="fieldset" className={classes.GenderContainer}>
            <FormLabel component="label">Sexo: </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="sex"
              className={classes.GenderGroupRadio}
              value={formState.sex}
              onChange={(e) => updateFormState({ sex: e.target.value})}
            >
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Hombre" labelPlacement="start" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Mujer" labelPlacement="start" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.Item}>
          <TextField
            className={classes.TextField}
            onChange={(e) => {
              updateFormState({ biography: e.target.value })
            }}
            value={formState.biography}
            size="small"
            name="biography"
            variant="outlined"
            multiline
            fullWidth
            rows="4"
            id="outlined-multiline-static"
            label="Biografía"
            inputProps={{ maxLength: 200 }}
          />
          <p className={classes.Count}>{200 - (formState.biography?.length ?? 0)}</p>
        </Grid>
      </Grid>
    </>
  );
}
