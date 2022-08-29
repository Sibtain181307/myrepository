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
export default class AddCustomerWareHouse extends Component {
  locationDataDTO = {
    custWarehouseDto: {
      validityDate: "2202-04-03",
      bizCustId: 1,
      warehouse: {
        address: {
          _long: null,
          cityId: null,
          geoLink: "",
          lang: null,
          streetAddress: "",
        },
        addressId: 0,
        contact: {
          countryCode: "",
          networkCode: null,
          number: null,
          numberType: "",
        },
        contactId: 0,
        statusId: null,
        title: "",
        type: "",
        isAddressById: false,
        isContactById: false,
      },
    },
  };
  handleClick = (e) => {
    console.log(this.locationDataDTO);
    axios
      .post("http://15.235.141.168:70/location/add", this.locationDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Biz-Cust-Warehouse" },
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
    this.locationDataDTO.custWarehouseDto.warehouse.contact = props;
  };

  GetAddress = (props) => {
    console.log(props);
    this.locationDataDTO.custWarehouseDto.warehouse.address = props;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("viewCustomerWareHouses")} / {t("addCustomerWareHouse")}{" "}
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
                        <h5>{t("Business Customer ID")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder={t("Business Customer ID")}
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.custWarehouseDto.bizCustId =
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
                          this.locationDataDTO.custWarehouseDto.warehouse.statusId =
                            parseInt(e.target.value, 10);
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Validity Date")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder="yyyy-mm-dd"
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.locationDataDTO.custWarehouseDto.validityDate =
                            e.target.value;
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
                          this.locationDataDTO.custWarehouseDto.warehouse.title =
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
                          this.locationDataDTO.custWarehouseDto.warehouse.type =
                            e.target.value;
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
