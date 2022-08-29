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
import GetCity from "../UserComponents/GetCity";
import axios from "axios";
import history from "@history";
export default class EditForm extends Component {
  componentDidMount() {
    this.addressUpdateDto = this.props.location.resource.address;
    this.contactUpdateDto = this.props.location.resource.contact;
    this.resourceUpdateDto.firstName = this.props.location.resource.firstName;
    this.resourceUpdateDto.middleName = this.props.location.resource.middleName;
    this.resourceUpdateDto.lastName = this.props.location.resource.lastName;
    this.resourceUpdateDto.gender = this.props.location.resource.gender;
    this.resourceUpdateDto.id = this.props.location.resource.id;
    this.resourceUpdateDto.cityId = this.props.location.resource.cityId;
    this.forceUpdate();
    console.log(this.contactUpdateDto);
    console.log(this.addressUpdateDto);
    console.log(this.resourceUpdateDto);
  }
  addressUpdateDto = {
    _long: 10,
    geoLink: "def",
    id: 1,
    lang: 111,
    streetAddress: "def",
  };
  resourceUpdateDto = {
    cityId: 1,
    dateOfBirth: "2022-09-04",
    firstName: "def",
    gender: "def",
    id: 1,
    lastName: "def",
    middleName: "def",
  };
  contactUpdateDto = {
    countryCode: "92",
    id: 1,
    networkCode: 22,
    number: 2220,
    numberType: "zon",
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
  handleClickResource = (e) => {
    console.log(this.resourceUpdateDto);
    axios
      .put("http://15.235.141.168:70/resource/update", this.resourceUpdateDto, {
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
  GetCityID = (props) => {
    this.resourceUpdateDto.cityId = props;
  };
  componentWillUnmount() {
    console.log(this.props);
    history.push({
      pathname: this.props.location.path,
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Profile")} / {t("Edit Profile")}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={4} className="mt-2">
                    <Form.Label>{t("First Name")}</Form.Label>

                    <FormControl
                      placeholder={t("First Name")}
                      aria-label="Enddate"
                      name="firstname"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.firstName = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={4} className="mt-2">
                    <Form.Label>{t("Middle Name")}</Form.Label>

                    <FormControl
                      name="middlename"
                      placeholder={t("Middle Name")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.middleName = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={4} className="mt-2">
                    <Form.Label>{t("Last Name")}</Form.Label>

                    <FormControl
                      name="lastname"
                      placeholder={t("Last Name")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.lastName = e.target.value;
                      }}
                    />
                  </Col>
                  <GetCity Data={this.GetCityID} />
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("ID")}</Form.Label>

                    <FormControl
                      placeholder={t("ID")}
                      aria-label="id"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.id = parseInt(
                          e.target.value,
                          10
                        );
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("Gender")}</Form.Label>

                    <select
                      name="gender"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        this.resourceUpdateDto.gender = e.target.value;
                      }}
                    >
                      <option selected>{t("Gender")}</option>
                      <option value="Male">{t("Male")}</option>
                      <option value="Female">{t("Female")}</option>
                      <option value="Other">{t("Other")}</option>
                    </select>
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("Date of Birth")}</Form.Label>
                    <input
                      id="startDate"
                      class="form-control"
                      type="text"
                      placeholder="yyyy-mm-dd"
                      onChange={(e) => {
                        this.resourceUpdateDto.dateOfBirth;
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="d-flex justify-content-end align-items-center">
                    <Button
                      className="mx-2"
                      variant="success"
                      onClick={this.handleClickResource}
                    >
                      {t("Update")}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("ID")}</Form.Label>

                    <FormControl
                      placeholder={t("ID")}
                      aria-label="id"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.addressUpdateDto.id = parseInt(e.target.value, 10);
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("addLocation")}</Form.Label>
                    <InputGroup>
                      <FormControl
                        placeholder={t("Add Location")}
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
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
                        {t("addLocation")}
                      </Button>
                    </InputGroup>
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("GeoLink")}</Form.Label>

                    <FormControl
                      placeholder="GeoLink"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.addressUpdateDto.geoLink = e.target.value;
                      }}
                    />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("Street Address")}</Form.Label>

                    <FormControl
                      placeholder={t("Street Address")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.addressUpdateDto.streetAddress = e.target.value;
                      }}
                    />
                  </Col>
                </Row>
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
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("Country Code")}</Form.Label>

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
                    <Form.Label>{t("Network Code")}</Form.Label>

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
                    <Form.Label>{t("Number")}</Form.Label>

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
                    <Form.Label>{t("Number Type")}</Form.Label>

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
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("ID")}</Form.Label>

                    <FormControl
                      placeholder={t("ID")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.id = parseInt(e.target.value, 10);
                      }}
                    />
                  </Col>
                </Row>
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
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
