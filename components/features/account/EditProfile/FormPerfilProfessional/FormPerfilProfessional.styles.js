import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
