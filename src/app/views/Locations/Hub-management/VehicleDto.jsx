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
export default class VehicleDto extends Component {
  vehicle = {
    cargoCapacity: 4,
    chassyNumber: "abc",
    make: "abc",
    makeYear: "abc",
    model: "abc",
    plateNumber: "abc",
    registrationNumber: "abc",
    isVehicleCreate: true,
  };

  render() {
    return (
      <Row>
        <Col md={12}>
          <h4>
            <u>{t("Add Vehicle")}</u>
          </h4>
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Cargo Capacity")}</h5>
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
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Chassy Number")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Chassy Number"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.chassyNumber;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Make")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Make"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.make;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Make Year")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Make Year"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.makeYear;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Model")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Model"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.model;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Plate Number")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Plate Number"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.plateNumber;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Registration Number")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Registration Number"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.registrationNumber;
            }}
          />
        </Col>
        <Row className="mt-2">
          <Col className="d-flex justify-content-end align-items-center">
            <Button
              className="mx-2"
              variant="success"
              onClick={this.props.SetVehicle(this.vehicle)}
            >
              {t("create Vehicle")}
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}
