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
import Driver from "../ViewComponents/Driver";
class EditEmpDriver extends Component {
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

  ViewData = (props) => {
    console.log(props);
    this.userDataDTO.driverEmpDto.resource = props.resource;
    this.userDataDTO.driverEmpDto.user = props.user;
    this.userDataDTO.driverEmpDto.wallet = props.wallet;
    this.forceUpdate();
    console.log(this.userDataDTO);
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
          event="Get-Driver-Employ"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Employ Driver")} / {t("Edit Employ Driver")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                {console.log(this.userDataDTO)}
                <Resource Data={this.userDataDTO.driverEmpDto.resource} />
                <User Data={this.userDataDTO.driverEmpDto.user} />
                <Wallet Data={this.userDataDTO.driverEmpDto.wallet} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.driverEmpDto.resource,
                      path: this.props.location.path,
                    }}
                  >
                    <Button
                      className="mx-2 mb-2 "
                      variant="success"
                      onClick={this.handleClick}
                    >
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
export default EditEmpDriver;
