import React from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { default as t } from "../../../../translations";

const ShipmentReport = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("shipmentReport")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Button size="lg">{t("")}</Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("startDate")}</Form.Label>
                  <FormControl
                    placeholder="--select start date--"
                    aria-label="Startdate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("endDate")}</Form.Label>

                  <FormControl
                    placeholder="--select end date--"
                    aria-label="enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    <h5>
                      {t("shipper")} {"[ "}
                      {t("optional")} {"]"}
                    </h5>
                  </Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="--select a shipper--"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                    />
                    <DropdownButton>
                      <Dropdown.Item>Item1</Dropdown.Item>
                      <Dropdown.Item>Item2</Dropdown.Item>
                      <Dropdown.Item>Item3</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </Row>
    </div>
  );
};

export default ShipmentReport;
