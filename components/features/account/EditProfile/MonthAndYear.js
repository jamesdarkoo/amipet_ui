import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from 'date-fns/locale/es';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  TextDate: {
    'margin': '5px 0',
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
}));

export default function MonthAndYear() {
  const [startDate, setStartDate] = useState(new Date('2020-08-18T21:11:54'));
  const handleDateChangeStarDate = (date) => {
    setStartDate(date);
  };
  const [endDate, setEnDate] = useState(new Date('2020-08-18T21:11:54'));
  const handleDateChangeEndDate = (date) => {
    setEnDate(date);
  };
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={4} spacing={3}>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
          <KeyboardDatePicker
            className={classes.TextDate}
            size='small'
            fullWidth
            inputVariant='outlined'
            label='Incio'
            locale='es-MX'
            format='MM/dd/yyyy'
            value={startDate}
            onChange={handleDateChangeStarDate}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider> */}
      </Grid>
      <Grid item xs={12} sm={4} spacing={3}>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
          <KeyboardDatePicker
            className={classes.TextDate}
            size='small'
            fullWidth
            inputVariant='outlined'
            label='Fin'
            format='MM/dd/yyyy'
            value={endDate}
            onChange={handleDateChangeEndDate}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider> */}
      </Grid>
    </>
  );
}
