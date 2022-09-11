import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Gender from './Gender';
import Bio from './Bio';
import Icon from '../../../Icon';
import EditPassword from '../../../EditPassword';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from 'date-fns/locale/es';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
  TextDate: {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
    '& .MuiIconButton-root': {
      padding: 8,
    },
    '& .MuiIconButton-label': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  Count: {
    margin: '10px 0',
    textAlign: 'end',
    fontSize: 18,
    color: theme.palette.secondary.dark,
  },
  Item: {
    'margin': '10px 0',
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
}));

export default function EditContact() {
  const [selectedDate, setSelectedDate] = useState(
    new Date('2020-08-18T21:11:54'),
  );
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
          />
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
          />
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
          />
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
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.Item}>
          <TextField
            className={classes.TextField}
            size="small"
            name="mail"
            variant="outlined"
            fullWidth
            id="mail"
            label="Correo electronico"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <EditPassword label="Contraseña" width={80} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <EditPassword label="Confirmar contraseña" width={160} />
        </Grid>
      </Grid>
      <Gender
        desc="Sexo:"
        male="Hombre"
        female="Mujer"
        icon={<Icon icon="fas fa-mars" />}
        iconTwo={<Icon icon="fas fa-venus" />}
      />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.Item}>
          <Bio number="200" desc="Bio" />
        </Grid>
      </Grid>
    </>
  );
}
