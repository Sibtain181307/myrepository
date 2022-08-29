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
import { default as t } from "../../../translations";
import axios from "axios";
export default class EditProfile extends Component {
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
                      placeholder="First Name"
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
                      placeholder="Middle Name"
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
                      placeholder="Last Name"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.lastName = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("City Id")}</Form.Label>

                    <FormControl
                      placeholder="City Id"
                      aria-label="cityid"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.cityId = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("ID")}</Form.Label>

                    <FormControl
                      placeholder="ID"
                      aria-label="id"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.resourceUpdateDto.id = e.target.value;
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
                      <option selected>{t("-- Gender --")}</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
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
                      placeholder="ID"
                      aria-label="id"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.addressUpdateDto.id = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("addLocation")}</Form.Label>
                    <InputGroup>
                      <FormControl
                        placeholder="--Add Location--"
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
                      placeholder="--Add GeoLink--"
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
                      placeholder="Street Address"
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
                      placeholder="--CountryCode--"
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
                      placeholder="--Network Code--"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.networkCode = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("Number")}</Form.Label>

                    <FormControl
                      name="number"
                      placeholder="--Number--"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.number = e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("Number Type")}</Form.Label>

                    <FormControl
                      name="numberType"
                      placeholder="--Number Type--"
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
                      placeholder="--Number Type--"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.contactUpdateDto.id = e.target.value;
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
