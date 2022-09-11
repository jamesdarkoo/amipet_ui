import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditContact from './EditContact';
import EditProfession from './EditProfession';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DropZonePicture from './DropZonePicture';
import Divider from '@material-ui/core/Divider';
import Btns from './Btns';
import BtnSubmit from './BtnSubmit';
import Title from '../../../Title';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  picture: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  profile: {
    margin: '20px 0',
    textAlign: 'center',
  },
  Divider: {
    height: 2,
  },
  createProfile: {
    fontWeight: '500',
  },
  Icon: {
    marginLeft: 20,
  },
  SeccionEnd: {
    textAlign: 'center',
  },
}));

export default function EditProfile() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <Btns
        btn1="Volver atras"
        btn2="Ver perfil"
        title="Editar perfil"
        icon1={<PersonOutlineIcon className={classes.Icon} />}
      />
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.paper}>
          <Title title="Crear perfil" />
          <form className={classes.form} noValidate>
            <EditContact />
            <div className={classes.picture}>
              <DropZonePicture />
              <Typography
                component="h3"
                variant="h5"
                className={classes.profile}
              >
                Foto perfil
              </Typography>
            </div>
            <Divider className={classes.Divider} />
            <div className={classes.SeccionEnd}>
              <Typography
                component="h3"
                variant="h5"
                className={classes.profile}
              >
                Perfil profesional
              </Typography>
              <div className={classes.form}>
                <EditProfession />
              </div>
              <BtnSubmit />
            </div>
          </form>
        </div>
      </Container>
    </Container>
  );
}
