import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import useValidate from "../../../hooks/use-validate";
import useHttp from '../../../hooks/use-http'
import {useDispatch} from 'react-redux'
import {authActions} from '../../../store/auth-slice'
import { uiActions } from "../../../store/ui-slice";
import { useHistory } from "react-router";
export default function LoginForm(props) {
  const history = useHistory()
  const dispatch = useDispatch()
 const {sendRequest,isLoading,error} = useHttp()
  let formIsValid = false
  const emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const passwordRegex= /^(?=.*[0-9])(?=.*[a-z]).{6,32}/
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
  
 
 if(passwordInputIsValid&&emailInputIsValid)
 {
  formIsValid=true
 }

function serverRes(res){

  if(res.login===true){
    dispatch(uiActions.showNotification({
      status:'success',
      title: 'Logged in ',
      message: 'Logged in successfully',
    }))
    dispatch(authActions.login({token:res.token,name:res.userName}))
    localStorage.setItem('info',JSON.stringify({token:res.token,name:res.userName,id:res.userId}))
  }else{
    dispatch(uiActions.showNotification({
      status:'failed',
      title: 'Something went wrong',
      message: res.message,
    }))
  }
}
  
  function handleSubmit(event) {
    event.preventDefault();
    sendRequest({
      url: "http://localhost:4000/login",
      method: "POST",
      body: {email:emailValue , password:passwordValue},
      headers: {  Accept: 'application/json',"Content-Type": "application/json" },
    },serverRes);
    
    dispatch(uiActions.showNotification({
      status:'pending',
      title: 'Sending...',
      message: 'Sending login data!',
    }))
    props.closeModal();
   history.replace('/')
  }
  const emailInputClasses = emailInputHasError
  ? 'error'
  : 'valid';
  const passwordInputClasses = passwordInputHasError
  ? 'error'
  : 'valid';

  return (
    <div className="myModal">
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <TextField 
            className={emailInputClasses}
              variant="outlined"
              required
              fullWidth
              autoComplete="email"
              label="Email"
              name="email"
              type="email"
              onChange={emailInputChangeHandler}
              onBlur={emailBlurHandler}
             
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <TextField
            className={passwordInputClasses}
              variant="outlined"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              minLength="6"
              onChange={passwordInputChangeHandler}
              onBlur={passwordBlurHandler}
              
            />
          </Form.Group>
          <br></br>
          <section className="loginBtn">
            <Button block size="lg" type="submit" disabled={!formIsValid}>
              Login
            </Button>
            <Button block size="lg" onClick={props.closeModal}>
              Cancel
            </Button>
          </section>
        </Form>
        <br></br>
        <h6>
          Not a user ?{" "}
          <a href="#" onClick={props.toggleForm}>
            Register here !
          </a>
        </h6>
      </div>
    </div>
  );
}
