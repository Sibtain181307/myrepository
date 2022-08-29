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
import axios from "axios";
import GetCountry from "app/views/User/UserComponents/GetCountry";
import history from "@history";
import GetCity from "app/views/User/UserComponents/GetCity";
export default class EditFormHub extends Component {
  contactUpdateDto = {
    countryCode: "92",
    id: 1,
    networkCode: 22,
    number: 2220,
    numberType: "zon",
  };
  addressUpdateDto = {
    _long: 10,
    geoLink: "def",
    id: 1,
    lang: 111,
    streetAddress: "def",
  };
  handleClickAddress = (e) => {
    console.log(this.addressUpdateDto);
    axios
      .put("http://15.235.141.168:70/address/update", this.addressUpdateDto, {
        headers: { SessionKey: "123" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };
  handleClickContact = (e) => {
    console.log(this.contactUpdateDto);
    axios
      .put("http://15.235.141.168:70/contact/update", this.contactUpdateDto, {
        headers: { SessionKey: "123" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };
  componentDidMount() {
    console.log(this.props.location);
    this.addressUpdateDto =
      this.props.location.resource.custWarehouseDto.warehouse.address;
    this.contactUpdateDto =
      this.props.location.resource.custWarehouseDto.warehouse.contact;
    console.log(this.addressUpdateDto, this.contactUpdateDto);

    this.forceUpdate();
  }
  componentWillUnmount() {
    history.pushState({
      pathname: "/ViewCustomerWarehouse",
    });
  }
  Getid = () => {
    return this.props.location.id;
  };

  Get_city_id = (props) => {
    this.addressUpdateDto.cityId = parseInt(props, 10);
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Edit Customer Warehouse")} / {t("Edit")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Country Code")} </h5>
                    </Form.Label>

                    <FormControl
                      name="countryCode"
                      placeholder={t("Country Code")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.countryCode = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Network Code")} </h5>
                    </Form.Label>

                    <FormControl
                      name="networkCode"
                      placeholder={t("Network Code")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.networkCode = parseInt(
                          e.target.value,
                          10
                        );
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Number")} </h5>
                    </Form.Label>

                    <FormControl
                      name="number"
                      placeholder={t("Number")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.number = parseInt(
                          e.target.value,
                          10
                        );
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Number Type")} </h5>
                    </Form.Label>

                    <FormControl
                      name="numberType"
                      placeholder={t("Number Type")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.numberType = e.target.value;
                      }}
                    />
                  </Col>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
                      <Button
                        className="mx-2"
                        variant="success"
                        onClick={this.handleClickContact}
                      >
                        {t("Update")}
                      </Button>
                    </Col>
                  </Row>
                  <GetCountry />

                  <GetCity Data={this.Get_city_id} />

                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Street Address")} </h5>
                    </Form.Label>

                    <FormControl
                      name="streetAdress"
                      placeholder={t("Street Address")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.addressUpdateDto.streetAddress = e.target.value;
                      }}
                    />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("addLocation")} </h5>
                    </Form.Label>
                    <InputGroup>
                      <FormControl
                        placeholder={t("Add Location")}
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        name="AddLocation"
                      />
                      <Button
                        onClick={(e) => {
                          navigator.geolocation.getCurrentPosition(
                            (position) => {
                              console.log(
                                "Latitude : ",
                                position.coords.latitude
                              );
                              console.log(
                                "Longitude : ",
                                position.coords.longitude
                              );
                              this.addressUpdateDto.lang =
                                position.coords.latitude;
                              this.addressUpdateDto._long =
                                position.coords.longitude;
                            }
                          );
                        }}
                      >
                        {t("addLocation")}{" "}
                      </Button>
                    </InputGroup>
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Geo Link")} </h5>
                    </Form.Label>

                    <FormControl
                      placeholder={t("Geo Link")}
                      aria-label="Enddate"
                      name="GeoLink"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.addressUpdateDto.geoLink = e.target.value;
                      }}
                    />
                  </Col>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
                      <Button
                        className="mx-2"
                        variant="success"
                        onClick={this.handleClickAddress}
                      >
                        {t("Update")}
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
