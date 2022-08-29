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
import axios from "axios";
import GetCountry from "../UserComponents/GetCountry";
import GetCity from "../UserComponents/GetCity";
export default class Address extends Component {
  address = {
    _long: 0,
    cityId: 0,
    streetAddress: "",
    lang: 0,
    geoLink: "",
  };
  Get_city_id = (props) => {
    this.address.cityId = parseInt(props, 10);
    this.props.Data(this.address);
  };
  GetCountry = (props) => {};
  render() {
    return (
      <Row>
        <GetCountry Data={this.GetCountry} />

        <GetCity Data={this.Get_city_id} />

        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Street Address")} </h5>
          </Form.Label>

          <FormControl
            name="streetAdress"
            placeholder={t("Street Address")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.address.streetAddress = e.target.value;
              this.props.Data(this.address);
            }}
            required
          />
        </Col>

        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("addLocation")} </h5>
          </Form.Label>
          <InputGroup>
            <FormControl
              placeholder={t("Location")}
              aria-label="Enddate"
              aria-describedby="basic-addon1"
              name="AddLocation"
            />
            <Button
              onClick={(e) => {
                navigator.geolocation.getCurrentPosition((position) => {
                  console.log("Latitude : ", position.coords.latitude);
                  console.log("Longitude : ", position.coords.longitude);
                  this.address.lang = position.coords.latitude;
                  this.address._long = position.coords.longitude;
                  this.props.Data(this.address);
                });
              }}
            >
              {t("addLocation")}{" "}
            </Button>
          </InputGroup>
        </Col>

        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Geo Link")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Geo Link")}
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.address.geoLink = e.target.value;
              this.props.Data(this.address);
            }}
            required
          />
        </Col>

        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Postal Code")} </h5>
          </Form.Label>

          <FormControl
            placeholder={t("Postal Code")}
            aria-label="Enddate"
            required
            name="PostalCode"
            aria-describedby="basic-addon1"
          />
        </Col>
      </Row>
    );
  }
}
