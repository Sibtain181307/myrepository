import React, { Component } from "react";
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

import Address from "app/views/User/UserComponents/Address";
import Contact from "app/views/User/UserComponents/Contact";
export default class Location extends Component {
  Location = {
    address: {
      _long: 0,
      cityId: 0,
      geoLink: "string",
      lang: 0,
      streetAddress: "string",
    },
    addressId: 0,
    contact: {
      countryCode: "string",
      networkCode: 0,
      number: 0,
      numberType: "string",
    },
    contactId: 0,
    isAddressById: false,
    isContactById: false,
    statusId: 0,
    title: "string",
    type: "lastMile",
  };

  GetAddress = (props) => {
    this.Location.address = props;
  };
  GetContact = (props) => {
    this.Location.contact = props;
  };
  handleClick = (props) => {
    this.props.Data(this.Location);
  };
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{this.props.title}</h3>
          </Card.Title>
          <Row>
            <Address Data={this.GetAddress} />
            <Contact Data={this.GetContact} />
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Title ")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Title")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.Location.title = e.target.value;
                }}
                required
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Type ")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Type")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.Location.type = e.target.value;
                }}
                required
              />
            </Col>
            <Row className="mt-2">
              <Col className="d-flex justify-content-end align-items-center">
                <Button
                  className="mx-2 mb-2 "
                  variant="success"
                  onClick={this.handleClick}
                >
                  {t("Create")}
                </Button>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
