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
  wallet = {
    title: "",
    balance: 0,
    walletType: "",
  };

  render() {
    return (
      <Row>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>
              {t("Wallet Title")} {t(this.props.title)}{" "}
            </h5>
          </Form.Label>
          <FormControl
            placeholder={t("Wallet Title")}
            aria-label="Enddate"
            name="title"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.wallet.title = e.target.value;
              this.props.Data(this.wallet);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Balance")} </h5>
          </Form.Label>
          <FormControl
            placeholder={t("Balance")}
            aria-label="Enddate"
            name="balance"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.wallet.balance = parseInt(e.target.value, 10);
              this.props.Data(this.wallet);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Wallet Type")} </h5>
          </Form.Label>
          <FormControl
            placeholder={t("Wallet Type")}
            aria-label="Enddate"
            name="walletType"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.wallet.walletType = e.target.value;
              this.props.Data(this.wallet);
            }}
          />
        </Col>
      </Row>
    );
  }
}
