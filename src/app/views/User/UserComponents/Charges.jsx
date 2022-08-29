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
import Wallet from "./Wallet";
export default class Charges extends Component {
  state = {
    chargerInterCity: 20,
    chargesCodCollection: 20,
    chargesInsurancePercentage: 20,
    chargesInterCountry: 20,
    chargesOnlinePayment: 20,
    chargesPerKg: 20,
    chargesReturn: 20,
    chargesSameCity: 20,
    chargesWallet: {
      balance: 20,
      title: "abc",
      walletType: "abc",
    },
  };
  GetWallet = (props) => {
    this.state.chargesWallet = props;
    this.props.Data(this.state);
  };
  render() {
    return (
      <Row>
        <Row>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges intercity")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges intercity")}
              aria-label="chargesintercity"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargerInterCity = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges Cod Collection")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges Cod Collection")}
              aria-label="chargescod"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesCodCollection = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges insurance Percentage")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges insurance Percentage")}
              aria-label="chargesinsurance"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesInsurancePercentage = parseInt(
                  e.target.value,
                  10
                );
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges interCountry")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges interCountry")}
              aria-label="charges intercountry"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesInterCountry = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges Online Payment")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges Online Payment")}
              aria-label="chargesonlinepayment"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesOnlinePayment = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges per kg")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges per kg")}
              aria-label="charges/kg"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesPerKg = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges return")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges return")}
              aria-label="charges return"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesReturn = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Charges same city")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Charges same city")}
              aria-label="charges same city"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.state.chargesSameCity = parseInt(e.target.value, 10);
                this.props.Data(this.state);
              }}
            />
          </Col>
        </Row>
        <Wallet Data={this.GetWallet} title="charges" />
      </Row>
    );
  }
}
