import React, { useState } from "react";
import LoginForm from "./Login/LoginForm";
import Registeration from "./Register/Registeration";
export default function UserAuthentication(props) {
  const [registerModal, setRegisterModal] = useState(false);
  const loadRegisterModal = () => setRegisterModal((prev) => !prev);
  return (
    <React.Fragment>
      {!registerModal ? (
        <LoginForm
          toggleForm={loadRegisterModal}
          closeModal={props.closeModal}
        />
      ) : (
        <Registeration
          toggleForm={loadRegisterModal}
          closeModal={props.closeModal}
        />
      )}
    </React.Fragment>
  );
}
