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
export default class GetBizCustID extends Component {
  BizCustData = [];

  BizCustIDGetter = (props) => {
    console.log(props);
    this.BizCustData = props;
    this.forceUpdate();
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.BizCustIDGetter}
          url={"http://15.235.141.168:70/cust/get-biz-cust"}
        />
        <Form.Label>
          <h5>{t("Business Customer ID")} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = e.target.value;
              this.props.Data(returnid);
              console.log(this.BizCustData);
            }}
            required
          >
            <option selected>{t("Business Customer ID")}</option>

            {this.BizCustData.map((n) => {
              return <option value={n.id}>{n.name}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
