import React from "react";
import classes from "./WodCard.module.css";

import useHttp from "../../hooks/use-http";
import authHeader from "../../service/auth-header";
const WodCard = (props) => {
  const { sendRequest, error } = useHttp();
  const addFavWodHandler = () => {
    const userId = JSON.parse(localStorage.getItem("info")).id.id
    const favWodBody = { userId,wodId:props.id,title:props.title }
    sendRequest({
      url: "http://127.0.0.1:4000/wods/addFavWod",
      method: "POST",
      headers: authHeader(),
      body:favWodBody
    });
  };
  const remove = (
    <button className="btn btn-primary animate__animated animate__lightSpeedInLeft">
      Remove From Fav
    </button>
  );

  return (
    <React.Fragment>
      <div className="col-md-4 text-center mb-4" className={classes.card}>
        <div
          className="border p-4 text-with-icon"
          style={{ background: "white" }}
        >
          <span className="flaticon-exercise-1 icon display-4 mb-4 d-block text-primary"></span>

          <h2 className="h5">{props.title}</h2>
          <p>{props.how}</p>
          <p>{props.exercises}</p>
          <p>
            <button className="btn btn-primary" onClick={addFavWodHandler}>
              Add to favorites
            </button>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WodCard;
