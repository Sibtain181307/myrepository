import React from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../../translations";

const CreateExpense = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("createExpense")} </h2>
        </Col>
      </Row>

      <Row>
        <Card>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form>
                  <Form.Label>{t("selectDate")} </Form.Label>
                  <Form.Control type="date" />
                </Form>
              </Col>
              <Col md={6}>
                <Form>
                  <Form.Label>{t("expenseTitle")} </Form.Label>
                  <Form.Control />
                </Form>
              </Col>

              <Col md={6}>
                <Form>
                  <Form.Label>{t("description")} </Form.Label>
                  <Form.Control />
                </Form>
              </Col>

              <Col md={6}>
                <Form>
                  <Form.Label>{t("amount")} </Form.Label>
                  <Form.Control type="number" />
                </Form>
              </Col>

              <Col md={6}>
                <Form>
                  <Form.Label>{t("tax")} </Form.Label>
                  <Form.Control type="number" />
                </Form>
              </Col>

              <Col md={6}>
                <Form>
                  <Form.Label>{t("net")} </Form.Label>
                  <Form.Control />
                </Form>
              </Col>

              <Col md={6}>
                <Form>
                  <Form.Label>{t("quantity")} </Form.Label>
                  <Form.Control />
                </Form>
              </Col>

              <Col md={6}>
                <Form>
                  <Form.Label>{t("attachment")} </Form.Label>
                  <Form.Control />
                </Form>
              </Col>

              <div className="mt-2 d-flex justify-content-end">
                <Button>{t("create")} </Button>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default CreateExpense;
