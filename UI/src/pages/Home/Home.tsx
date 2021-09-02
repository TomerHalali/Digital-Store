import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <div className="home-page-images">
        <Row className="row-main-image">
          <Col>
            <Image
              className="test"
              src="https://nextshop.pk/wp-content/uploads/2018/08/New-Refurbished-Banner.jpg"
              fluid
              rounded
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
