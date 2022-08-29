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
class EditVendorUser extends Component {
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

  ViewData = (props) => {
    console.log(props);
    this.userDataDTO.vendorUserDto.resource = props.resource;
    this.userDataDTO.vendorUserDto.user = props.user;
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
          event="Get-Vendor-User"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Customer User")} / {t("Edit Customer User")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Resource Data={this.userDataDTO.vendorUserDto.resource} />
                <User Data={this.userDataDTO.vendorUserDto.user} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.vendorUserDto.resource,
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
export default EditVendorUser;
