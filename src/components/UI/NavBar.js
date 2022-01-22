import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import {useReducer } from "react";
import Backdrop from "./Backdrop";
import UserAuthentication from "../Authentication/UserAuthentication";
import AddWod from "./AddWod";
import { useSelector } from 'react-redux';
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const modalReducer = (state,action)=>{
  
switch (action.type) {
  case 'login':
    return {authModal:!state.authModal , addWod : false}
   case 'add wod':
     return {authModal:false , addWod : !state.addWod}

  default: return {authModal : false , addWod:false}
}
}
 const NavBar = () =>{
   const dispatch = useDispatch()
   const isAuth = useSelector(state => state.auth.isAuthenticated)
   const userName = useSelector(state => state.auth.userName)
  const [Modal , dispatchModal] = useReducer(modalReducer , {authModal : false , addWod:false})
  const { authModal: authModal } = Modal;
  const { addWod: addWod } = Modal;
 
  const toggleModal = (modalType)=>{
    dispatchModal({type:modalType})
    
  }
  const logout = useCallback(()=>{
    dispatch(authActions.logout())
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'Logout',
      message:'Logged out successfully'
    }))
    localStorage.removeItem('info')
  })
  return (
    <React.Fragment>
      <MobileNavBar />

      <div className="site-navbar-wrap js-site-navbar bg-white">
        <div className="container">
          <div className="site-navbar bg-light">
            <div className="py-1">
              <div className="row align-items-center">
                <div className="col-2">
                  <h2 className="mb-0 site-logo">
                    <Link to="/">
                      Cross<strong>fits</strong>
                    </Link>
                  </h2>
                </div>
                <div className="col-10">
                  <nav className="site-navigation text-right" role="navigation">
                    <div className="container">
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                        <a className="site-menu-toggle js-menu-toggle text-black">
                          <span className="icon-menu h3"></span>
                        </a>
                      </div>

                      <ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li className="has-children active">
                          <a>Training</a>
                          <ul className="dropdown arrow-top">
                            <li>
                              <Link to="/wods">WOD'S</Link>
                            </li>
                           
                            
                          </ul>
                        </li>
                        <li>
                          {isAuth && (
                             <li className="has-children active">
                             <a href="trainers.html">Your Program</a>
                             <ul className="dropdown arrow-top">
                               <li>
                                 <a href='#' onClick={()=>toggleModal('add wod')}>Add Wod</a>
                               </li>
                               <li>
                              <Link to="/favWods">Liked WOD'S</Link>
                            </li>
                            <li>
                              <Link to="/program">Progress</Link>
                            </li>
                             </ul>
                           </li>
                        
                          )}
                        </li>
                        {isAuth&& <li>
                          Hi , {userName}
                          </li>}
                       
                        <li>
                          {!isAuth && (
                            <a href=" #" onClick={()=>toggleModal('login')}>
                              Login
                            </a>
                          )}
                        </li>
                        {isAuth && (
                          <li>
                            <a href=" #" onClick={logout}>
                              Logout
                            </a>
                          </li>
                        )}
                      </ul>
                      {authModal && (
                        <UserAuthentication
                          closeModal={()=>toggleModal('login')}
                          
                        />
                      )}
                      {authModal && <Backdrop />}
                      {addWod && <Backdrop />}
                      {addWod && <AddWod  closeModal={()=>toggleModal('add wod')}/>}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NavBar