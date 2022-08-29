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
import GetBizCustID from "../UserComponents/GetBusinessID";
class AddBusineesCustomer extends Component {
  userDataDTO = {
    businessUserDto: {
      validityDate: "",
      customerBusinessId: 0,
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
          streetAddress: "",
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
    },
  };
  handleClick = (e) => {
    console.log(this.userDataDTO);
    axios
      .post("http://15.235.141.168:70/user/add", this.userDataDTO, {
        headers: { SessionKey: "123", Event: "Create-Business-User" },
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
    this.userDataDTO.businessUserDto.resource = props;
    console.log(this.userDataDTO.businessUserDto.resource);
  };
  GetUser = (props) => {
    console.log(props);
    this.userDataDTO.businessUserDto.user = props;
    console.log(this.userDataDTO.businessUserDto.user);
  };
  GetBusinessCustomerID = (props) => {
    console.log(props);
    this.userDataDTO.businessUserDto.customerBusinessId = ParseInt(props, 10);
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Business User")} / {t("Add Business User")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Resource Data={this.GetResource} />
                </Row>
                <Row>
                  <Row>
                    <Row>
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
                            this.userDataDTO.businessUserDto.validityDate =
                              e.target.value;
                          }}
                        />
                      </Col>
                      <GetBizCustID Data={this.GetBusinessCustomerID} />
                    </Row>
                  </Row>
                </Row>
                <User Data={this.GetUser} />

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

export default AddBusineesCustomer;
