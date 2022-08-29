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
import GetVendorID from "../UserComponents/VendorIDGetter";
import Resource from "../UserComponents/Resource";
import User from "../UserComponents/user";
import Driver from "../UserComponents/Driver";
class AddVendorDriver extends Component {
  userDataDTO = {
    driverVendorDto: {
      compenstationType: "string",
      hasVehicle: true,
      vendorUser: {
        validityDate: "1990-03-04",
        venderId: 1,
        joiningDate: "1990-03-04",
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
            streetAddress: "abc",
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
      },
      driver: {
        codWallet: {
          title: "abc",
          balance: 2323,
          walletType: "abc",
        },
        licenceAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
        lisenceExpiry: "string",
        lisenceIssueDate: "string",
        lisenceNumber: "string",
      },
    },
  };
  handleClick = (e) => {
    console.log(this.userDataDTO);
    axios
      .post("http://15.235.141.168:70/user/add", this.userDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Vendor-Driver" },
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
    this.userDataDTO.driverVendorDto.resource = props;
    console.log(this.userDataDTO.driverVendorDto.resource);
  };
  GetUser = (props) => {
    console.log(this.userDataDTO.driverVendorDto.user);
    this.userDataDTO.driverVendorDto.vendorUser.user = props;
  };
  GetDriver = (props) => {
    console.log(props);
    this.userDataDTO.driverVendorDto.driver = props;
  };
  GetContractAttachment = (props) => {
    this.userDataDTO.driverVendorDto.contractAttachment = props;
  };
  GetVendor = (props) => {
    this.userDataDTO.driverVendorDto.vendorUser.venderId = props;
    console.log(this.userDataDTO.driverVendorDto.vendorUser);
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Vendor Driver")} / {t("Add Vendor Driver")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Row>
                    <Resource Data={this.GetResource} />
                    <Row>
                      <Row>
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
                              this.userDataDto.driverVendorDto.compensationType =
                                e.target.value;
                            }}
                          />
                        </Col>
                      </Row>
                    </Row>
                    <Row>
                      <Row>
                        <Col md={6} className="mt-2">
                          <Form.Label>
                            <h5>{t("Date of Joining")} </h5>
                          </Form.Label>
                          <input
                            placeholder="yyyy-mm-dd"
                            id="startDate"
                            class="form-control"
                            required
                            type="text"
                            onChange={(e) => {
                              this.userDataDTO.driverVendorDto.vendorUserDto.joiningDate =
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
                            id="startDate"
                            class="form-control"
                            required
                            type="text"
                            onChange={(e) => {
                              this.userDataDTO.vendorUserDto.vendorUser.validityDate =
                                e.target.value;
                            }}
                          />
                        </Col>
                        <GetVendorID Data={this.GetVendor} />
                      </Row>
                    </Row>

                    <User Data={this.GetUser} />
                    <Driver Dat={this.GetDriver} />
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
export default AddVendorDriver;
