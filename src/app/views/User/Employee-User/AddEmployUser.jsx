import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { default as t } from "../../../../translations";
import axios from "axios";
import Resource from "../UserComponents/Resource";
import User from "../UserComponents/user";
import Wallet from "../UserComponents/Wallet";
class AddEmploy extends Component {
  userDataDTO = {
    employDto: {
      compensation: 212,
      compensationTenure: "a",
      compensationType: "b",
      contractCode: "0212",
      currency: "pkr",
      dateOfJoining: "2022-03-04",
      empType: "2",
      validityDate: "2023-03-04",
      contractAttachment: {
        attachmentType: "abc",
        description: "abc",
        filePath: "abc",
        fileType: "abc",
      },
      resource: {
        firstName: "abc",
        middleName: "abc",
        lastName: "abc",
        gender: "abc",
        dateOfBirth: "1990-03-04",
        nic: "abc",

        nicAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
        address: {
          _long: 22,
          cityId: 1,
          streetAddress: "23234",
          lang: 222,
          geoLink: "abc",
        },

        contact: {
          countryCode: "abc",
          networkCode: 232,
          number: 314,
          numberType: "abc",
        },
      },
      user: {
        userName: "abc",
        password: "abc",
        roleId: 1,
      },
      wallet: {
        title: "abc",
        balance: 2323,
        walletType: "abc",
      },
    },
  };
  handleClick = (e) => {
    console.log(this.userDataDTO);
    axios
      .post("http://15.235.141.168:70/user/add", this.userDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Employ" },
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
    this.userDataDTO.employDto.resource = props;
    console.log(this.userDataDTO.employDto.resource);
  };
  GetUser = (props) => {
    console.log(props);
    this.userDataDTO.employDto.user = props;
    console.log(this.userDataDTO.employDto.user);
  };
  GetWallet = (props) => {
    console.log(props);
    this.userDataDTO.employDto.wallet = props;
    console.log(this.userDataDTO.employDto.wallet);
    console.log(this.userDataDTO.employDto);
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Employ User")} / {t("Add Employ User")}{" "}
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
                        this.userDataDTO.employDto.compensation = parseInt(
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
                        this.userDataDTO.employDto.compensationType =
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
                        this.userDataDTO.employDto.compensationTenure =
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
                        this.userDataDTO.employDto.dateOfJoining =
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
                        this.userDataDTO.employDto.validityDate =
                          e.target.value;
                      }}
                    />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Currency")} </h5>
                    </Form.Label>
                    <input
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.employDto.currency = e.target.value;
                      }}
                      placeholder={t("Currency")}
                    />
                  </Col>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      <h5>{t("Contract Code")} </h5>
                    </Form.Label>
                    <input
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        this.userDataDTO.employDto.contractCode =
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
                          this.userDataDTO.employDto.empType = e.target.value;
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
export default AddEmploy;
