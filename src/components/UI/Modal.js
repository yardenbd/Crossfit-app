import React from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import useHttp from "../../hooks/use-http";
import authHeader from "../../service/auth-header";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
export default function MyModal(props) {
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const getTime = (event) => {
    setTime(event.target.value);
  };
  const getDate = (event) => {
    setDate(event.target.value);
  };
  const serverRes = (response) => {
    dispatch(
      uiActions.showNotification(
        uiActions.showNotification({
          status: response.status,
          title: response.status,
          message: response.message,
        })
      )
    );
  };
  const submitResultHandler = (event) => {
    event.preventDefault();
    const userID = JSON.parse(localStorage.getItem("info")).id.id;
    const resultSubmitted = {
      time,
      date,
      wodID: props.id,
      userID,
    };
    sendRequest(
      {
        url: "http://localhost:4000/wods/submitwod",
        method: "POST",
        body: resultSubmitted,
        headers: authHeader(),
      },
      serverRes
    );
  };
  return ReactDOM.createPortal(
    <div className={classes.myModal}>
      <Form onSubmit={submitResultHandler}>
        <h5 className="h5">Submit time for : {props.wodTitle}</h5>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Time
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="time" step="1" required onBlur={getTime} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              placeholder="Date"
              required
              onBlur={getDate}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" style={{ width: "26rem" }}>
          <Col
            sm={{ span: 10, offset: 2 }}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button type="submit">Submit Result</Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>,
    document.getElementById("portal")
  );
}
