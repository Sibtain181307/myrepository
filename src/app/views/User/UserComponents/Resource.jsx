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
import Contact from "./Contact";
import Address from "./Address";
import PersonalData from "./PersonalData";
export default class Resource extends Component {
  resource = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nic: "",

    nicAttachment: {
      attachmentType: "",
      description: "",
      filePath: "",
      fileType: "",
    },
    address: {
      _long: null,
      cityId: null,
      streetAddress: "",
      lang: null,
      geoLink: "",
    },

    contact: {
      countryCode: "",
      networkCode: "",
      number: null,
      numberType: "",
    },
  };
  GetContact = (props) => {
    console.log(props);

    this.resource.contact = props;
    this.props.Data(this.resource);
  };

  GetAddress = (props) => {
    console.log(props);
    this.resource.address = props;

    console.log(this.resource.address);
    this.props.Data(this.resource);
  };
  GetPersonalData = (props) => {
    this.resource.firstName = props.firstName;
    this.resource.middleName = props.middleName;
    this.resource.lastName = props.lastName;
    this.resource.gender = props.gender;
    this.resource.dateOfBirth = props.dateOfBirth;
    this.resource.nic = props.nic;
    this.resource.nicAttachment = props.nicAttachment;
    this.props.Data(this.resource);
  };
  render() {
    return (
      <Row>
        <PersonalData Data={this.GetPersonalData} />
        <Address Data={this.GetAddress} />
        <Contact Data={this.GetContact} />
      </Row>
    );
  }
}
