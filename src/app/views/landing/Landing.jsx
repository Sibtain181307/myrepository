import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./landing.scss";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  Form,
} from "react-bootstrap";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { setLang } from "../../../translations";
import { merge } from "lodash";
import { default as t } from "../../../translations";
import History from "@history";
const Landing = (props) => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const handleDirectionChange = () => {
    let { settings, setLayoutSettings } = props;
    let dir = settings.dir === "rtl" ? "ltr" : "rtl";
    dir === "rtl" ? setLang("ar") : setLang("en");

    document.documentElement.setAttribute("dir", dir);
    setLayoutSettings(
      merge({}, settings, {
        dir: dir,
      })
    );
  };
  return (
    <>
      <section className="navbar-section border-bottom border-4 border-success">
        <Navbar className="py-0 mb-1" collapseOnSelect expand="lg" bg="white">
          <Container fluid>
            <Navbar.Brand>
              <img
                src="/assets/images/ziyad-logo.png"
                style={{ width: "15rem" }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <GiHamburgerMenu color="#000000" fontSize={27} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav bg-success">
              <Nav className="ms-auto"></Nav>
              <Link to="/session/signin">
                <Button className="mx-2" variant="success">
                  {t("signin")}
                </Button>
              </Link>
              <Link to="/session/signup">
                <Button className="mx-2" variant="success">
                  {t("signup")}
                </Button>
              </Link>
              <Button
                className="mx-2"
                variant="success"
                onClick={handleDirectionChange}
              >
                {t("english")}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <section style={{ overflowX: "hidden" }} className="top-section px-0">
        <div className="my-5">
          <Row className="my-5 py-5">
            <h1
              className="text-center text-white fw-bold text-uppercase d-none d-md-block "
              style={{ fontSize: "7rem" }}
            >
              {t("Sonic Express")}
            </h1>

            <h1 className="text-center text-white fw-bold text-uppercase d-md-none text-60">
              {t("Sonic Express")}
            </h1>
            <Col className="d-flex justify-content-center align-items-center">
              <ButtonGroup>
                <Button variant="success" className="text-white">
                  {" "}
                  {t("returnShipment")}
                </Button>
                <Button
                  variant="success"
                  className="text-white"
                  onClick={executeScroll}
                >
                  {" "}
                  {t("serviceInquiry")}
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </div>
        <Row className="px-2 mx-md-5 mt-5">
          <div className="bg-white text-center mt-5">
            <h1 className="pt-5 fw-bold text-uppercase">
              {t("offeringServices")}{" "}
            </h1>
          </div>
        </Row>
        <Row>
          <div className="bg-white text-center">
            <h1 className="pt-2 fw-bold text-uppercase">
              {" "}
              {t("logisticsServices")}
            </h1>
          </div>
        </Row>
      </section>

      <section>
        <Container fluid className="bg-white py-5 ">
          <div className="px-sm-5">
            <Row>
              <Col md={4} className="d-flex justify-content-center mt-2">
                <Card className="bg-success text-white">
                  <Card.Img variant="bottom" src="assets/images/shipment.jpg" />
                  <Card.Body>
                    <Card.Title className="text-white">
                      {t("Cargo Services")}
                    </Card.Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Card.Body>
                  <Button variant="success" className="text-white">
                    {t("Go to Cargo ->")}
                  </Button>
                </Card>
              </Col>

              <Col md={4} className="d-flex justify-content-center mt-2">
                <Card className="bg-success text-white">
                  <Card.Img variant="top" src="assets/images/cargo.jpg" />
                  <Card.Body>
                    <Card.Title className="text-white">
                      {t("Cab Services")}
                    </Card.Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Card.Body>
                  <Button variant="success" className="text-white">
                    {t("Coming Soon")}
                  </Button>
                </Card>
              </Col>

              <Col md={4} className="d-flex justify-content-center mt-2">
                <Card className="bg-success text-white">
                  <Card.Img variant="top" src="assets/images/warehouse.jpg" />
                  <Card.Body>
                    <Card.Title className="text-white">
                      {t("Food Delivery")}
                    </Card.Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Card.Body>
                  <Button variant="success" className="text-white">
                    {t("Coming Soon")}
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid className="bg-white py-5 ">
          <div className="px-md-5">
            <Row>
              <Col md={12} className="d-flex justify-content-center mt-2">
                <Card className="bg-success text-white">
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <h1 className="text-white">
                        <b>{t("About Us")}</b>
                      </h1>
                    </Card.Title>

                    <p>
                      This is a sample paragraph. Here goes information of your
                      business, a short introdcutory section to explain what the
                      business is offering. This is a sample paragraph. Here
                      goes information of your business, a short introdcutory
                      section to explain what the business is offering. This is
                      a sample paragraph. Here goes information of your
                      business, a short introdcutory section to explain what the
                      business is offering. This is a sample paragraph. Here
                      goes information of your business, a short introdcutory
                      section to explain what the business is offering. This is
                      a sample paragraph. Here goes information of your
                      business, a short introdcutory section to explain what the
                      business is offering.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid className="bg-white py-5 ">
          <div className="px-md-5">
            <Row>
              <Col md={6} className="d-flex justify-content-center mt-2">
                <Card className="bg-success">
                  <Card.Body>
                    <Card.Title>
                      <h2 className="text-white">{t("Mission")}</h2>
                    </Card.Title>
                    <p className="text-white">
                      This is a sample paragraph. Here goes information of your
                      business, a short introdcutory section to explain what the
                      business is offering. This is a sample paragraph. Here
                      goes information of your business, a short introdcutory
                      section to explain what the business is offering.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="d-flex justify-content-center mt-2">
                <Card className="bg-success text-white">
                  <Card.Body>
                    <Card.Title>
                      <h2 className="text-white">{t("Vision")}</h2>
                    </Card.Title>
                    <p>
                      This is a sample paragraph. Here goes information of your
                      business, a short introdcutory section to explain what the
                      business is offering. This is a sample paragraph. Here
                      goes information of your business, a short introdcutory
                      section to explain what the business is offering.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section
        className="service-inquiry bg-white"
        style={{ overflowX: "hidden" }}
        ref={myRef}
      >
        <Row>
          <Col className="text-center">
            <h1 className="text-center text-black fw-bold">
              {t("serviceInquiry")}
            </h1>
            <p>Get in Contact to see how we can be of assitance</p>
          </Col>
        </Row>

        <Row className="my-2">
          <Col md={6} className="d-flex justify-content-center px-5">
            <Row>
              <Form.Control
                placeholder={t("name")}
                className="mt-2"
              ></Form.Control>
              <Form.Control
                placeholder={t("email")}
                className="mt-2"
              ></Form.Control>
              <Form.Control
                placeholder={t("enterMessage")}
                as="textarea"
                rows={10}
                className="mt-2"
              ></Form.Control>

              <Button className="mt-2 fw-bold " variant="outline-dark">
                {t("send")}
              </Button>
            </Row>
          </Col>

          <Col md={6} className="px-5">
            <img src="/assets/images/map.png" />
          </Col>
        </Row>
      </section>

      <footer className="footer py-5 bg-black text-white ">
        <Container className="text-start px-5 ">
          <Row>
            <Col xs={6} md={4} className=" mt-md-0 mt-3">
              <strong className="text-uppercase">Business Name</strong>
              <p></p>
              <p>
                This is a sample paragraph. Here goes information of your
                business, a short introdcutory section to explain what the
                business is offering.
              </p>
            </Col>

            <Col xs={6} md={4} className="mt-md-0 mt-3">
              <strong class="text-uppercase">Explore</strong>
              <p></p>
              <p>Shipments</p>
              <p>Cargo</p>
              <p> Customer Dashboard</p>
              <p> Shipper's Dashboard</p>
            </Col>

            <Col md={4} className="mt-md-0 mt-3">
              <strong class="text-uppercase">Get our mobile application</strong>
              <p></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

Landing.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
    setDefaultSettings,
  })(Landing)
);
