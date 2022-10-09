import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormRegister from './FormRegister/FormRegister';
import useFormState from '../../../../hooks/useFormState';
import useStyles from './SignUp.styles';

const SignUpContainer = () => {
  const classes = useStyles();
  const {formState, updateFormState} = useFormState(() => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info('updateformState', formState)
  };

  return (
    <div className={classes.image}>
      <Grid item md={5} component={Paper} elevation={6} square className={classes.LoginContainer}>
        <div className={classes.paper}>
          <FormRegister
            onSubmit={handleSubmit}
            formState={formState}
            updateFormState={updateFormState} />
        </div>
      </Grid>
    </div>
  );
};

export default SignUpContainer;
