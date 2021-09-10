import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Registration/RegistrationStyle.css";


const RegistrationComponent = () => {
    const axios = require('axios');
    const [userRegister, setUserRegister] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState("");

    function applyRegistration() {
        const firstNameField = document.getElementById("first-name-field");
        const lastNameField = document.getElementById("last-name-field");
        const usernameField = document.getElementById("username-field");
        const emailField = document.getElementById("email-field");
        const passwordField = document.getElementById("password-field");
        const passwordValidField = document.getElementById("password-valid-field");

        let isValid = checkValidationInputs(firstNameField, lastNameField, usernameField, emailField, passwordField, passwordValidField);

        if (isValid) {

            axios({
                method: 'post',
                url: "http://localhost:3010/api/v1/postRegistration",
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    password: password
                }
            }).then((response: any) => {

                setFirstName(""); setlastName(""); setUsername(""); setEmail(""); setPassword(""); setPasswordValid(""); setUsername("");
                setUserRegister(true);


            })

        }



    }

    function checkValidationInputs(firstNameField: any, lastNameField: any, usernameField: any, emailField: any, passwordField: any, passwordValidField: any) {
        let isValid = true;
        if (firstName === "") {
            if (firstNameField) firstNameField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (firstNameField) firstNameField.style.borderBottom = "";
        }
        if (lastName === "") {
            if (lastNameField) lastNameField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (lastNameField) lastNameField.style.borderBottom = "";
        }
        if (username === "") {
            if (usernameField) usernameField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (usernameField) usernameField.style.borderBottom = "";
        }
        if (email === "") {
            if (emailField) emailField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (emailField) emailField.style.borderBottom = "";
        }
        if (password === "") {
            if (passwordField) passwordField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (passwordField) passwordField.style.borderBottom = "";
        }
        if (passwordValid === "") {
            if (passwordValidField) passwordValidField.style.borderBottom = "1px solid red";
            isValid = false;
        } else {
            if (passwordValidField) passwordValidField.style.borderBottom = "";
        }

        return isValid;

    }

    return (
        <Box
            boxShadow={18}
            m={4}
            p={4}
            className="box-container"
        >
            {userRegister && <Row>
                <p style={{textAlign:'center'}}>הרשמתך התקבלה בהצלחה למערכת</p>
                </Row>}
            {!userRegister && <form id="registration-form" autoComplete="false">
                <Row className="row-registration">
                    <Col>
                        <Row>
                            <Col>
                                <TextField
                                    inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                                    fullWidth={true}
                                    size={'small'}
                                    id="last-name-field"
                                    label="שם משפחה"
                                    variant="outlined"
                                    value={lastName}
                                    onChange={(e) => { setlastName(e.target.value) }}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                                    fullWidth={true}
                                    size={'small'}
                                    id="first-name-field"
                                    label="שם פרטי"
                                    variant="outlined"
                                    value={firstName}
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="row-registration">
                    <Col>
                        <TextField
                            inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                            fullWidth={true}
                            size={'small'}
                            id="username-field"
                            label="כינוי"
                            variant="outlined"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </Col>
                </Row>
                <Row className="row-registration">
                    <Col>
                        <TextField
                            inputProps={{ maxLength: 45, style: { textAlign: 'center' } }}
                            fullWidth={true}
                            size={'small'}
                            id="email-field"
                            label="E-Mail"
                            variant="outlined"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Col>
                </Row>
                <Row className="row-registration">
                    <Col>
                        <TextField
                            inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                            fullWidth={true} size={'small'}
                            id="password-field"
                            label="סיסמא"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </Col>
                </Row>
                <Row className="row-registration">
                    <Col>
                        <TextField
                            inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                            fullWidth={true} size={'small'}
                            id="password-valid-field"
                            label="וידוא סיסמא"
                            variant="outlined"
                            type="password"
                            value={passwordValid}
                            onChange={(e) => { setPasswordValid(e.target.value) }}
                        />
                    </Col>
                </Row>

                <Row className="error-row">
                </Row>

                <Row className="registration-row">
                    <Button onClick={applyRegistration} variant="outlined" color="primary">הרשם</Button>
                </Row>
            </form>}

        </Box>
    )
};

export default RegistrationComponent;