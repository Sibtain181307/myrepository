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
export default class PersonalData extends Component {
  state = {
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
  };

  GetNicAttachment = (props) => {
    console.log(props);
    this.state.nicAttachment.attachmentType = props.attachmentType;
    this.state.nicAttachment.description = props.description;
    this.state.nicAttachment.filePath = props.filePath;
    this.state.nicAttachment.fileType = props.fileType;
  };

  render() {
    return (
      <Row>
        {" "}
        <Col md={4} className="mt-2">
          <Form.Label>
            <h5>{t("First Name")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("First Name")}
            aria-label="Enddate"
            name="firstname"
            aria-describedby="basic-addon1"
            required
            onChange={(e) => {
              this.state.firstName = e.target.value;
              this.props.Data(this.state);
            }}
          />
        </Col>
        <Col md={4} className="mt-2">
          <Form.Label>
            <h5>{t("Middle Name")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Middle Name")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            required
            onChange={(e) => {
              this.state.middleName = e.target.value;
              this.props.Data(this.state);
            }}
          />
        </Col>
        <Col md={4} className="mt-2">
          <Form.Label>
            <h5>{t("Last Name")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Last Name")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            required
            onChange={(e) => {
              this.state.lastName = e.target.value;
              this.props.Data(this.state);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Gender")} </h5>
          </Form.Label>

          <select
            className="form-select"
            aria-label="Default select example"
            required
            onChange={(e) => {
              this.state.gender = e.target.value;
              this.props.Data(this.state);
            }}
          >
            <option selected>{t("Gender")}</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Date of Birth")} </h5>
          </Form.Label>
          <input
            placeholder="yyyy-mm-dd"
            id="startDate"
            class="form-control"
            required
            type="text"
            onChange={(e) => {
              this.state.dateOfBirth = e.target.value;
              this.props.Data(this.state);
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("NIC Number")} </h5>
          </Form.Label>

          <FormControl
            placeholder="xxxxx-xxxxxxx-x"
            aria-label="Enddate"
            name="nic"
            aria-describedby="basic-addon1"
            required
            onChange={(e) => {
              this.state.nic = e.target.value;
              this.props.Data(this.state);
            }}
          />
        </Col>
        <Attachment Data={this.GetNicAttachment} Headline="NIC Attachment" />
      </Row>
    );
  }
}
