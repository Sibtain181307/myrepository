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
import { default as t } from "../../../../../translations";
import axios from "axios";
import Wallet from "../../UserComponents/Wallet";
import BusinessProfile from "./../../UserComponents/BusinessProfile";
import Charges from "../../UserComponents/Charges";
import Attachment from "../../UserComponents/Attachment";
export default class BusinessController extends Component {
  businessDataDTO = {
    customerBusinessDto: {
      billingTenure: "",
      billingType: "",
      businessProfile: {
        address: {
          _long: null,
          cityId: null,
          geoLink: "",
          lang: null,
          streetAddress: "",
        },
        contact: {
          countryCode: "",
          networkCode: null,
          number: null,
          numberType: "",
        },
        crAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
        crNumber: null,
        displayName: "",
        logoAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
        name: "",
        taxNumber: null,
        vatAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
      },
      chargerInterCity: null,
      chargesCodCollection: null,
      chargesInsurancePercentage: null,
      chargesInterCountry: null,
      chargesOnlinePayment: null,
      chargesPerKg: null,
      chargesReturn: null,
      chargesSameCity: null,
      chargesWallet: {
        balance: null,
        title: "",
        walletType: "",
      },
      codWallet: {
        balance: null,
        title: "",
        walletType: "",
      },
      contractAttachment: {
        attachmentType: "",
        description: "",
        filePath: "",
        fileType: "",
      },
      contractCode: "",
      creditLimit: null,
      isChargesGeneral: null,
      validityDate: "",
    },
  };
  handleClick = (e) => {
    console.log(this.businessDataDTO);
    axios
      .post("http://15.235.141.168:70/business/add", this.businessDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Customer" },
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
  GetCODWallet = (props) => {
    this.businessDataDTO.customerBusinessDto.codWallet = props;
  };
  GetContractAttachment = (props) => {
    this.businessDataDTO.customerBusinessDto.contractAttachment = props;
  };
  GetBusinessProfile = (props) => {
    console.log(props);
    this.businessDataDTO.customerBusinessDto.businessProfile = props;
  };
  GetCharges = (props) => {
    this.businessDataDTO.customerBusinessDto.chargerInterCity =
      props.chargerInterCity;
    this.businessDataDTO.customerBusinessDto.chargerInterCity =
      props.chargerInterCity;
    this.businessDataDTO.customerBusinessDto.chargesCodCollection =
      props.chargesCodCollection;
    this.businessDataDTO.customerBusinessDto.chargesInsurancePercentage =
      props.chargesInsurancePercentage;
    this.businessDataDTO.customerBusinessDto.chargesInterCountry =
      props.chargerInterCity;
    this.businessDataDTO.customerBusinessDto.chargesOnlinePayment =
      props.chargesOnlinePayment;
    this.businessDataDTO.customerBusinessDto.chargesPerKg = props.chargesPerKg;
    this.businessDataDTO.customerBusinessDto.chargesReturn =
      props.chargesReturn;
    this.businessDataDTO.customerBusinessDto.chargesSameCity =
      props.chargesSameCity;
    this.businessDataDTO.customerBusinessDto.chargesWallet =
      props.chargesWallet;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Business")} / {t("Add Business")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <BusinessProfile Data={this.GetBusinessProfile} />
                <Charges Data={this.GetCharges} />

                <Row>
                  <Wallet Data={this.GetCODWallet} title="COD" />
                  <Row>
                    <Attachment
                      Data={this.GetContractAttachment}
                      Headline="Contract Attachment"
                    />

                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Billing Tenure")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder={t("Billing Tenure")}
                        aria-label="Billing tenure"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.businessDataDTO.customerBusinessDto.billingTenure =
                            e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Billing Type")} </h5>
                      </Form.Label>

                      <FormControl
                        placeholder={t("Billing Type")}
                        aria-label="Billing Type"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.businessDataDTO.customerBusinessDto.billingType =
                            e.target.value;
                        }}
                      />
                    </Col>

                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Contract Code")} </h5>
                      </Form.Label>
                      <FormControl
                        placeholder={t("Contract Code")}
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.businessDataDTO.customerBusiness.contractCode =
                            e.target.value;
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Credit Limit")} </h5>
                      </Form.Label>
                      <FormControl
                        placeholder={t("Credit Limit")}
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          this.businessDataDTO.customerBusiness.creditLimit =
                            parseInt(e.target.value, 10);
                        }}
                      />
                    </Col>
                    <Col md={6} className="mt-2">
                      <Form.Label>
                        <h5>{t("Is Charges General")} </h5>
                      </Form.Label>
                      <FormControl
                        placeholder={t("yes/no")}
                        aria-label="Enddate"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          {
                            e.target.value === true
                              ? (this.businessDataDTO.customerBusiness.isChargesGeneral = 1)
                              : (this.businessDataDTO.customerBusiness.isChargesGeneral = 0);
                          }
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
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
