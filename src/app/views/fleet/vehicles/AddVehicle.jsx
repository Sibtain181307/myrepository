import React from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { default as t } from "../../../../translations";
const AddVehicle = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>
            {t("viewVehicles")} / {t("addVehicle")}
          </h2>
        </Col>
      </Row>
      <Card className="mb-4">
        <Card.Body>
          <Row className="mt-2">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("makeYear")}</Form.Label>
                  <Form.Control placeholder="--enter vehicle make year--" />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("makeModel")}</Form.Label>
                  <Form.Control placeholder="--enter vehicle make model--" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Label>{t("registration")}</Form.Label>
                  <Form.Control placeholder="--enter vehicle registration--" />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("pucrchaseSlip")}</Form.Label>

                  <Form.Control type="file" />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("mileage")}</Form.Label>
                  <Form.Control placeholder="--enter vehicle mileage--" />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("registration")}</Form.Label>
                  <Form.Control type="file" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Label>{t("selectWarehouse")}</Form.Label>
                  <InputGroup>
                    <Form.Control placeholder="--Select Warehouse--" />
                    <DropdownButton>
                      <Dropdown.Item>Item1</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mt-2 ">
                <Col className="d-flex justify-content-end">
                  <Button className="mx-2" variant="danger">
                    {t("discard")}
                  </Button>{" "}
                  <Button className="mx-2" variant="success">
                    {t("create")}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddVehicle;
