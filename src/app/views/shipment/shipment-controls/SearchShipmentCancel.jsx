import React from "react";
import { Table, Button, Card, Form, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const SearchShipmentCancel = () => {
  return (
    <div>
      <Row>
        <h2>
          {" "}
          {t("searchShipments")} / {t("cancel")}
        </h2>
      </Row>
      <Row className="mt-4">
        <h2>AWB - ZL-14-000001</h2>
      </Row>
      <Row>
        <Col md={6} className="mt-4">
          <Card>
            <Card.Body>
              <Table>
                <tr>
                  <th>{t("name")}</th>
                  <th>{t("info")}</th>
                </tr>
                <tbody>
                  <tr>
                    <td>{t("shipper")}</td>
                    <td>Amazon Jeddah</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mt-4">
          <Form>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  {t("customerCancellation")}
                </Card.Title>
                <Form.Label>{t("cancellationReason")}</Form.Label>
                <Form.Control></Form.Control>

                <Form.Label className="mt-2 ">
                  {t("cancellationNote")}
                </Form.Label>
                <Form.Control></Form.Control>
                <Row className="mt-2 ">
                  <Col className="d-flex justify-content-end">
                    <Button>{t("sendOtp")}</Button>
                  </Col>
                </Row>

                <Form.Label className="mt-2 ">{t("enterOtp")}</Form.Label>
                <Form.Control></Form.Control>
                <Row className="mt-2 ">
                  <Col className="d-flex justify-content-end">
                    <Button variant="danger">{t("cancel")}</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>

      <Row className="my-4">
        <Col md={6}>
          <Form>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  {t("shipmentLogs")}
                </Card.Title>
                <Form.Control as="textarea"></Form.Control>
              </Card.Body>
            </Card>
          </Form>
        </Col>

        <Col md={6} className="mt-4">
          <Form>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  [{t("customerName")}] {t("cancellation")}
                </Card.Title>
                <Form.Label>{t("cancellationReason")}</Form.Label>
                <Form.Control></Form.Control>

                <Form.Label className="mt-2 ">
                  {t("attachmentProof")}
                </Form.Label>
                <Form.Control></Form.Control>

                <Form.Label className="mt-2 ">
                  {t("cancellationNote")}
                </Form.Label>
                <Form.Control></Form.Control>

                <Form.Label className="mt-2 ">{t("enterOtp")}</Form.Label>
                <Form.Control></Form.Control>
                <Row className="mt-2 ">
                  <Col className="d-flex justify-content-end">
                    <Button variant="danger">{t("cancel")}</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SearchShipmentCancel;
