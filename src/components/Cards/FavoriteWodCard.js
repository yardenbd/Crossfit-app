import React from "react";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import MyModal from "../UI/Modal";

import useHttp from '../../hooks/use-http'
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import authHeader from "../../service/auth-header";
export default function FavoriteWodCard(props) {
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };
  const {sendRequest} = useHttp()

 function serverRes(response){
  switch (response.status) {
    case 'success':
      dispatch(uiActions.showNotification({
        status:'success',
        title: 'success',
        message: response.message,
      }))
      break;
      case 'error':
      dispatch(uiActions.showNotification({
        status:'error',
        title: 'error',
        message: response.message,
      }))
      break;
  }
  window.location.reload(false)
 }
const removeWodFromFavorites=()=>{
  sendRequest({
    url: "http://localhost:4000/wods/deleteFavWod",
    method: "DELETE",
    body: {wodId:props.id} ,
    headers: authHeader(),
  },serverRes)
  dispatch(uiActions.showNotification({
    status:'pending',
    title: 'Sending...',
    message: 'Sending WOD data!',
  }))
  
}
  return (
    <div className="site-section border-top border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-md-2">
            <p className="mb-5">
              <img
                src="images/img_4.jpg"
                alt="Image"
                className="img-fluid rounded"
              ></img>
            </p>
          </div>
          <div className="col-lg-5 mr-auto order-md-1">
            <h2 className="site-section-heading mb-3">{props.title} </h2>
            <p>{props.how} </p>
            <p className="mb-4">{props.exercises}</p>

            
          
              <button className="btn btn-outline-primary py-2 px-4" onClick={removeWodFromFavorites}>
                Remove from favorites
              </button>
              <br></br>
              <br></br>
              <button
                className="btn btn-outline-primary py-2 px-4"
                onClick={toggleModal}
              >
                Submit Results
              </button>
              {modalIsOpen&& <MyModal wodTitle={props.title} id={props.id} onClose={toggleModal}/>}
              {modalIsOpen&& <Backdrop />}
            
          </div>
        </div>
      </div>
    </div>
  );
}
