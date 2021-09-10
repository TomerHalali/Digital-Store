import React from "react";
import { Row } from "react-bootstrap";
import "../Registration/RegistrationPageStyle.css";
import RegistrationComponent from '../../components/Registration/RegistrationComponent';

const Registration = () => {
    return (
        <div className="container-page-registration">
            <Row className="registration-page-row">
                <RegistrationComponent />
            </Row>

        </div>
    );
};

export default Registration;
