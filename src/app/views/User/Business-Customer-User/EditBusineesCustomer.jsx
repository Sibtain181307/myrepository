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
class EditBizCustomerUser extends Component {
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

  ViewData = (props) => {
    console.log(props);
    this.userDataDTO.businessUserDto.resource = props.resource;
    this.userDataDTO.businessUserDto.user = props.user;
    console.log(this.userDataDTO.businessUserDto.resource);
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
          event="Get-Business-User"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Business Customer User")} / {t("Edit Business Customer User")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Resource Data={this.userDataDTO.businessUserDto.resource} />
                <User Data={this.userDataDTO.businessUserDto.user} />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editform",
                      resource: this.userDataDTO.businessUserDto.resource,
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
export default EditBizCustomerUser;
