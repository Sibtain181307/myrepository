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
import Address from "app/views/User/UserComponents/Address";
import Contact from "app/views/User/UserComponents/Contact";
export default class AddHub extends Component {
  locationDataDTO = {
    hubDto: {
      accuringDate: "2022-04-03",
      amountPurchased: 1,
      currency: "abc",
      hubLocation: {
        address: {
          _long: 1,
          cityId: 1,
          geoLink: "abc",
          lang: 1,
          streetAddress: "abc",
        },
        contact: {
          countryCode: "abc",
          networkCode: 1,
          number: 1,
          numberType: "abc",
        },
        statusId: 1,
        title: "abc",
        type: "abc",
      },
      isSold: 0,
      soldAmount: 20,
      isPurchased: 1,
      rent: 1,
      validityDate: "2022-04-03",
    },
  };

  handleClick = (e) => {
    console.log(this.locationDataDTO);
    axios
      .post("http://15.235.141.168:70/location/add", this.locationDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Hub" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.locationDataDTO);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  GetContact = (props) => {
    console.log(props);
    this.locationDataDTO.hubDto.hubLocation.contact = props;
  };

  GetAddress = (props) => {
    console.log(props);
    this.resource.address = props;
    this.locationDataDTO.hubDto.hubLocation.address = props;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("viewhubs")} / {t("addhub")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Contact Data={this.GetContact} />
                  <Address Data={this.GetAddress} />
                  <Row>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Validity Date")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="yyyy-mm-dd"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.validityDate =
                            e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Status Id")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Status ID"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.hubLocation.statusId =
                            e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Title")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Title"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.hubLocation.title =
                            e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Type")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Type"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.hubLocation.type =
                            e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Amount Purchased")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Amount Purchased"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.amountPurchased =
                            parseInt(e.target.value, 10);
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Amount Sold")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Amount Sold"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.soldAmount = parseInt(
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
                        placeholder="Currency"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.currency = e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Is Purchased?")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Yes/No"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          {
                            e.target.value === true
                              ? (this.locationDataDTO.hubDto.isPurchased = 1)
                              : (this.locationDataDTO.hubDto.isPurchased = 0);
                          }
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Is Sold?")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Yes/No"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          {
                            e.target.value === true
                              ? (this.locationDataDTO.hubDto.isSold = 1)
                              : (this.locationDataDTO.hubDto.isSold = 0);
                          }
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Rent")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="Rent"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.hubDto.rent = parseInt(
                            e.target.value,
                            10
                          );
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
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
          </Form>
        </Row>
      </div>
    );
  }
}
