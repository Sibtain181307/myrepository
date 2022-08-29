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
import { default as t } from "../../../../../translations";

const CreateInvoices = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("createInvoice")}</h2>
        </Col>
      </Row>

      <Row>
        <Card>
          <Card.Body>
            <Col md={6}>
              <Form>
                <Form.Label>{t("shipper")}</Form.Label>
                <InputGroup>
                  <Form.Control />
                  <DropdownButton>
                    <Dropdown.Item>Item1</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
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
                <h4>{t("billingType")}</h4>
              </Col>
              <Col>
                <h4>{t("postpaid")}</h4>
              </Col>

              <Col>
                <h4>{t("balance")}</h4>
              </Col>
              <Col>
                <h4>Sr. 12345</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-4">
        <Card elevation={6} className="mt-4">
          <Card.Body>
            <Card.Title className="text-center">{t("forPostpaid")}</Card.Title>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("lastBillClosingDate")}</Form.Label>
                  <Form.Control value="22/03/22" disabled />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("newInvoiceClosingDate")}</Form.Label>
                  <Form.Control type="date" />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("newInvoiceDueDate")}</Form.Label>
                  <Form.Control type="date" />
                </Col>

                <div className="d-flex justify-content-center justify-content-md-end mt-2">
                  <Button>{t("create")}</Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>

      <Row className="my-4">
        <Card elevation={6} className="mt-4">
          <Card.Body>
            <Card.Title className="text-center">{t("forPrepaid")}</Card.Title>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("selectPaymentMethod")}</Form.Label>
                  <InputGroup>
                    <Form.Control palceholder="--select payment method--" />
                    <DropdownButton>
                      <Dropdown.Item>Itemm1</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label>{t("creditAmount")}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="enter credit amount"
                  />
                </Col>

                <Col md={6}>
                  <Form.Label>{t("paymentProof")}</Form.Label>
                  <Form.Control type="file" />
                </Col>

                <div className="d-flex justify-content-center justify-content-md-end mt-2">
                  <Button>{t("credit")}</Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default CreateInvoices;
