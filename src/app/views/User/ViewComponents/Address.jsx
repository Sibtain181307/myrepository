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
export default class Address extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Latitude")}
            </p>
            <span>{this.props.Data.lang}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Longitude")}
            </p>
            <span>{this.props.Data._long}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Street Address")}
            </p>
            <span>{this.props.Data.streetAddress}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i>
              {t("Geo Link")}
            </p>
            <span>{this.props.Data.geoLink}</span>
          </div>
        </Col>
      </Row>
    );
  }
}
