import React, { Component } from "react";
import DataFetcher from "./DataFetcher";
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
export default class GetRoles extends Component {
  data = [];

  RolesGetter = (props) => {
    console.log(props);
    this.data = props;
    console.log(this.data);
    this.forceUpdate();
  };
  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.RolesGetter}
          url={"http://15.235.141.168:70/role/get-roles"}
        />
        <Form.Label>
          <h5>{t("Roles")} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = e.target.value;
              this.props.Data(returnid);
              console.log(this.data);
            }}
            required
          >
            <option selected>{t("Roles")}</option>

            {this.data.map((n) => {
              return <option value={n.id}>{n.role}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
