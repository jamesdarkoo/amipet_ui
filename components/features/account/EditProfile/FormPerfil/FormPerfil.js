import React, { useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from 'date-fns/locale/es';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import regionsQL from '../../../../../graphql/queries/regions';
import communesQL from '../../../../../graphql/queries/communes';
import useStyles from './FormPerfil.styles';


export default function FormPerfil({ formState, updateFormState }) {
  const { data: regions } = useQuery(regionsQL);
  const [getCommunes, { loading, data: communes }] = useLazyQuery(communesQL);
  const classes = useStyles();

  useEffect(() => {
    getCommunes({ variables: { regionId: formState.regionId } });
  }, [formState.regionId]);

  const handleChangeRegion = (regionId) => {
    updateFormState({ regionId })
  }

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
            label="Región"
            value={formState.regionId}
            onChange={(e) => handleChangeRegion(e.target.value)}
          >
            {regions?.regions.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="comuna"
            variant="outlined"
            fullWidth
            select
            label="Comuna"
            disabled={loading}
            value={formState.communeId}
            onChange={(e) => updateFormState({ communeId:  e.target.value })}
          >
            {communes?.communes.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
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
              label="Fecha de nacimiento"
              format="MM/dd/yyyy"
              value={formState.birthdate ? parseISO(formState.birthdate) : null}
              onChange={(value) => updateFormState({ birthdate: format(value, 'yyyy-MM-dd') })}
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
              value={formState.gender}
              onChange={(e) => updateFormState({ gender: e.target.value})}
            >
              <FormControlLabel value="MALE" control={<Radio color="primary" />} label="Hombre" labelPlacement="start" />
              <FormControlLabel value="FEMALE" control={<Radio color="primary" />} label="Mujer" labelPlacement="start" />
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
            minRows="4"
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
