import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import validator from 'validator';
import { FcCheckmark } from 'react-icons/fc'
import { FcCancel } from 'react-icons/fc'
import "../Registration/RegistrationStyle.css";


const RegistrationComponent = () => {
    const axios = require('axios');
    const [userRegister, setUserRegister] = useState(false);

    //Input Variables 
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState("");

    //Input Styles
    const [errorBorder, setErrorBorder] = useState({ borderBottom: "1px red solid", borderRadius: "6px" });
    const [emptyStyle, setEmptyStyle] = useState({});

    
    //validation
    const [passwordRequierd, setPasswordRequierd] = useState({
        "numberOfDigits": false,
        "lowerCapital": false,
        "special": false,
        "match": false
    });

    const [isValid, setIsValid] = useState({
        "firstName": false,
        "lastName": false,
        "username": false,
        "email": false,
        "password": false,
        "passwoedValid": false
        
    });
    const [isDisabled, setIsDisabled] = useState(true);

    //Check for disabled Button
    useEffect(() => {
        let buttonDisabled = false;
        for (const value of Object.values(isValid)) {
            console.log(value);
            if (!value) {
                buttonDisabled = true;
            }
        }
        setIsDisabled(buttonDisabled);

    }, [isValid])

    //Cheack For Valid Email
    useEffect(() => {
        if (validator.isEmail(email)) {
            setIsValid({ ...isValid, email: true });
        } else {
            setIsValid({ ...isValid, email: false });
        }
    }, [email])

    //Cheack For Valid Passowrd
    useEffect(() => {
        let isNumberOfDigits = false;
        let isLowerCapital = false;
        let isSpecial = false;
        let isMatch = false;

        if(password){
            if(password === passwordValid){
                isMatch = true;
            }else{
                isMatch = false;
            }
        }

        if (password.length >= 10) {
            isNumberOfDigits = true;
        } else {
            isNumberOfDigits = false;
        }

        if (/[a-z]/g.test(password) && /[A-Z]/g.test(password)) {
            isLowerCapital = true;
        } else {
            isLowerCapital = false;
        }

        if (/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g.test(password)) {
            isSpecial = true;
        } else {
            isSpecial = false;
        }

        setPasswordRequierd({ ...passwordRequierd, lowerCapital: isLowerCapital, numberOfDigits: isNumberOfDigits, special: isSpecial, match: isMatch });

        if(isSpecial && isLowerCapital && isNumberOfDigits){
            setIsValid({ ...isValid, password: true });
        }else{
            setIsValid({ ...isValid, password: false });
        }

    }, [password])

    useEffect(() => {
        if (password) {
            if (password === passwordValid) {
                setPasswordRequierd({ ...passwordRequierd, match: true });
                setIsValid({ ...isValid, passwoedValid: true });
            } else {
                setPasswordRequierd({ ...passwordRequierd, match: false });
                setIsValid({ ...isValid, passwoedValid: false });
            }
        }
    }, [passwordValid])


    //Submit Registration
    function applyRegistration() {

        let allFieldsValid = true;
        for (const value of Object.values(isValid)) {
            console.log(value);
            if (!value) {
                allFieldsValid = false;
            }
        }

        if (allFieldsValid) {
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


    return (
        <Box
            boxShadow={18}
            m={4}
            p={4}
            className="box-container"
        >
            {userRegister && <Row>
                <p style={{ textAlign: 'center' }}>הרשמתך התקבלה בהצלחה למערכת</p>
            </Row>}
            {!userRegister && <form id="registration-form" autoComplete="false">
                <Row className="row-registration">
                    <Col>
                        <Row>
                            <Col>
                                <TextField
                                    inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                                    style={isValid.lastName ? emptyStyle : errorBorder}
                                    fullWidth={true}
                                    size={'small'}
                                    id="last-name-field"
                                    label="שם משפחה"
                                    variant="outlined"
                                    value={lastName}
                                    onKeyUp={(e) => { if (lastName === "") { setIsValid({ ...isValid, lastName: false }) } else { setIsValid({ ...isValid, lastName: true }) } }}
                                    onBlur={(e) => { if (lastName === "") { setIsValid({ ...isValid, lastName: false }) } else { setIsValid({ ...isValid, lastName: true }) } }}
                                    onChange={(e) => { setlastName(e.target.value) }}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    inputProps={{ maxLength: 20, style: { textAlign: 'center' } }}
                                    style={isValid.firstName ? emptyStyle : errorBorder}
                                    fullWidth={true}
                                    size={'small'}
                                    id="first-name-field"
                                    label="שם פרטי"
                                    variant="outlined"
                                    value={firstName}
                                    onKeyUp={(e) => { if (firstName === "") { setIsValid({ ...isValid, firstName: false }) } else { setIsValid({ ...isValid, firstName: true }) } }}
                                    onBlur={(e) => { if (firstName === "") { setIsValid({ ...isValid, firstName: false }) } else { setIsValid({ ...isValid, firstName: true }) } }}
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
                            style={isValid.username ? emptyStyle : errorBorder}
                            fullWidth={true}
                            size={'small'}
                            id="username-field"
                            label="כינוי"
                            variant="outlined"
                            value={username}
                            onKeyUp={(e) => { if (username === "") { setIsValid({ ...isValid, username: false }) } else { setIsValid({ ...isValid, username: true }) } }}
                            onBlur={(e) => { if (username === "") { setIsValid({ ...isValid, username: false }) } else { setIsValid({ ...isValid, username: true }) } }}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </Col>
                </Row>
                <Row className="row-registration">
                    <Col>
                        <TextField
                            inputProps={{ maxLength: 45, style: { textAlign: 'center' } }}
                            style={isValid.email ? emptyStyle : errorBorder}
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

                <Row className="row-registration">
                    <Row>
                        <p className="passrowd-validation-row-p">{passwordRequierd.numberOfDigits ? <FcCheckmark /> : <FcCancel />} <span className="text-password-validation"> At Least 10 Digits.</span></p>
                        <p className="passrowd-validation-row-p">{passwordRequierd.lowerCapital ? <FcCheckmark /> : <FcCancel />} <span className="text-password-validation"> Contain Lower-Case and Capital.</span></p>
                        <p className="passrowd-validation-row-p">{passwordRequierd.special ? <FcCheckmark /> : <FcCancel />} <span className="text-password-validation"> At Least 1 Special Character.</span></p>
                        <p className="passrowd-validation-row-p">{passwordRequierd.match ? <FcCheckmark /> : <FcCancel />} <span className="text-password-validation"> Password Match.</span></p>
                    </Row>
                </Row>

                <Row className="registration-row">
                    <Button disabled={isDisabled} onClick={applyRegistration} variant="outlined" color="primary">הרשם</Button>
                </Row>
            </form>}

        </Box>
    )
};

export default RegistrationComponent;