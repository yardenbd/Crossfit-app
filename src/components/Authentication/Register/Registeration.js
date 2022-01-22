import Avatar from "@material-ui/core/Avatar";
import useHttp from '../../../hooks/use-http'
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import useValidate from '../../../hooks/use-validate'
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { useDispatch } from "react-redux";
import {uiActions} from '../../../store/ui-slice'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CrossFits
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Registeration(props) {
  const dispatch = useDispatch()
  const {sendRequest}=useHttp()
  let formIsValid = false
  const emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const passwordRegex= /^(?=.*[0-9])(?=.*[a-z]).{6,32}/
  const {
    value: nameValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler : nameBlurHandler,
    
  } = useValidate(value => value.trim()!=='');
  const {
    value: lastNameValue,
    isValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler : lastNameBlurHandler,
    
  } = useValidate(value => value.trim()!=='');
  const {
    value: emailValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler : emailBlurHandler,
    
  } = useValidate(value => value.match(emailRegex));
  const {
    value: passwordValue,
    isValid: passwordInputIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler : passwordBlurHandler,
  
  } = useValidate(value => value.match(passwordRegex));
  if(nameInputIsValid&&lastNameInputIsValid&&emailInputIsValid&&passwordInputIsValid)
  {
    formIsValid=true
  }
  const getData=(response)=>{
  console.log(response)
    dispatch(uiActions.showNotification({
      status:response.status,
      title:response.status,
      message:response.message
    }))
  }
  function handleSubmit(event) {
    event.preventDefault();
    sendRequest({
      url: "http://localhost:4000/register",
      method: "POST",
      body: {name : nameValue , lastName:lastNameValue , email:emailValue , password:passwordValue},
      headers: { "Content-Type": "application/json" },
    },getData);
    props.closeModal();
    
  }

  const classes = useStyles();
  const emailInputClasses = emailInputHasError
  ? 'error'
  : 'valid';
  const passwordInputClasses = passwordInputHasError
  ? 'error'
  : 'valid';
  const nameInputClasses = nameInputHasError
  ? 'error'
  : 'valid';
  const lastNameInputClasses = lastNameInputHasError
  ? 'error'
  : 'valid';

  return (
    <div className="myModal">
      <Container component="main" maxWidth="xs" a>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                className={nameInputClasses}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={nameInputChangeHandler}
                  onBlur={nameBlurHandler}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                className={lastNameInputClasses}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={lastNameInputChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                className={emailInputClasses}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={emailInputChangeHandler}
                  onBlur={emailBlurHandler}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                className={passwordInputClasses}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={passwordInputChangeHandler}
                  onBlur={passwordBlurHandler}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <section className="buttons">
              <Button block size="lg" type="submit" disabled={!formIsValid}>
                Sign Up
              </Button>
              <Button block size="lg" onClick={props.closeModal}>
                Cancel
              </Button>
            </section>
            <br></br>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" onClick={props.toggleForm} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
