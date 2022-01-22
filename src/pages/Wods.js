import React, { useState, useEffect } from "react";
import WodCard from "../components/Cards/WodCard";
import classes from "./Wods.module.css";
import TextField from "@material-ui/core/TextField";
import useHttp from "../hooks/use-http";
import Spinner from "../components/UI/Spinner";

export default function Wods() {
  const [filteredWod, setFilteredWod] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
   
  };
  const applyData = (wodsArray) => {
    setFilteredWod(wodsArray);
  };
  const { sendRequest, isLoading } = useHttp();
  const temp = !search
    ? filteredWod
    : filteredWod.filter((wod) => wod.title.toLowerCase().includes(search));
 

  useEffect(() => {
    sendRequest(
      { url: "http://127.0.0.1:4000/wods/all"},
      applyData
    );
  }, [sendRequest]);
  return (
    <React.Fragment>
      {isLoading ? (
        <h1>
          Loading... <Spinner />
        </h1>
      ) :  (
        <div className={classes.container}>
          <section className={classes.col}>
            <h1>All WOD'S </h1>
            <TextField
              variant="outlined"
              autoComplete="Search WOD"
              label="Search WOD"
              name="Search WOD"
              type="text"
              onChange={handleChange}
            />
          </section>
          <div className={classes.wodsLayout}>
            {temp.map((wod) => (
              <WodCard
              
                key={wod.title}
                id={wod.wodID}
                title={wod.title}
                exercises={wod.exercises}
                how={wod.how}
                isSaved={wod.isSaved}
                type={wod.type}
              />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
