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

const Payout = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("payouts")}</h2>
        </Col>
      </Row>

      <Row>
        <Card>
          <Card.Body>
            <Col md={6}>
              <Form>
                <Form.Label>{t("selectUser")}</Form.Label>
                <Form.Select>
                  <option selected="true" disabled>--{t("selectUser")}--</option>
                </Form.Select>
              </Form>
            </Col>
          </Card.Body>
        </Card>
      </Row>

      <Row className="mt-4">
        <Card>
          <Card.Body>
            <Row className="d-flex justify-content-center align-items-center px-5">
              <Col>
                <h4>{t("payableType")}</h4>
              </Col>
              <Col>
                <h4>{t("salary")}</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-4">
        <Card elevation={6} className="mt-4">
          <Card.Body>
            <Card.Title className="text-center">{t("forSalary")}</Card.Title>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("forMonthly")}</Form.Label>
                  <Form.Control />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("dueDate")}</Form.Label>
                  <Form.Control type="date" />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("amount")}</Form.Label>
                  <Form.Control type="numbers" />
                </Col>

                <div className="d-flex justify-content-center justify-content-md-end mt-2">
                  <Button>{t("createPaySlip")}</Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>

      <Row className="my-4">
        <Card elevation={6} className="mt-4">
          <Card.Body>
            <Card.Title className="text-center">
              {t("forCompensation")}
            </Card.Title>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("from")}</Form.Label>
                  <Form.Control palceholder="--from--" type="date" />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("to")}</Form.Label>
                  <Form.Control palceholder="--from--" type="date" />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("totalAmount")}</Form.Label>
                  <Form.Control />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("dueDate")}</Form.Label>
                  <Form.Control />
                </Col>

                <div className="d-flex justify-content-center justify-content-md-end mt-2">
                  <Button>{t("createPaySlip")}</Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Payout;
