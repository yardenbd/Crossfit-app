import React, { useState,useEffect } from "react";
import FavoriteWodCard from "../components/Cards/FavoriteWodCard";
import classes from "./Wods.module.css";
import useHttp from "../hooks/use-http";
import Spinner from "../components/UI/Spinner";
import authHeader from "../service/auth-header";
export default function FavWods() {
  const [favoriteWods, setFavoriteWods] = useState([]);
  const { sendRequest, isLoading } = useHttp();
  const serverRes = (response) => {
    console.log(response)
    setFavoriteWods(response);
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("info")).id.id;
    sendRequest({
      url: `http://localhost:4000/wods/getFavWods/${id}`,
     
      headers: { 'Content-Type': 'application/json' }
    },serverRes)
  }, []);
  return (
    <React.Fragment>
      {isLoading && (
        <h1>
          Loading... <Spinner />
        </h1>
      )}
      {favoriteWods.length > 0 ? (
        <div className={classes.container}>
          {favoriteWods.map((eachWod) => (
            <FavoriteWodCard
              key={eachWod.wodID}
              title={eachWod.wodTitle}
              id={eachWod.wodID}
            />
          ))}{" "}
        </div>
      ) : (
        <h1>No WOD added !</h1>
      )}
    </React.Fragment>
  );
}
