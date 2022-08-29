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
import { Link } from "react-router-dom";

import { default as t } from "../../../../translations";
import axios from "axios";
import DataFetcher from "app/views/User/UserComponents/DataFetcher";
import Contact from "app/views/User/ViewComponents/Contact";
import Address from "app/views/User/ViewComponents/Address";
class EditHubs extends Component {
  locationDataDTO = {
    hubDto: {
      accuringDate: "",
      amountPurchased: null,
      currency: "",
      hubLocation: {
        address: {
          _long: null,
          cityId: null,
          geoLink: "",
          lang: null,
          streetAddress: "",
        },
        contact: {
          countryCode: "",
          networkCode: null,
          number: null,
          numberType: "",
        },
        statusId: null,
        title: "",
        type: "",
      },
      isSold: 0,
      soldAmount: null,
      isPurchased: 1,
      rent: null,
      validityDate: "",
    },
  };
  ViewData = (props) => {
    console.log(props);
    this.locationDataDTO.hubDto.accuringDate = props.accuringDate;
    this.locationDataDTO.hubDto.amountPurchased = props.amountPurchased;
    this.locationDataDTO.hubDto.currency = props.currency;
    this.locationDataDTO.hubDto.rent = props.rent;
    this.locationDataDTO.hubDto.hubLocation = props.hubLocation;
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
          url="http://15.235.141.168:70/location/get-location"
          event="View-Hub"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Hub ")} / {t("Edit Hub")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Accuring Date")}
                      </p>
                      <span>{this.locationDataDTO.hubDto.accuringDate}</span>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Amount Purchased")}
                      </p>
                      <span>{this.locationDataDTO.hubDto.amountPurchased}</span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Currency")}
                      </p>
                      <span>{this.locationDataDTO.hubDto.currency}</span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Rent")}
                      </p>
                      <span>{this.locationDataDTO.hubDto.rent}</span>
                    </div>
                  </Col>
                </Row>
                <Address
                  Data={this.locationDataDTO.hubDto.hubLocation.address}
                />
                <Contact
                  Data={this.locationDataDTO.hubDto.hubLocation.contact}
                />

                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/EditFormHub",
                      resource: this.locationDataDTO,
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
export default EditHubs;
