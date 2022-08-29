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
import Vehicle from "../UserComponents/Vehicle";
class AddFreelanceDriver extends Component {
  userDataDTO = {
    driverFreelanceDto: {
      compensation: null,
      compensationType: "",
      contractCode: "",
      currency: "",

      validityDate: "",
      contractAttachment: {
        attachmentType: "",
        description: "",
        filePath: "",
        fileType: "",
      },
      vehicle: {
        cargoCapacity: null,
        chassyNumber: "",
        make: "",
        makeYear: "",
        model: "",
        plateNumber: "",
        registrationNumber: "",
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
        headers: { SessionKey: "123", Event: "Create-Freelance-Driver" },
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
    this.userDataDTO.driverFreelanceDto.resource = props;
    console.log(this.userDataDTO.driverFreelanceDto.resource);
  };
  GetUser = (props) => {
    console.log(this.userDataDTO.driverFreelanceDto.user);
    this.userDataDTO.driverFreelanceDto.user = props;
  };
  GetWallet = (props) => {
    console.log(props);
    this.userDataDTO.driverFreelanceDto.wallet = props;
  };
  GetDriver = (props) => {
    console.log(props);
    this.userDataDTO.driverFreelanceDto.driver = props;
  };
  GetContractAttachment = (props) => {
    this.userDataDTO.driverFreelanceDto.contractAttachment = props;
  };
  GetVehicle = (props) => {
    this.userDataDTO.driverFreelanceDto.vehicle = props;
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

              <Row>
                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Compensation")} </h5>
                    </Form.Label>
                    <FormControl
                      placeholder="Compensation"
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
                      placeholder="Compensation Type"
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
                      <h5>{t("currency")} </h5>
                    </Form.Label>
                    <input
                      name="currency"
                      id="currency"
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.driverEmpDto.currency = e.target.value;
                      }}
                      placeholder="Currency"
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
                      placeholder="Currency"
                    />
                  </Col>
                </Row>
              </Row>
              <Row>
                <Vehicle Data={this.GetVehicle} />
              </Row>
              <User Data={this.GetUser} />
              <Row>
                <Wallet Data={this.GetWallet} />
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
export default AddFreelanceDriver;
