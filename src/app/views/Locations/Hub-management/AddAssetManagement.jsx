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
import AddAsset from "./addasset";
import { default as t } from "../../../../translations";
import AddHubVehicle from "./addhubvehicle";
import AddVendorVehicle from "./addvendorvehicle";
export default class AddAssetManagement extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              {t("AddAssets")} / {t("AddAssetManagement")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <AddAsset />
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Col md={12}>
                  <h2>{t("Add Vendor Vehicle")}</h2>
                </Col>
                <Row>
                  <AddHubVehicle />
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={12}>
                    <h2>{t("Add Vendor Vehicle")}</h2>
                  </Col>
                  <AddVendorVehicle />
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
