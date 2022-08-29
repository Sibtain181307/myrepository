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
class EditCustWarehouse extends Component {
  locationDataDTO = {
    custWarehouseDto: {
      validityDate: "",
      bizCustId: null,
      warehouse: {
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
    },
  };
  ViewData = (props) => {
    console.log(props);
    this.locationDataDTO.custWarehouseDto.warehouse.type = props.type;
    this.locationDataDTO.custWarehouseDto.warehouse.title = props.title;
    this.locationDataDTO.custWarehouseDto.validityDate = props.validityDate;
    this.locationDataDTO.custWarehouseDto.bizCustId = props.bizCustId;
    this.locationDataDTO.custWarehouseDto.warehouse = props.warehouse;
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
          event="View-Biz-Warehouse"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Customer Warehouse ")} / {t("Edit Customer Warehouse")}{" "}
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
                        <i className=" mr-1"></i> {t("Type")}
                      </p>
                      <span>
                        {this.locationDataDTO.custWarehouseDto.warehouse.type}
                      </span>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Title")}
                      </p>
                      <span>
                        {this.locationDataDTO.custWarehouseDto.warehouse.title}
                      </span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Validity Date")}
                      </p>
                      <span>
                        {this.locationDataDTO.custWarehouseDto.validityDate}
                      </span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className=" mr-1"></i>
                        {t("Business Customer ID")}
                      </p>
                      <span>
                        {this.locationDataDTO.custWarehouseDto.bizCustId}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Address
                  Data={this.locationDataDTO.custWarehouseDto.warehouse.address}
                />
                <Contact
                  Data={this.locationDataDTO.custWarehouseDto.warehouse.contact}
                />

                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/EditFormCustWarehouse",
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
export default EditCustWarehouse;
