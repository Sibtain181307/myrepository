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
import { Link } from "react-router-dom";
import DataFetcher from "../UserComponents/DataFetcher";
import Resource from "../ViewComponents/Resource";
import User from "../ViewComponents/user";
import Wallet from "../ViewComponents/Wallet";
class EditEmploy extends Component {
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

  ViewData = (props) => {
    console.log(props);
    this.userDataDTO.employDto.resource = props.resource;
    this.userDataDTO.employDto.user = props.user;
    this.userDataDTO.employDto.wallet = props.wallet;
    this.forceUpdate();
  };
  Getid = () => {
    return this.props.location.id;
  };
  render() {
    return (
      <div>
        {console.log()}
        <DataFetcher
          Data={this.ViewData}
          url="http://15.235.141.168:70/user/get-user"
          event="Get-Employ"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Employ User")} / {t("Edit Employ User")}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Resource Data={this.userDataDTO.employDto.resource} />
                <User Data={this.userDataDTO.employDto.user} />
                <Wallet Data={this.userDataDTO.employDto.wallet} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.employDto.resource,
                      path: this.props.location.path,
                    }}
                  >
                    <Button className="mx-2 mb-2 " variant="success">
                      {t("Edit Data")}
                    </Button>
                  </Link>
                </Col>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
export default EditEmploy;
