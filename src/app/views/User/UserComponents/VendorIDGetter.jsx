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
export default class GetVendorID extends Component {
  VendorData = [];

  VendorIDGetter = (props) => {
    console.log(props);
    this.VendorData = props;
    this.forceUpdate();
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.VendorIDGetter}
          url={"http://15.235.141.168:70/vendor/get-vendors"}
        />
        <Form.Label>
          <h5>{t("Vendors")} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = e.target.value;
              this.props.Data(returnid);
              console.log(this.VendorData);
            }}
            required
          >
            <option selected>{t("Vendors")}</option>

            {this.VendorData.map((n) => {
              return <option value={n.id}>{n.name}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
