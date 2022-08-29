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
import { default as t } from "../../../../../translations";
import axios from "axios";

import history from "@history.js";
export default class EditForm extends Component {
  componentDidMount() {
    console.log(this.props.location.resource);
    this.businessProfile.crAttachmentId =
      this.props.location.resource.crAttachmentId;
    this.businessProfile.crNumber = this.props.location.resource.crNumber;
    this.businessProfile.displayName = this.props.location.resource.displayName;
    this.businessProfile.id = this.props.location.resource.id;
    this.businessProfile.logoAttachmentId =
      this.props.location.resource.logoAttachmentId;
    this.businessProfile.name = this.props.location.resource.name;
    this.businessProfile.taxNumber = this.props.location.resource.taxNumber;
    this.businessProfile.vatAttachmentId =
      this.props.location.resource.vatAttachmentId;
    this.forceUpdate();
    console.log(this.businessProfile);
  }
  componentWillUnmount() {
    history.push({
      pathname: "/BusinessController/view",
    });
  }
  businessProfile = {
    crAttachmentId: 0,
    crNumber: 0,
    displayName: "",
    id: 0,
    logoAttachmentId: 0,
    name: "",
    taxNumber: 0,
    vatAttachmentId: 0,
  };

  handleClickBizProfile = (e) => {
    console.log(this.businessProfile);
    axios
      .put("http://15.235.141.168:70/business/update", this.businessProfile, {
        headers: { SessionKey: "123" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };

  GetCityID = (props) => {
    this.resourceUpdateDto.cityId = props;
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("Profile")} / {t("Edit Profile")}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={4} className="mt-2">
                    <Form.Label>{t("Display Name")}</Form.Label>

                    <FormControl
                      placeholder={t("Display Name")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.businessProfile.displayName = e.target.value;
                      }}
                    />
                  </Col>

                  <Col md={4} className="mt-2">
                    <Form.Label>{t("Name")}</Form.Label>

                    <FormControl
                      placeholder={t("Name")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.businessProfile.name = e.target.value;
                      }}
                    />
                  </Col>

                  <Col md={4} className="mt-2">
                    <Form.Label>{t("Cr Number")}</Form.Label>

                    <FormControl
                      placeholder={t("Cr Number")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.businessProfile.crNumber = e.target.value;
                      }}
                    />
                  </Col>

                  <Col md={4} className="mt-2">
                    <Form.Label>{t("Tax Number")}</Form.Label>

                    <FormControl
                      placeholder={t("Tax Number")}
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        this.businessProfile.taxNumber = e.target.value;
                      }}
                    />
                  </Col>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
                      <Button
                        className="mx-2"
                        variant="success"
                        onClick={this.handleClickBizProfile}
                      >
                        {t("Update")}
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
