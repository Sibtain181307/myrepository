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
class EditVendorDriver extends Component {
  userDataDTO = {
    driverVendorDto: {
      compenstationType: "",
      hasVehicle: true,
      vendorUser: {
        validityDate: "",
        venderId: null,
        joiningDate: "",
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
            streetAddress: "",
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
    this.userDataDTO.driverVendorDto.vendorUser.resource =
      props.vendorUser.resource;
    this.userDataDTO.driverVendorDto.vendorUser.user = props.vendorUser.user;
    this.userDataDTO.driverVendorDto.driver = props.driver;
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
          event="Get-Vendor-Driver"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Vendor Driver")} / {t("Edit Vendor Driver")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Resource
                  Data={this.userDataDTO.driverVendorDto.vendorUser.resource}
                />
                <User Data={this.userDataDTO.driverVendorDto.vendorUser.user} />
                <Driver Data={this.userDataDTO.driverVendorDto.driver} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.driverVendorDto.resource,
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
export default EditVendorDriver;
