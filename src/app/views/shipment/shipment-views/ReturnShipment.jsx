import React from "react";
import { Table, Button, Card, Form, Row, Col } from "react-bootstrap";

import { default as t } from "../../../../translations";

const ReturnShipment = () => {
  const celldata = [
    "#",
    t("awb"),
    t("sender"),
    t("returnLocation"),
    t("reason"),
    t("deliveryAttempts"),
  ];

  return (
    <div>
      <Row>
        <Col>
          <h2>{t("returnShipments")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Button size="lg">{t("export")}</Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>
                    <h5>{t("warehouse")}</h5>
                  </Form.Label>
                  <Form.Select>
                    <option selected="true" disabled="disabled">
                      --{t("selectWarehouse")}--
                    </option>
                    <option>Item</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </Row>
      <Card elevation={6} className="w-100 overflow-auto mt-4">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              {celldata.map((item) => (
                <th className="pl-sm-24">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ReturnShipment;
