import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../Login/LoginPageStyle.css";

const Login = () => {
  return (
    <div className="container-page-login">
      <Row className="login-page-row">
        <Col xs lg="3" className="login-page-column" >
            <LoginComponent />
        </Col>
      </Row>

    </div>
  );
};

export default Login;
