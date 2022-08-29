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

class AddCustomerUser extends Component {
  userDataDTO = {
    customerDto: {
      dateOfJoining: "",
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
          _long: 0,
          cityId: 0,
          streetAddress: "",
          lang: 0,
          geoLink: "",
        },

        contact: {
          countryCode: "",
          networkCode: 0,
          number: 0,
          numberType: "",
        },
      },
      user: {
        userName: "",
        password: "",
        roleId: 0,
      },
      wallet: {
        title: "",
        balance: 0,
        walletType: "",
      },
    },
  };
  handleClick = (e) => {
    console.log(this.userDataDTO);
    axios
      .post("http://15.235.141.168:70/user/add", this.userDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Customer_User" },
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
    this.userDataDTO.customerDto.resource = props;
    console.log(this.userDataDTO.customerDto.resource);
  };
  GetUser = (props) => {
    console.log(props);
    this.userDataDTO.customerDto.user.userName = props.userName;
    this.userDataDTO.customerDto.user.password = props.password;
    this.userDataDTO.customerDto.user.roleId = props.roleId;
    console.log(this.userDataDTO.customerDto.user);
  };
  GetWallet = (props) => {
    console.log(props);
    this.userDataDTO.customerDto.wallet.walletType = props.walletType;
    this.userDataDTO.customerDto.wallet.balance = props.balance;
    this.userDataDTO.customerDto.wallet.title = props.title;
    console.log(this.userDataDTO.customerDto.wallet);
    console.log(this.userDataDTO.customerDto);
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Customer User")} / {t("Add Customer User")}{" "}
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
                          this.userDataDTO.customerDto.dateOfJoining =
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
export default AddCustomerUser;
