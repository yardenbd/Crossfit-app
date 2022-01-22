import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/UI/NavBar";
import { Route, Switch } from "react-router-dom";
import Wods from "./pages/Wods";
import FavWods from "./pages/FavWods";
import Main from "./pages/Main";
import Footer from "./components/UI/Footer";
import Program from "./pages/Program";
import Notification from "./components/UI/Notification";
import { useSelector,useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import {authActions} from './store/auth-slice'
import NotFound from "./pages/NotFound";
function App() {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.ui.notification);
  const isAuth = useSelector(state => state.auth.isAuthenticated)
useEffect(()=>{
setTimeout(()=>{
  dispatch(uiActions.hideNotification())
},5000)
},[notification,dispatch])
useEffect(()=>{
const loginInfo = JSON.parse(localStorage.getItem('info'))
if(loginInfo){
  dispatch(authActions.login({token:loginInfo.token,name:loginInfo.name}))
}

},[])
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/wods">
          <Wods />
        </Route>
        {isAuth &&<><Route path="/favWods">
          <FavWods />
        </Route>
        <Route path="/program">
          <Program />
        </Route></>}
        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
