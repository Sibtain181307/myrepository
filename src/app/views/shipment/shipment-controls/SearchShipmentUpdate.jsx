import React from "react";
import { Table, Button, Card, Form, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const SearchShipmentUpdate = () => {
  return (
    <div>
      <Row>
        <h2>
          {t("searchShipments")} / {t("update")}
        </h2>
      </Row>
      <Row className="mt-4">
        <h2>AWB - ZL-14-000001</h2>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Table>
                <tr>
                  <th>{t("info")}</th>
                  <th> </th>
                </tr>
                <tbody>
                  <tr>
                    <td>{t("shipper")} </td>
                    <td>Amazon Jeddah</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mt-2">
          <Form>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  {t("updateReceiverInformation")}
                </Card.Title>
                <Form.Label>{t("receiverName")}</Form.Label>
                <Form.Control></Form.Control>

                <Form.Label className="mt-2 ">{t("contactNumber")}</Form.Label>
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
                    <Button>{t("update")}</Button>
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

        <Col md={6}>
          <Form>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  {t("updateDeliveryLocation")}
                </Card.Title>
                <Form.Label>{t("deliveryLocation")}</Form.Label>
                <Form.Control></Form.Control>

                <Form.Label className="mt-2 ">
                  {t("address")} ({t("optionalForLastMile")})
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
                    <Button>{t("update")}</Button>
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

export default SearchShipmentUpdate;
