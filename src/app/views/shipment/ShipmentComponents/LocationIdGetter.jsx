// Getting last mile location

import React, { Component } from "react";
import DataFetcher from "app/views/User/UserComponents/DataFetcher";
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
export default class LocationId extends Component {
  BizCustLocation = [];
  user = JSON.parse(localStorage.user);
  id = this.user.id;
  BizCustIDGetter = (props) => {
    console.log(props);
    this.BizCustLocation = props;
    this.forceUpdate();
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.BizCustIDGetter}
          url={"http://15.235.141.168:70/location/get-location-by-cust"}
          idsetter={this.id}
          event={"Get-LastMile"}
        />
        <Form.Label>
          <h5>{t("Business Location")} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = e.target.value;
              this.props.Data(returnid);
              console.log(this.BizCustLocation);
            }}
            required
          >
            <option selected>{t("Business Location")}</option>

            {this.BizCustLocation.map((n) => {
              return <option value={n.id}>{n.name}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
