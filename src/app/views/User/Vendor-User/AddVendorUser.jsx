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

class AddVendorUser extends Component {
  userDataDTO = {
    vendorUserDto: {
      validityDate: "2022-03-04",
      venderId: 1,
      joiningDate: "2020-03-04",
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
  };
  handleClick = (e) => {
    console.log(this.userDataDTO);
    axios
      .post("http://15.235.141.168:70/user/add", this.userDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Vendor-User" },
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
    this.userDataDTO.vendorUserDto.resource = props;
    console.log(this.userDataDTO.vendorUserDto.resource);
  };
  GetUser = (props) => {
    console.log(props);
    this.userDataDTO.vendorUserDto.user.userName = props.userName;
    this.userDataDTO.vendorUserDto.user.password = props.password;
    this.userDataDTO.vendorUserDto.user.roleId = props.roleId;
    console.log(this.userDataDTO.vendorUserDto.user);
  };
  GetWallet = (props) => {
    console.log(props);
    this.userDataDTO.vendorUserDto.wallet.walletType = props.walletType;
    this.userDataDTO.vendorUserDto.wallet.balance = props.balance;
    this.userDataDTO.vendorUserDto.wallet.title = props.title;
    console.log(this.userDataDTO.customerDto.wallet);
    console.log(this.userDataDTO.vendorUserDto);
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Vendor User")} / {t("Add Vendor User")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Resource Data={this.GetResource} />
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
                          this.userDataDTO.vendorUserDto.joiningDate =
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
                          this.userDataDTO.vendorUserDto.validityDate =
                            e.target.value;
                        }}
                      />
                    </Col>
                  </Row>
                </Row>
                <User Data={this.GetUser} />
                <Row>
                  <Wallet Data={this.GetWallet} />
                </Row>
                <Row className="mt-2">
                  <Col className="d-flex justify-content-end align-items-center">
                    <Button
                      className="mx-2 mb-2 "
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
export default AddVendorUser;
