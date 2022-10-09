import React from 'react';
import EditPassword from '../../../../EditPassword';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useStyles from './FormRegister.styles';


export default function Register({ formState, updateFormState, onSubmit }) {
  const classes = useStyles();
  return (
    <form className={classes.form} autoComplete="off" onSubmit={onSubmit}>
      <TextField
        size="small"
        className={classes.input}
        variant="outlined"
        margin="normal"
        fullWidth
        label="Nombre"
        name="name"
        autoComplete="name"
        value={formState.firstName}
        onChange={(e) => updateFormState({ firstName: e.target.value })}
      />
      <TextField
        size="small"
        className={classes.input}
        variant="outlined"
        margin="normal"
        fullWidth
        label="Apellidos"
        name="lastName"
        value={formState.lastName}
        onChange={(e) => updateFormState({ lastName: e.target.value })}
      />
      <TextField
        size="small"
        className={classes.input}
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Correo electronico"
        name="email"
        autoComplete="email"
        value={formState.email}
        onChange={(e) => updateFormState({ email: e.target.value })}
      />
      <EditPassword label="Contraseña" width={80} value={formState.password} onChange={(e) => updateFormState({ password: e.target.value})}  />
      {/* <div className={classes.LoginCreateBtns}>
        <Button className={classes.LoginBtnIcon} {...other}>
          <i className={`fab fa-facebook-f ${classes.IconFontawesome}`} /> registrarse con facebook
        </Button>
        <Button className={classes.LoginBtnIcon} {...other}>
          <FontAwesomeIcon icon={faGoogle} /> registrarse con google
        </Button>
      </div> */}
      <Button type="submit" fullWidth color="secondary" variant="contained" className={classes.BtnSubmit}>
        Registrarse
      </Button>
    </form>
  );
}
