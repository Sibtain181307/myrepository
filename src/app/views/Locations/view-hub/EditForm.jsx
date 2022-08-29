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
import history from "@history";
import DataFetcher from "app/views/User/UserComponents/DataFetcher";
import GetCountry from "app/views/User/UserComponents/GetCountry";
import GetCity from "app/views/User/UserComponents/GetCity";
export default class EditFormHub extends Component {
  hubUpdateDto = {
    accuringDate: "",
    amountPurchased: 0,
    currency: "",
    id: 0,
    isPurchased: 0,
    isSold: 0,
    rent: 0,
    soldAmount: 0,
    validityDate: "",
  };
  contactUpdateDto = {
    countryCode: "",
    id: null,
    networkCode: null,
    number: null,
    numberType: "",
  };
  addressUpdateDto = {
    _long: null,
    geoLink: "",
    id: null,
    lang: null,
    streetAddress: "",
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
    console.log(this.props);
    console.log(this.hubUpdateDto);
    this.hubUpdateDto.accuringDate =
      this.props.location.resource.hubDto.hubLocation.accuringDate;
    this.hubUpdateDto.validityDate =
      this.props.location.resource.hubDto.hubLocation.validityDate;
    this.hubUpdateDto.currency =
      this.props.location.resource.hubDto.hubLocation.currency;
    this.hubUpdateDto.soldAmount =
      this.props.location.resource.hubDto.hubLocation.soldAmount;
    this.addressUpdateDto =
      this.props.location.resource.hubDto.hubLocation.address;
    this.contactUpdateDto =
      this.props.location.resource.hubDto.hubLocation.contact;
    this.hubUpdateDto.rent =
      this.props.location.resource.hubDto.hubLocation.rent;

    this.forceUpdate();
  }
  Getid = () => {
    return this.props.location.id;
  };

  handleClick = (e) => {
    console.log(this.EditData);
    axios
      .put("http://15.235.141.168:70/hub/update", this.EditData, {
        headers: { SessionKey: "123" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 211) {
          return res.data.data;
        } else {
          throw new Error(res.this.locationDataDTO);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  Get_city_id = (props) => {
    this.addressUpdateDto.cityId = props;
  };
  componentWillUnmount() {
    history.push({
      pathname: "/hub/viewhubs",
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Edit Hub")} / {t("Edit")}{" "}
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
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Validity Date")} </h5>
                    </Form.Label>

                    <FormControl
                      placeholder="yyyy-mm-dd"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.hubUpdateDto.validityDate = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Amount Purchased")} </h5>
                    </Form.Label>

                    <FormControl
                      placeholder={t("Amount Purchased")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.hubUpdateDto.amountPurchased = parseInt(
                          e.target.value,
                          10
                        );
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Currency")} </h5>
                    </Form.Label>

                    <FormControl
                      placeholder={t("Currency")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.hubUpdateDto.currency = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Is Purchased?")} </h5>
                    </Form.Label>

                    <FormControl
                      placeholder="yes/no"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        {
                          e.target.value === true
                            ? (this.hubUpdateDto.isPurchased = 1)
                            : (this.hubUpdateDto.isPurchased = 0);
                        }
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Rent")} </h5>
                    </Form.Label>

                    <FormControl
                      placeholder={t("Rent")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.hubUpdateDto.rent = parseInt(e.target.value, 10);
                      }}
                    />
                  </Col>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
                      <Button
                        className="mx-2"
                        variant="success"
                        onClick={this.handleClick}
                      >
                        {t("Edit")}
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
