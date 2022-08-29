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
export default class Contact extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Country Code")}
            </p>
            <span>{this.props.Data.countryCode}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Network Code")}
            </p>
            <span>{this.props.Data.networkCode}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i>
              {t("Number")}
            </p>
            <span>{this.props.Data.number}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i>
              {t("Number Type")}
            </p>
            <span>{this.props.Data.numberType}</span>
          </div>
        </Col>
      </Row>
    );
  }
}
