import React, { Component } from "react";
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
export default class ShipmentContent extends Component {
  shipmentContentDtoList = [];

  Shipment = {
    cargoType: "",
    cargoValue: 0,
    codAmount: 0,
    description: "",
    isCod: 0,
    isDelicate: 0,
    shipmentId: 0,
    title: "",
    weight: 0,
  };

  handleClick = () => {
    this.props.Data(this.shipmentContentDtoList);
    console.log(this.shipmentContentDtoList);
  };
  handleAddtoList = () => {
    this.shipmentContentDtoList.push(this.Shipment);
  };
  render() {
    return (
      <Card>
        <Card.Body>
          <h4 className="mt-2">{t("Enter the Details for the Shipments")}</h4>
          <Row>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Cargo Type")} </h5>
              </Form.Label>
              <input
                placeholder={t("Cargo Type")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.cargoType = e.target.value;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Cargo Value")} </h5>
              </Form.Label>
              <input
                placeholder={t("Cargo Value")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.cargoValue = parseInt(e.target.value, 10);
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Cod Amount")} </h5>
              </Form.Label>
              <input
                placeholder={t("Cod Amount")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.codAmount = parseInt(e.target.value, 10);
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Description")} </h5>
              </Form.Label>
              <input
                placeholder={t("Description")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.description = e.target.value;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Shipment Id")} </h5>
              </Form.Label>
              <input
                placeholder={t("Shipment ID")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.shipmentId = parseInt(e.target.value, 10);
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Title ")} </h5>
              </Form.Label>
              <input
                placeholder={t("Title")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.title = e.target.value;
                }}
              />
            </Col>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Weight")} </h5>
              </Form.Label>
              <input
                placeholder={t("Weight")}
                id="startDate"
                class="form-control"
                required
                type="text"
                onChange={(e) => {
                  this.Shipment.weight = parseInt(e.target.value, 10);
                }}
              />
            </Col>
            <Col md={12} className="mt-2">
              <Form.Check
                name="checkbox1"
                onChange={(e) => {
                  if (e.target.checked) {
                    this.Shipment.isDelicate = true;
                    console.log(this.Shipment);
                  }
                }}
                label="Is the Package Delicate?"
              />
            </Col>
            <Col md={12} className="mt-2">
              <Form.Check
                onChange={(e) => {
                  if (e.target.checked) {
                    this.Shipment.isCod = true;
                    console.log(this.Shipment);
                  }
                }}
                label="Is the payment type COD?"
              />
            </Col>
            <Row>
              <Row className="mt-2">
                <Col className="d-flex justify-content-end align-items-center">
                  <Button
                    className="mx-2 mb-2 "
                    variant="success"
                    onClick={this.handleAddtoList}
                  >
                    {t("Add to List")}
                  </Button>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="d-flex justify-content-end align-items-center">
                  <Button
                    className="mx-2 mb-2 "
                    variant="success"
                    onClick={this.handleClick}
                  >
                    {t("Create Shipment")}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
