import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { default as t } from "../../../../translations";
export default class Contact extends Component {
  contact = {
    countryCode: "",
    networkCode: 0,
    number: 0,
    numberType: "",
  };
  handleClick = () => {
    this.props.Data(this.contact);
  };
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{this.props.title}</h3>
          </Card.Title>

          <Row>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Country Code")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Country Code")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.contact.countryCode = e.target.value;
                }}
                required
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Network Code")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Network Code")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.contact.networkCode = parseInt(e.target.value, 10);
                }}
                required
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Number")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Number")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.contact.number = parseInt(e.target.value, 10);
                }}
                required
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Number Type")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Number Type")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.contact.numberType = e.target.value;
                }}
                required
              />
            </Col>
            <Row className="mt-2 ">
              <Col className="d-flex justify-content-end">
                <Button
                  className="mx-2"
                  variant="success"
                  onClick={this.handleClick}
                >
                  {t("create")}
                </Button>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
