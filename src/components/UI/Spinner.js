import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./Backdrop.module.css";
export default function Spinner() {
  return <CircularProgress className={classes.spinner} />;
}
