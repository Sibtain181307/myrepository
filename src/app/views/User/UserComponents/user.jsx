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
import GetRoles from "./GetRoles";
export default class User extends Component {
  user = {
    userName: "",
    password: "",
    roleId: null,
  };
  RolesGetter = (props) => {
    this.user.roleId = parseInt(props, 10);
    this.props.Data(this.user);
  };
  render() {
    return (
      <Row>
        <Row>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Username")} </h5>
            </Form.Label>

            <FormControl
              placeholder={t("Username")}
              aria-label="Enddate"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.user.userName = e.target.value;
                this.props.Data(this.user);
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Password")} </h5>
            </Form.Label>
            <InputGroup>
              <FormControl
                placeholder={t("Password")}
                type="password"
                onChange={(e) => {
                  this.user.password = e.target.value;
                  this.props.Data(this.user);
                }}
              />
            </InputGroup>
          </Col>
          <GetRoles Data={this.RolesGetter} />
        </Row>
      </Row>
    );
  }
}
