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

import Resource from "../UserComponents/Resource";
import User from "../UserComponents/user";
import Wallet from "../UserComponents/Wallet";
import Driver from "../UserComponents/Driver";
import Attachment from "./../UserComponents/Attachment";
class AddEmpDriver extends Component {
  userDataDTO = {
    driverEmpDto: {
      compensation: null,
      compensationTenure: "",
      compensationType: "",
      contractCode: "",
      currency: "",
      dateOfJoining: "",
      empType: "",
      validityDate: "",
      contractAttachment: {
        attachmentType: "",
        description: "",
        filePath: "",
        fileType: "",
      },
      resource: {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        nic: "",

        nicAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
        address: {
          _long: null,
          cityId: null,
          streetAddress: "",
          lang: null,
          geoLink: "",
        },

        contact: {
          countryCode: "",
          networkCode: null,
          number: null,
          numberType: "",
        },
      },
      user: {
        userName: "",
        password: "",
        roleId: null,
      },
      wallet: {
        title: "",
        balance: null,
        walletType: "",
      },
      driver: {
        codWallet: {
          title: "",
          balance: null,
          walletType: "",
        },
        licenceAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
        lisenceExpiry: "",
        lisenceIssueDate: "",
        lisenceNumber: "",
      },
    },
  };
  handleClick = (e) => {
    console.log(this.userDataDTO);
    axios
      .post("http://15.235.141.168:70/user/add", this.userDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Driver-Employ" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.userDataDTO);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  GetResource = (props) => {
    console.log(props);
    this.userDataDTO.driverEmpDto.resource = props;
    console.log(this.userDataDTO.driverEmpDto.resource);
  };
  GetUser = (props) => {
    this.userDataDTO.driverEmpDto.user = props;
    console.log(this.userDataDTO.driverEmpDto.user);
  };
  GetWallet = (props) => {
    console.log(props);
    this.userDataDTO.driverEmpDto.wallet = props;
  };
  GetDriver = (props) => {
    console.log(props);
    this.userDataDTO.driverEmpDto.driver = props;
  };
  GetContractAttachment = (props) => {
    this.userDataDTO.driverEmpDto.contractAttachment = props;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Employ Driver")} / {t("Add Employ Driver")}{" "}
            </h2>
          </Col>
          <Row>
            <Row>
              <Resource Data={this.GetResource} />
              <User Data={this.GetUser} />
              <Row>
                <Wallet Data={this.GetWallet} />
              </Row>
              <Row>
                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Compensation")} </h5>
                    </Form.Label>
                    <FormControl
                      placeholder={t("Compensation")}
                      aria-label="Enddate"
                      name="compensation"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.compensation = parseInt(
                          e.target.value,
                          10
                        );
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Compensation Type")} </h5>
                    </Form.Label>
                    <FormControl
                      placeholder={t("Compensation Type")}
                      aria-label="Enddate"
                      name="compensationType"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.compensationType =
                          e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Compensation Tenure")} </h5>
                    </Form.Label>
                    <FormControl
                      placeholder={t("Compensation Tenure")}
                      aria-label="Enddate"
                      name="compensationTenure"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.compensationTenure =
                          e.target.value;
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Date of Joining")} </h5>
                    </Form.Label>
                    <input
                      placeholder="yyyy-mm-dd"
                      id="startDate"
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.dateOfJoining =
                          e.target.value;
                        console.log(e.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Validity Date")} </h5>
                    </Form.Label>
                    <input
                      placeholder="yyyy-mm-dd"
                      id="validityDate"
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.validityDate =
                          e.target.value;
                      }}
                    />
                  </Col>
                  <Attachment
                    Headline="Contract Attachment"
                    Data={this.GetContractAttachment}
                  />

                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Currency")} </h5>
                    </Form.Label>
                    <input
                      name="currency"
                      id="currency"
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.currency = e.target.value;
                      }}
                      placeholder={t("Currency")}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Contract Code")} </h5>
                    </Form.Label>
                    <input
                      name="contractCode"
                      id="contractCode"
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.contractCode =
                          e.target.value;
                      }}
                      placeholder={t("Contract Code")}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Employ Type")} </h5>
                    </Form.Label>

                    <InputGroup>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          this.userDataDTO.driverEmpDto.empType =
                            e.target.value;
                        }}
                        name="empType"
                      >
                        <option selected>{t("Employ Type")}</option>
                        <option value="Director">{t("Director")}</option>
                        <option value="Manager">{t("Manager")}</option>
                        <option value="Assistant Manager">
                          {t("Assistant Manager")}
                        </option>
                        <option value="Driver">{t("Driver")}</option>
                        <option value="Supervisor">{t("Supervisor")}</option>
                      </select>
                    </InputGroup>
                  </Col>
                </Row>
              </Row>
              <Driver Data={this.GetDriver} />
            </Row>
          </Row>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
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

export default AddEmpDriver;
