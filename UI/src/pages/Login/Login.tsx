import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../Login/LoginPageStyle.css";

const Login = () => {
  return (
    <div className="container-page-login">
      <LoginComponent />
    </div>
  );
};

export default Login;
