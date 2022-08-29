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
export default class GetLocations extends Component {
  Locations = [];
  LocationsGetter = (props) => {
    console.log(props);
    this.Locations = props;
    this.forceUpdate();
    console.log(this.Locations);
  };

  render() {
    return (
      <Col md={6} className="mt-2">
        <DataFetcher
          Data={this.LocationsGetter}
          url={"http://15.235.141.168:70/location/get-location-by-cust"}
          event={"Get-LastMile"}
          idsetter={this.props.id}
        />
        {console.log(this.props.id)}
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
              console.log(this.Locations);
            }}
            required
          >
            <option selected>{t("Locations")}</option>

            {this.Locations.map((n) => {
              return <option value={n.id}>{n.title}</option>;
            })}
          </select>
        </InputGroup>
      </Col>
    );
  }
}
