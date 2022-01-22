import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import useHttp from "../../hooks/use-http";
import useValidate from '../../hooks/use-validate'
export default function AddWod(props) {
 
  const { sendRequest } = useHttp();
  const {
    value: nameValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler : nameBlurHandler,
    
  } = useValidate(value => value.trim()!=='');
  const {
    value: howValue,
    isValid: howInputIsValid,
    hasError: howInputHasError,
    valueChangeHandler: howInputChangeHandler,
    inputBlurHandler : howBlurHandler,
    
  } = useValidate(value => value.trim()!=='');
  const {
    value: exercisesValue,
    isValid: exercisesInputIsValid,
    hasError: exercisesInputHasError,
    valueChangeHandler: exercisesInputChangeHandler,
    inputBlurHandler : exercisesBlurHandler,
    
  } = useValidate(value => value.trim()!=='');
  const addWodHandler = (event) => {
    event.preventDefault();
    const wod = {name:nameValue , exercises:exercisesValue , how : howValue}

    sendRequest({
      url: "http://127.0.0.1:4000/wods/addwod",
      method: "POST",
      body: { ...wod, id: Math.random() * 100 },
      headers: { "Content-Type": "application/json" },
    });
    props.closeModal();
  };
  const nameInputClasses = nameInputHasError
  ? 'error'
  : 'valid';
  const exercisesInputClasses = exercisesInputHasError
  ? 'error'
  : 'valid';
  const howInputClasses = howInputHasError
  ? 'error'
  : 'valid';
  return (
    <div className="myModal">
      <Form onSubmit={addWodHandler}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            className={nameInputClasses}
              type="text"
              placeholder="Name"
              onChange={nameInputChangeHandler}
              onBlur={nameBlurHandler}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Exercises
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            className={exercisesInputClasses}
              type="text"
              placeholder="Exercises"
              onChange={exercisesInputChangeHandler}
              onBlur={exercisesBlurHandler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            How
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            className={howInputClasses}
              type="text"
              placeholder="How"
              onChange={howInputChangeHandler}
              onBlur={howBlurHandler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" style={{ width: "26rem" }}>
          <Col
            sm={{ span: 10, offset: 2 }}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button type="submit">Add Wod</Button>
            <Button onClick={props.closeModal}>Cancel</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
