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

import Address from "./Address";
import Contact from "./Contact";
export default class BusinessProfile extends Component {
  render() {
    return (
      <Row>
        <Row>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i> {t("Name")}
              </p>
              <span>{this.props.Data.name}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i>
                {t("Display Name")}
              </p>
              <span>{this.props.Data.displayName}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i> {t("Cr Number")}
              </p>
              <span>{this.props.Data.crNumber}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i> {t("Logo Attachment")}
              </p>
              <span>{this.props.Data.logoAttachment.description}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i> {t("Cr Attachment")}
              </p>
              <span>{this.props.Data.crAttachment.description}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i> {t("Vat Attachment")}
              </p>
              <span>{this.props.Data.vatAttachment.description}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <p className="text-primary mb-1">
                <i className=" mr-1"></i> {t("Tax Number")}
              </p>
              <span>{this.props.Data.taxNumber}</span>
            </div>
          </Col>
          <Contact Data={this.props.Data.contact} />
          <Address Data={this.props.Data.address} />
        </Row>
      </Row>
    );
  }
}
