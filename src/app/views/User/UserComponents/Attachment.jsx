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

export default class Attachment extends Component {
  Attachment = {
    attachmentType: "",
    description: "",
    filePath: "",
    fileType: "",
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <Form.Label class="form-label" for="customFile">
          <h5>{t(this.props.Headline)} </h5>
        </Form.Label>

        <input
          type="file"
          class="form-control"
          id="customFile"
          required
          onChange={(e) => {
            this.Attachment.filePath = "Path";
            this.Attachment.description = e.target.files[0].name;
            this.Attachment.fileType = this.Attachment.description
              .split(".")
              .pop();

            this.Attachment.attachmentType = this.props.title;
            console.log(this.Attachment.fileType, this.Attachment.description);
            this.props.Data(this.Attachment);
          }}
        />
      </Col>
    );
  }
}
