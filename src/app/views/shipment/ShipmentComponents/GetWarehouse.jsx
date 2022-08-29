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
export default class GetWarehouseName extends Component {
  Warehouse = [];
  WarehouseGetter = (props) => {
    console.log(props);
    this.Warehouse = props;
    this.forceUpdate();
    console.log(this.Warehouse);
  };
  Setid = () => {
    const user = JSON.parse(localStorage.user);
    const id = user.typeId;
    console.log(id);
    return id;
  };
  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.WarehouseGetter}
          url={"http://15.235.141.168:70/location/get-location-by-cust"}
          event={"Get-Warehouse"}
          idsetter={this.Setid()}
        />
        {console.log(this.id)}
        <Form.Label>
          <h5>{this.props.title} </h5>
        </Form.Label>

        <InputGroup>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const returnid = parseInt(e.target.value, 10);
              this.props.Data(returnid);
              console.log(this.Warehouse);
            }}
            required
          >
            <option selected>{t("Warehouse")}</option>

            {this.Warehouse.map((n) => {
              return <option value={n.id}>{n.title}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
