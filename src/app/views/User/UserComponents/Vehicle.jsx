import React, { Component } from "react";
import DataFetcher from "./DataFetcher";
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
export default class Vehicle extends Component {
  vehicle = {
    cargoCapacity: null,
    chassyNumber: "",
    make: "",
    makeYear: "",
    model: "",
    plateNumber: "",
    registrationNumber: "",
  };

  render() {
    return (
      <Row>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Cargo Capacity")}</h5>
          </Form.Label>

          <FormControl
            placeholder={t("Cargo Capacity")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.cargoCapacity = parseInt(e.target.value, 10);
              this.props.Data(this.vehicle);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Chassy Number")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Chassy Number")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.chassyNumber = e.target.value;
              this.props.Data(this.vehicle);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Make")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Make")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.make = e.target.value;
              this.props.Data(this.vehicle);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Make Year")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Make Year")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.makeYear = e.target.value;
              this.props.Data(this.vehicle);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Model")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Model")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.model = e.target.value;
              this.props.Data(this.vehicle);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Plate Number")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Plate Number")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.vehicle.plateNumber = e.target.value;
              this.props.Data(this.vehicle);
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
              this.vehicle.registrationNumber = e.target.value;
              this.props.Data(this.vehicle);
            }}
          />
        </Col>
      </Row>
    );
  }
}
