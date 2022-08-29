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
import Attachment from "./Attachment";
import Contact from "./Contact";
import Address from "./Address";
export default class BusinessProfile extends Component {
  businessProfile = {
    address: {
      _long: null,
      cityId: null,
      geoLink: "",
      lang: null,
      streetAddress: "",
    },
    contact: {
      countryCode: "",
      networkCode: null,
      number: null,
      numberType: "",
    },
    crAttachment: {
      attachmentType: "",
      description: "",
      filePath: "",
      fileType: "",
    },
    crNumber: null,
    displayName: "",
    logoAttachment: {
      attachmentType: "",
      description: "",
      filePath: "",
      fileType: "",
    },
    name: "",
    taxNumber: null,
    vatAttachment: {
      attachmentType: "",
      description: "",
      filePath: "",
      fileType: "",
    },
  };
  GetContact = (props) => {
    console.log(props);
    this.businessProfile.contact.countryCode = props;
    this.props.Data(this.businessProfile);
  };

  GetAddress = (props) => {
    console.log(props);
    this.BusinessProfile.address = props;
    this.props.Data(this.businessProfile);
  };
  GetCrAttachment = (props) => {
    console.log(props);
    this.businessProfile.crAttachment = props;
    this.props.Data(this.businessProfile);
  };
  GetVatAttachment = (props) => {
    console.log(props);
    this.businessProfile.vatAttachment = props;
    this.props.Data(this.businessProfile);
  };
  GetLogoAttachment = (props) => {
    console.log(props);
    this.businessProfile.logoAttachment = props;
    this.props.Data(this.businessProfile);
  };
  render() {
    return (
      <Row>
        <Row>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Name")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Name")}
              aria-label="name"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.businessProfile.name = e.target.value;
                this.props.Data(this.businessProfile);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Display Name")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Display Name")}
              aria-label="name"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.businessProfile.displayName = e.target.value;
                this.props.Data(this.businessProfile);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Tax Number")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Tax Number")}
              aria-label="vat"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.businessProfile.taxNumber = parseInt(e.target.value, 10);
                this.props.Data(this.businessProfile);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Cr Number")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Cr Number")}
              aria-label="cr"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.businessProfile.crNumber = parseInt(e.target.value, 10);
                this.props.Data(this.businessProfile);
              }}
            />
          </Col>
        </Row>

        <Address Data={this.GetAddress} />
        <Contact Data={this.GetContact} />
        <Row>
          <Attachment Data={this.GetVatAttachment} Headline="Vat Attachment" />
          <Attachment Data={this.GetCrAttachment} Headline="Cr Attachment" />
          <Attachment Dat={this.GetLogoAttachment} Headline="Logo Attachment" />
        </Row>
      </Row>
    );
  }
}
