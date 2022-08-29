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
export default class Wallet extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i>
              {t("Wallet Title")}
            </p>
            <span>{this.props.Data.title}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Wallet Type")}
            </p>
            <span>{this.props.Data.walletType}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Balance")}
            </p>
            <span>{this.props.Data.balance}</span>
          </div>
        </Col>
      </Row>
    );
  }
}
