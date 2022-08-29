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
export default class GetCountry extends Component {
  Country = [];

  CountriesGetter = (props) => {
    console.log(props);
    this.Country = props;
    this.forceUpdate();
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.CountriesGetter}
          url={"http://15.235.141.168:70/util/get-country"}
        />
        <Form.Label>
          <h5>{t("Country")} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = e.target.value;
              this.props.Data(returnid);
              console.log(this.Country);
            }}
            required
          >
            <option selected>{t("Country")}</option>

            {this.Country.map((n) => {
              return <option value={n.id}>{n.country}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
