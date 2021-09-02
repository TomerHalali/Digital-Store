import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import "../Login/LoginStyle.css";

const Login = () => {
    return (
            <Box
                boxShadow={18}
                m={4}
                p={4}
                className="box-container"
            >
                <form autoComplete="false">
                    <Row className="login-row"> <TextField size={'small'} id="outlined-basic" label="שם משתמש" variant="outlined" /> </Row>
                    <Row className="login-row"> <TextField size={'small'} type="password" id="outlined-basic" label="סיסמא" variant="outlined" /> </Row>
                    <Row><p className="error-message-login"></p></Row>
                    <Row className="login-row" ><Button type="submit" variant="outlined" color="primary">התחבר</Button></Row>
                </form>
            </Box>
    )
};

export default Login;