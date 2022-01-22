import React from "react";
import WodTable from "../components/UI/WodTable";
import classes from "./Wods.module.css";
import styles from "./table.module.css";
import { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import Spinner from "../components/UI/Spinner";
import ProgressCard from "../components/Cards/ProgressCard";
export default function Program() {
  const [userWod, setUserWod] = useState([]);
  const [latestWod, setLatestWod] = useState([]);
  const { sendRequest, isLoading } = useHttp();
  function applyData(wods) {
    setUserWod(wods);
    setLatestWod(wods[wods.length - 1]);
  }
  useEffect(() => {
    sendRequest({ url: "http://127.0.0.1:4000/wods/all" }, applyData);
  }, [sendRequest]);
  return (
    <>
      {isLoading ? (
        <h1>
          Loading... <Spinner />
        </h1>
      ) : (
        <div className={classes.container}>
          <ProgressCard
            info={latestWod}
            text={{ lastWOD: "Last WOD", lastTime: "Last time" }}
          />
          <div className={styles.table}>
            <WodTable wodArray={userWod} />
          </div>
        </div>
      )}
    </>
  );
}
