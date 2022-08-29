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
export default class Resource extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("First Name")}
            </p>
            <span>{this.props.Data.firstName}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Middle Name")}
            </p>
            <span>{this.props.Data.middleName}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Last Name")}
            </p>
            <span>{this.props.Data.lastName}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Gender")}
            </p>
            <span>{this.props.Data.gender}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("NIC Number")}
            </p>
            <span>{this.props.Data.nic}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("NIC Attachment")}
            </p>
            <span>{this.props.Data.nicAttachment.description}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className=" mr-1"></i> {t("Date of Birth")}
            </p>
            <span>{this.props.Data.dateOfBirth}</span>
          </div>
        </Col>
        <Contact Data={this.props.Data.contact} />
        <Address Data={this.props.Data.address} />
      </Row>
    );
  }
}
