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
import Driver from "../ViewComponents/Driver";
class EditFreelanceDriver extends Component {
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

  ViewData = (props) => {
    console.log(props);
    this.userDataDTO.driverFreelanceDto.resource = props.resource;
    this.userDataDTO.driverFreelanceDto.user = props.user;
    this.userDataDTO.driverFreelanceDto.driver = props.driver;

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
          event="Get-Freelance-Driver"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Freelance Driver")} / {t("Edit Freelance Driver")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Resource Data={this.userDataDTO.driverFreelanceDto.resource} />
                <User Data={this.userDataDTO.driverFreelanceDto.user} />
                <Driver Data={this.userDataDTO.driverFreelanceDto.driver} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.driverFreelanceDto.resource,
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
export default EditFreelanceDriver;
