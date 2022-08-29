import React, { useState } from "react";
// import { Formik } from "formik";
// import * as yup from "yup";
import { connect } from "react-redux";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessions.css";
import { default as t } from "../../../translations";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    repassword: "",
  });

  return (
    <>
      <div className="mx-5">
        <Modal
          style={{ backdropFilter: "grayscale(0.5) opacity(0.8)" }}
          show={show}
          onHide={handleClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              {t("continueRegistration")}
            </Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body className="px-3">
              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label className="text-muted">
                    {t("dateOfBirth")}
                  </Form.Label>
                  <Form.Control type="date" className="rounded-pill" />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label className="text-muted">
                    {" "}
                    {t("nidNumber")}
                  </Form.Label>
                  <Form.Control type="number" className="rounded-pill" />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label className="text-muted">
                    {" "}
                    {t("uploadNid")}
                  </Form.Label>
                  <Form.Control type="file" className="rounded-pill" />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label className="text-muted"> {t("city")}</Form.Label>
                  <Form.Control type="text" className="rounded-pill" />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label className="text-muted">
                    {" "}
                    {t("country")}
                  </Form.Label>
                  <Form.Control type="text" className="rounded-pill" />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label className="text-muted">
                    {" "}
                    {t("postalCode")}
                  </Form.Label>
                  <Form.Control type="text" className="rounded-pill" />
                </Col>
              </Row>

              <Row>
                <Col className="mt-2 text-center" md={12}>
                  <Button type="submit" className="rounded-pill">
                    {t("submit")}
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
          </Form>
        </Modal>
      </div>

      <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/logistics.png)",
        }}
      >
        <div className="auth-content">
          <div className="card o-hidden">
            <div className="row">
              <div
                className="col-md-6 text-center bg-white"
                // style={{
                //   backgroundSize: "cover",
                //   backgroundImage: "url(/assets/images/photo-long-3.jpg)",
                // }}
              >
                <div className="ps-3 auth-right">
                  <div className=" text-center mt-4">
                    <img src="/assets/images/ziyad-logo.png " alt="Logo" />
                  </div>
                  <div className="flex-grow-1"></div>
                  <div className="w-100 mb-4"></div>
                  <div className="flex-grow-1"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4">
                  <h1 className="mb-3 text-18"> {t("signup")}</h1>
                  <Form>
                    <div>
                      <Form.Label className="text-muted">
                        {t("firstName")}
                      </Form.Label>
                      <Form.Control className="rounded-pill" type="text" />
                    </div>
                    <div className="mt-2">
                      <Form.Label className="text-muted">
                        {t("lastName")}
                      </Form.Label>
                      <Form.Control className="rounded-pill" type="text" />
                    </div>

                    <div className="mt-2">
                      <Form.Label className="text-muted">
                        {" "}
                        {t("email")}
                      </Form.Label>
                      <Form.Control
                        className="rounded-pill"
                        type="email"
                        required
                        validation="please enter a valid email address"
                      />
                    </div>

                    <div className="mt-2">
                      <Form.Label className="text-muted">
                        {t("contactNumber")}
                      </Form.Label>
                      <Form.Control className="rounded-pill" type="text" />
                    </div>

                    <div className="mt-2">
                      <Form.Label className="text-muted">
                        {" "}
                        {t("password")}
                      </Form.Label>
                      <Form.Control className="rounded-pill" type="password" />
                    </div>

                    <div className="mt-2">
                      <Form.Label className="text-muted">
                        {t("confirmPassword")}
                      </Form.Label>
                      <Form.Control className="rounded-pill" type="password" />
                    </div>

                    <Button
                      className="w-100 my-1 rounded-pill border-0 text-white mt-3 bg-success"
                      type="submit"
                      onClick={handleShow}
                    >
                      {t("signup")}
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Signup);
