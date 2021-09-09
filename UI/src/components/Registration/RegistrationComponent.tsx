import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Registration/RegistrationStyle.css";


const RegistrationComponent = () => {
    const axios = require('axios');
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function applyRegistration() {

        if (firstName == "") {



        }


        // axios({
        //     method: 'post',
        //     url: "http://localhost:3010/api/v1/postRegistration",
        //     data: {
        //         firstName: firstName,
        //         lastName: lastName,
        //         username: username,
        //         email: email,
        //         password: password
        //     }
        // }).then((response: any) => {


        // })


    }

    return (
        <Box
            boxShadow={18}
            m={4}
            p={4}
            className="box-container"
        >
            <form autoComplete="false">
                <Row className="row-registration">
                    <Col>
                        <Row>
                            <Col>
                                <TextField
                                    inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                                    fullWidth={true}
                                    size={'small'}
                                    id="outlined-basic"
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
                                    id="outlined-basic"
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
                            id="outlined-basic"
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
                            id="outlined-basic"
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
                            id="outlined-basic"
                            label="סיסמא"
                            variant="outlined"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />

                    </Col>
                </Row>

                <Row className="error-row">
                    <p id="first-name-error error-line">dsa</p>
                    <p id="last-name-error error-line">ss</p>
                    <p id="username-name-error error-line">dd</p>
                    <p id="email-name-error error-line">aa</p>
                    <p id="password-name-error error-line">dd</p>
                </Row>

                <Row className="registration-row">
                    <Button onClick={applyRegistration} variant="outlined" color="primary">הרשם</Button>
                </Row>

            </form>
        </Box>
    )
};

export default RegistrationComponent;