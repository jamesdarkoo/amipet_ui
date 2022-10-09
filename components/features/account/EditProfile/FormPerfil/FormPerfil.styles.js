import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
  TextField: {
    'margin': '10px 0',
    '& .MuiFormLabel-asterisk': {
      display: 'none',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
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
  GenderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  GenderGroupRadio: {
    flexDirection: 'row',
  }
}));
