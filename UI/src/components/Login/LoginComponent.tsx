import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import "../Login/LoginStyle.css";
import { useDispatch } from 'react-redux'
import * as loginActions from '../../redux/action/login.action';
import UserDetails from '../../model/UserDetails';




const Login = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function applyLogin() {
        const userDetails = new UserDetails(userName, password);
        dispatch(loginActions.loginAction(userDetails));
    }

    return (
        <Box
            boxShadow={18}
            m={4}
            p={4}
            className="box-container"
        >
            <form autoComplete="false">
                <Row className="login-row">
                    <TextField
                        size={'small'}
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                        id="outlined-basic"
                        label="שם משתמש"
                        variant="outlined" />
                </Row>
                <Row className="login-row">
                    <TextField
                        size={'small'}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password"
                        id="outlined-basic"
                        label="סיסמא"
                        variant="outlined" />
                </Row>
                <Row><p className="error-message-login">גדשגדש</p></Row>
                <Row className="login-row" >
                    <Button onClick={applyLogin} variant="outlined" color="primary">התחבר</Button>
                </Row>
            </form>
        </Box>
    )
};

export default Login;