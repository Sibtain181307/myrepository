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
class EditCustomerUser extends Component {
  userDataDTO = {
    dateOfJoining: "",
    customerDto: {
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

  ViewData = (props) => {
    console.log(props);
    this.userDataDTO.customerDto.resource = props.resource;
    this.userDataDTO.customerDto.user = props.user;
    this.userDataDTO.customerDto.wallet = props.wallet;
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
          event="Get-Customer_User"
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
                <Resource Data={this.userDataDTO.customerDto.resource} />
                <User Data={this.userDataDTO.customerDto.user} />
                <Wallet Data={this.userDataDTO.customerDto.wallet} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.customerDto.resource,
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
export default EditCustomerUser;
