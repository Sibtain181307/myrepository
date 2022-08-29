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
import Wallet from "./Wallet";

export default class Driver extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("License Attachment")}
            </p>
            <span>{this.props.Data.licenceAttachment.description}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("License Expiry")}
            </p>
            <span>{this.props.Data.lisenceExpiry}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("License Issue Date")}
            </p>
            <span>{this.props.Data.lisenceIssueDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("License Number")}
            </p>
            <span>{this.props.Data.lisenceNumber}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("COD wallet title")}
            </p>
            <span>{this.props.Data.codWallet.title}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Wallet Type")}
            </p>
            <span>{this.props.Data.codWallet.walletType}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Balance")}
            </p>
            <span>{this.props.Data.codWallet.balance}</span>
          </div>
        </Col>
      </Row>
    );
  }
}
