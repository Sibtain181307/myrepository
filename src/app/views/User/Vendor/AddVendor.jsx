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
import BusinessProfile from "../UserComponents/BusinessProfile";
import Attachment from "../UserComponents/Attachment";
import Wallet from "../UserComponents/Wallet";
export default class AddVendor extends Component {
  businessDataDTO = {
    vendorDto: {
      businessProfile: {
        address: {
          _long: 20,
          cityId: 1,
          geoLink: "abc",
          lang: 20,
          streetAddress: "abc",
        },
        contact: {
          countryCode: "abc",
          networkCode: 20,
          number: 220,
          numberType: "abc",
        },
        crAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
        crNumber: 1,
        displayName: "abc",
        logoAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
        name: "abc",
        taxNumber: 1,
        vatAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
      },
      contractAttachment: {
        attachmentType: "abc",
        description: "abc",
        filePath: "abc",
        fileType: "abc",
      },
      contractCode: "2022-07-18T07:01:12.298Z",
      currency: "abc",
      paymentPerCargo: 10,
      paymentPerHour: 10,
      paymentPerMonth: 10,
      paymentTenure: "abc",
      validityDate: "2022-07-18T07:01:12.298Z",
      wallet: {
        balance: 0,
        title: "abc",
        walletType: "abc",
      },
    },
  };
  handleClick = (e) => {
    console.log(this.businessDataDTO);
    axios
      .post("http://15.235.141.168:70/business/add", this.businessDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Vendor" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.businessDataDTO);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  GetContractAttachment = (props) => {
    this.businessDataDTO.vendorDto.contractAttachment = props;
  };
  GetBusinessProfile = (props) => {
    this.businessDataDTO.vendorDto.businessProfile = props;
  };
  GetWallet = (props) => {
    this.businessDataDTO.vendorDto.Wallet = props;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Vendor")} / {t("Add Vendor")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <BusinessProfile Data={this.GetBusinessProfile} />

                  <Row>
                    <Wallet Data={this.GetWallet} />
                  </Row>
                  <Row>
                    <Row>
                      <Attachment
                        Data={this.GetContractAttachment}
                        Headline="Contract Attachment"
                      />
                      <Col md={6} className="mt-2">
                        <Form.Label>
                          <h5>{t("Currency")} </h5>
                        </Form.Label>
                        <FormControl
                          placeholder="Currency"
                          aria-label="Currency"
                          name="walletType"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            this.businessDataDTO.customerBusiness.currency =
                              e.target.value;
                          }}
                        />
                      </Col>
                      <Col md={6} className="mt-2">
                        <Form.Label>
                          <h5>{t("Payment Per hour")} </h5>
                        </Form.Label>
                        <FormControl
                          placeholder="Payment Per hour"
                          aria-label="PaymentPerhour"
                          name="walletType"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            this.businessDataDTO.customerBusiness.paymentPerHour =
                              parseInt(e.target.value, 10);
                          }}
                        />
                      </Col>
                      <Col md={6} className="mt-2">
                        <Form.Label>
                          <h5>{t("Payment Per cargo")} </h5>
                        </Form.Label>
                        <FormControl
                          placeholder="Payment Per cargo"
                          aria-label="PaymentPercargo"
                          name="walletType"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            this.businessDataDTO.customerBusiness.paymentPerCargo =
                              parseInt(e.target.value, 10);
                          }}
                        />
                      </Col>
                      <Col md={6} className="mt-2">
                        <Form.Label>
                          <h5>{t("Payment Per month")} </h5>
                        </Form.Label>
                        <FormControl
                          placeholder="Payment Per month"
                          aria-label="PaymentPermonth"
                          name="walletType"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            this.businessDataDTO.customerBusiness.paymentPerMonth =
                              parseInt(e.target.value, 10);
                          }}
                        />
                      </Col>
                      <Col md={6} className="mt-2">
                        <Form.Label>
                          <h5>{t("Payment Per tenure")} </h5>
                        </Form.Label>
                        <FormControl
                          placeholder="Payment Per tenure"
                          aria-label="PaymentPertenure"
                          name="walletType"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            this.businessDataDTO.customerBusiness.paymentTenure =
                              e.target.value;
                          }}
                        />
                      </Col>
                      <Col md={6} className="mt-2">
                        <Form.Label>
                          <h5>{t("Validity Date")} </h5>
                        </Form.Label>
                        <FormControl
                          placeholder="yyyy-mm-dd"
                          aria-label="validity Date"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            this.businessDataDTO.customerBusiness.validityDate =
                              e.target.value;
                          }}
                        />
                      </Col>
                    </Row>
                  </Row>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
                      <Button
                        className="mx-2"
                        variant="success"
                        onClick={this.handleClick}
                      >
                        {t("Save All Data")}
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
