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
export default class GetCity extends Component {
  City = [];

  CitiesGetter = (props) => {
    console.log(props);
    this.City = props;
    this.forceUpdate();
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.CitiesGetter}
          url={"http://15.235.141.168:70/util/get-city"}
        />
        <Form.Label>
          <h5>{t("City")} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = e.target.value;
              this.props.Data(returnid);
              console.log(this.City);
            }}
            required
          >
            <option selected>{t("City")}</option>

            {this.City.map((n) => {
              return <option value={n.id}>{n.name}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
