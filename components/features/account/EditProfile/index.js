import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormPerfil from './FormPerfil/FormPerfil';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Avatar from './Avatar';
import Button from '@material-ui/core/Button';
import Btns from './Btns';

import Title from '../../../Title';
import useFormState from '../../../../hooks/useFormState';
import updateProfileQL from '../../../../graphql/mutations/updateProfile';

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
  BtnSubmit: {
    'color': theme.palette.secondary.light,
    'backgroundColor': theme.palette.secondary.main,
    'margin': theme.spacing(3, 0),
    'width': '45%',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  }
}));

export default function EditProfile({ profile }) {
  const classes = useStyles();
  const router = useRouter();
  const [updateProfile, {loading, error, data}] = useMutation(updateProfileQL, {
    onCompleted({ updateProfile }) {
      if (updateProfile?.success) {
          router.push('/profile');
      }
    }
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const { formState, updateFormState } = useFormState(() => ({
    birthdate: profile.birthdate,
    biography: profile.biography,
    gender: profile.gender,
    address: profile.address,
    phone: profile.phone,
    cellPhone: profile.cellPhone,
    career: profile.career,
    school: profile.school,
    regionId: profile.region?.id,
    communeId: profile.commune?.id,
    rut: profile.rut,
    periodEnd: profile.periodEnd,
    periodStart: profile.periodStart,
    firstName: profile.firstName,
    lastName: profile.lastName,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ variables: { input: { ...formState, avatar: avatarFile } } })
  }

  const handleChangeAvatar = useCallback((file) => {
    setAvatarFile(file);
  }, []);

  console.info('profile', profile, formState);
  console.info('updateprofile', error, data)

  return (
    <Container component="main" maxWidth="lg">
      <Btns btn1="Volver atras" btn2="Ver perfil" title="Editar perfil" icon1={<PersonOutlineIcon className={classes.Icon} />} />
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.paper}>
          <Title title="Crear perfil" />
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormPerfil formState={formState} updateFormState={updateFormState} />
            <div className={classes.picture}>
              <Avatar onChange={handleChangeAvatar} />
              <Typography component="h3" variant="h5" className={classes.profile}>
                Foto perfil
              </Typography>
            </div>
            {/* <Divider className={classes.Divider} /> */}
            <div className={classes.SeccionEnd}>
              {/* <Typography component="h3" variant="h5" className={classes.profile}>
                Perfil profesional
              </Typography>
              <div className={classes.form}>
                <FormPerfilProfessional formState={formState} updateFormState={updateFormState} />
              </div> */}
              <Button type="submit" fullWidth variant="contained" className={classes.BtnSubmit}>
                GUARDAR
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Container>
  );
}
