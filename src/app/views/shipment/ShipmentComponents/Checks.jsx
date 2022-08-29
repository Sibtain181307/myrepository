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
export default class Checks extends Component {
  Checks = {
    isDeliveryLocationDiffernet: false,
    isNewDeliveryLocationContact: false,
  };
  handleCheck = () => {
    this.props.Data(this.Checks);
  };
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{this.props.title}</h3>
          </Card.Title>
          <Row>
            <Col md={12} className="mt-2">
              <Form.Check
                name="checkbox1"
                onChange={(e) => {
                  if (e.target.checked) {
                    this.Checks.isDeliveryLocationDiffernet = true;
                  } else {
                    this.Checks.isDeliveryLocationDiffernet = false;
                  }
                }}
                label={t("Is the Location Different?")}
              />
            </Col>
            <Col md={12} className="mt-2">
              <Form.Check
                name="checkbox1"
                onChange={(e) => {
                  if (e.target.checked) {
                    this.Checks.isNewDeliveryLocationContact = true;
                  } else {
                    this.Checks.isNewDeliveryLocationContact = false;
                  }
                }}
                label={t("Is the Location Contact Different?")}
              />
            </Col>
            <Row className="mt-2">
              <Col className="d-flex justify-content-end align-items-center">
                <Button
                  className="mx-2 mb-2 "
                  variant="success"
                  onClick={this.handleCheck}
                >
                  {t("Create")}
                </Button>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
