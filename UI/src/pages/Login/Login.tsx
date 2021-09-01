import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../Login/LoginPageStyle.css";

const Login = () => {
  return (
    <div className="container-page-login">
      <LoginComponent />
      <Container fluid>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
