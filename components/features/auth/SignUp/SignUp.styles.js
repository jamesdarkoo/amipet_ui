import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  LoginContainer: {
    maxWidth: '30%',
    borderRadius: 10,
    [theme.breakpoints.down('md')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '95%',
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    padding: '20em 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none',
      height: '35em',
    },
  },
}));
