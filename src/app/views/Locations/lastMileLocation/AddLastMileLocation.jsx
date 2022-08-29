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

import axios from "axios";

import { default as t } from "../../../../translations";
import Address from "app/views/User/UserComponents/Address";
import Contact from "app/views/User/UserComponents/Contact";
export default class AddLastMileLocation extends Component {
  locationDataDTO = {
    lastmileLocationDto: {
      isLocationById: false,
      custId: 0,
      location: {
        address: {
          _long: 0,
          cityId: 0,
          geoLink: "",
          lang: 0,
          streetAddress: "",
        },
        addressId: 0,
        contact: {
          countryCode: 0,
          networkCode: 0,
          number: 0,
          numberType: "",
        },
        contactId: 0,
        statusId: 0,
        title: "",
        type: "",
        isAddressById: false,
        isContactById: false,
      },
      locationId: 0,
    },
  };
  handleClick = (e) => {
    console.log(this.locationDataDTO);
    axios
      .post("http://15.235.141.168:70/location/add", this.locationDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Cust-Location" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.locationDataDTO);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  GetContact = (props) => {
    console.log(props);
    this.locationDataDTO.lastmileLocationDto.location.contact = props;
  };

  GetAddress = (props) => {
    console.log(props);
    this.locationDataDTO.lastmileLocationDto.location.address = props;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("View LastMile Location")} / {t("Add")}
            </h2>
          </Col>
        </Row>

        <Row className="mt-2">
          <Form>
            <Row>
              <Contact Data={this.GetContact} />
              <Address Data={this.GetAddress} />
              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    <h5>{t("Customer ID")} </h5>
                  </Form.Label>

                  <FormControl
                    placeholder={t("Customer ID")}
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      this.locationDataDTO.lastmileLocationDto.custId =
                        parseInt(e.target.value, 10);
                    }}
                  />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    <h5>{t("Status Id")} </h5>
                  </Form.Label>

                  <FormControl
                    placeholder={t("Status Id")}
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      this.locationDataDTO.lastmileLocationDto.location.statusId =
                        parseInt(e.target.value, 10);
                    }}
                  />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    <h5>{t("Title")} </h5>
                  </Form.Label>

                  <FormControl
                    placeholder={t("Title")}
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      this.locationDataDTO.lastmileLocationDto.location.title =
                        e.target.value;
                    }}
                  />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    <h5>{t("Type")} </h5>
                  </Form.Label>

                  <FormControl
                    placeholder={t("Type")}
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      this.locationDataDTO.lastmileLocationDto.location.type =
                        e.target.value;
                    }}
                  />
                </Col>
              </Row>
            </Row>

            <Row className="mt-2 ">
              <Col className="d-flex justify-content-end">
                <Button className="mx-2" variant="danger">
                  {t("discard")}
                </Button>{" "}
                <Button
                  className="mx-2"
                  variant="success"
                  onClick={this.handleClick}
                >
                  {t("create")}
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    );
  }
}
