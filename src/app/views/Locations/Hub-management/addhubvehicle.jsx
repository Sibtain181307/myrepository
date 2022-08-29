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
import VehicleDto from "./VehicleDto";
export default class AddHubVehicle extends Component {
  inventoryDataDto = {
    hubVehicleDto: {
      accuringDate: "2202-04-04",
      accuringType: "abc",
      currency: 1,
      hubId: 1,
      purchasePrice: 1,
      rent: 1,
      vat: 10,
      vehicle: {
        cargoCapacity: 4,
        chassyNumber: "abc",
        make: "abc",
        makeYear: "abc",
        model: "abc",
        plateNumber: "abc",
        registrationNumber: "abc",
      },
    },
  };

  handleClick = (e) => {
    console.log(this.inventoryDataDto);
    axios
      .post("http://15.235.141.168:70/location/add", this.inventoryDataDto, {
        headers: { SessionKey: "123", Event: "Create-Biz-Cust-Warehouse" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.inventoryDataDto);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  Get_Vehicle = (props) => {
    console.log(props);
    this.inventoryDataDto.hubVehicleDto.vehicle.cargoCapacity =
      props.cargoCapacity;
    this.inventoryDataDto.hubVehicleDto.vehicle.chassyNumber =
      props.chassyNumber;
    this.inventoryDataDto.hubVehicleDto.vehicle.make = props.make;
    this.inventoryDataDto.hubVehicleDto.vehicle.model = props.model;
    this.inventoryDataDto.hubVehicleDto.vehicle.makeYear = props.makeYear;
    this.inventoryDataDto.hubVehicleDto.vehicle.plateNumber = props.plateNumber;
    this.inventoryDataDto.hubVehicleDto.vehicle.registrationNumber =
      props.registrationNumber;
  };

  handleClick = (e) => {
    console.log(this.inventoryDataDto);
    axios
      .post("http://15.235.141.168:70/inventory/add", this.inventoryDataDto, {
        headers: { SessionKey: "123", Event: "Create-Hub-Vehicle" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.inventoryDataDto);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  render() {
    return (
      <Row>
        <Row>
          <VehicleDto SetVehicle={this.Get_Vehicle} />

          <Row>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Add Accuring Date")} </h5>
              </Form.Label>

              <FormControl
                placeholder="yyyy-mm-dd"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.accuringDate;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Add Accuring Type")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Add Accuring Type"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.accuringDate;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Currency")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Currency"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.currency;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Vat")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Vat"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.vat;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Hub ID")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Hub ID"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.hubId;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Purchase Price")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Purchase Price"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.purchasePrice;
                }}
              />
            </Col>

            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Rent")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Rent"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.inventoryDataDto.hubVehicleDto.rent;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Cargo Capacity")} </h5>
              </Form.Label>

              <FormControl
                placeholder="Cargo Capacity"
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.vehicle.cargoCapacity;
                }}
              />
            </Col>
          </Row>
        </Row>
        <Row>
          <Row className="mt-2">
            <Col className="d-flex justify-content-end align-items-center">
              <Button className="mx-2" variant="danger">
                {t("discard")}
              </Button>
              <Button
                className="mx-2"
                variant="success"
                onClick={this.handleClick}
              >
                {t("create Hub Vehicle")}
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
    );
  }
}
