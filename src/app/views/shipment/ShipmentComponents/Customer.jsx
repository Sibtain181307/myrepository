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
import User from "./../../User/UserComponents/user";
import Wallet from "./../../User/UserComponents/Wallet";
import Resource from "./../../User/UserComponents/Resource";

class Customer extends Component {
  custDetailDto = {
    resource: {
      address: {
        _long: 0,
        cityId: 0,
        geoLink: "string",
        lang: 0,
        streetAddress: "string",
      },
      contact: {
        countryCode: "string",
        networkCode: 0,
        number: 0,
        numberType: "string",
      },
      dateOfBirth: "string",
      firstName: "string",
      gender: "string",
      lastName: "string",
      middleName: "string",
      nic: "string",
      nicAttachment: {
        attachmentType: "string",
        description: "string",
        filePath: "string",
        fileType: "string",
      },
    },
  };
  GetResource = (props) => {
    console.log(props);
    this.userDataDTO.customerDto.resource = props;
    console.log(this.userDataDTO.resource);
  };

  handleClick = (e) => {
    this.props.Data(this.custDetailDto);
  };
  render() {
    return (
      <div>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>{this.props.title}</h3>
                </Card.Title>
                <Resource Data={this.GetResource} />
                <Row className="mt-2">
                  <Col className="d-flex justify-content-end align-items-center">
                    <Button
                      className="mx-2 mb-2 "
                      variant="success"
                      onClick={this.handleClick}
                    >
                      {t("Create")}
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
export default Customer;
