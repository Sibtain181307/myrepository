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
export default class Number extends Component {
  number = null;

  handleClick = () => {
    this.props.Data(this.number);
  };
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{this.props.title}</h3>
          </Card.Title>
          <Row>
            <Col md={6} className="mt-2">
              <Form.Label>
                <h5>{t("Number")} </h5>
              </Form.Label>

              <FormControl
                placeholder={t("Number")}
                aria-label="Enddate"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  this.number = e.target.value;
                }}
                required
              />
            </Col>
            <Row className="mt-2 ">
              <Col className="d-flex justify-content-end">
                <Button
                  className="mx-2"
                  variant="success"
                  onClick={this.handleClick}
                >
                  {t("create")}
                </Button>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
