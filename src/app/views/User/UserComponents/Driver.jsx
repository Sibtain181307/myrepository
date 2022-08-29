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
import Attachment from "./Attachment";

export default class Driver extends Component {
  driver = {
    codWallet: {
      title: "",
      balance: null,
      walletType: "",
    },
    licenceAttachment: {
      attachmentType: "",
      description: "",
      filePath: "",
      fileType: "",
    },
    lisenceExpiry: "",
    lisenceIssueDate: "",
    lisenceNumber: "",
  };
  Get_Cod_Wallet = (props) => {
    this.driver.codWallet.title = props.title;
    this.driver.codWallet.balance = props.balance;
    this.driver.codWallet.walletType = props.walletType;
    this.props.Data(this.driver);
  };
  Get_Licence_Attachment = (props) => {
    this.licenceAttachment.attachmentType = props.attachmentType;
    this.licenceAttachment.description = props.description;
    this.licenceAttachment.filePath = props.filePath;
    this.licenceAttachment.fileType = props.fileType;
    this.props.Data(this.driver);
  };
  render() {
    return (
      <Row>
        <Row>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("License Expiry")} </h5>
            </Form.Label>
            <input
              placeholder="yyyy-mm-dd"
              class="form-control"
              type="text"
              onChange={(e) => {
                this.driver.lisenceExpiry = e.target.value;
                this.props.Data(this.driver);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("License Issue Date")} </h5>
            </Form.Label>
            <input
              placeholder="yyyy-mm-dd"
              class="form-control"
              type="text"
              onChange={(e) => {
                this.driver.lisenceIssueDate = e.target.value;
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("License Number")} </h5>
            </Form.Label>
            <FormControl
              placeholder={t("License Number")}
              aria-label="Enddate"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.driver.lisenceNumber = e.target.value;
                this.props.Data(this.driver);
              }}
            />
          </Col>

          <Attachment
            Getter={this.Get_Licence_Attachment}
            Headline={"License Attachment"}
          />
        </Row>
        <Wallet Data={this.Get_Cod_Wallet} Headline={"COD Wallet"} />
      </Row>
    );
  }
}
