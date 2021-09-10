import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Login/LoginStyle.css";
import { useDispatch } from 'react-redux'
import * as loginActions from '../../redux/action/login.action';
import UserDetails from '../../model/UserDetails';


const Login = () => {
    const dispatch = useDispatch();
    const axios = require('axios');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMesage] = useState("");

    function applyLogin() {

        const userNameField = document.getElementById("username-field");
        const passwordField = document.getElementById("password-field");

        let isValid = checkValidationInputs(userNameField, passwordField);

        if (isValid) {

            const userDetails = new UserDetails(userName, password);

            axios({
                method: 'post',
                url: "http://localhost:3010/api/v1/generateAccessToken",
                data: {
                    username: userName
                }
            }).then((response: any) => {

                axios({
                    method: 'post',
                    url: "http://localhost:3010/api/v1/login",
                    headers: {
                        'authorization': "Bearer " + response.data.token
                    },
                    data: {
                        username: userName,
                        password: password
                    }

                }).then((response: any) => {
                    if (!response.data.success) {
                        setErrorMesage("שגיאה בפרטי התחברות");
                    } else {
                        setErrorMesage("")
                        dispatch(loginActions.loginAction(userDetails));
                    }
                })
            })
        }
    }

    function checkValidationInputs(usernameField: any, passwordField: any) {
        let isValid = true;

        if (userName === "") {
            if (usernameField) usernameField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (usernameField) usernameField.style.borderBottom = "";
        }
        if (password === "") {
            if (passwordField) passwordField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (passwordField) passwordField.style.borderBottom = "";
        }

        return isValid;

    }

    return (
        <Box
            boxShadow={18}
            m={4}
            p={4}
            className="box-container-login"
        >
            <form autoComplete="false">
                <Row className="login-row">
                    <TextField
                        size={'small'}
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                        id="username-field"
                        label="שם משתמש"
                        variant="outlined" />
                </Row>
                <Row className="login-row">
                    <TextField
                        size={'small'}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password"
                        id="password-field"
                        label="סיסמא"
                        variant="outlined" />
                </Row>
                <Row><p className="error-message-login">{errorMessage}</p></Row>
                <Row className="login-row" >
                    <Button onClick={applyLogin} variant="outlined" color="primary">התחבר</Button>
                </Row>
                <Row>
                    <Col className="last-col-login">
                        <a href=""> שכחתי סיסמא</a>
                    </Col>
                    <Col className="last-col-login">
                        <p style={{ textAlign: 'center' }}></p>
                    </Col>
                    <Col style={{ textAlign: 'center' }} className="last-col-login">
                        <a href="http://localhost:3000/">הרשמה</a>
                    </Col>
                </Row>
            </form>
        </Box>
    )
};

export default Login;