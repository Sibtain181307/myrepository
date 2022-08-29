import React from "react";
import { Table, Card, Form, Row, Col } from "react-bootstrap";

import { default as t } from "../../../../translations";

const UtilityPayouts = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("utilityPayments")}</h2>
        </Col>
      </Row>
      <Row>
        <Form>
          <Card>
            <Row>
              <Col md={6}>
                <Card.Body>
                  <Form.Label>{t("selectTenure")}</Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Label>{t("from")}</Form.Label>
                      <Form.Control type="date" />
                    </Col>
                    <Col md={6}>
                      <Form.Label>{t("to")}</Form.Label>
                      <Form.Control type="date" />
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Form>
      </Row>

      <Row>
        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">{t("title")}</th>
                <th className="pl-sm-24">{t("description")}</th>
                <th className="px-0">{t("amount")} </th>
                <th className="px-0">{t("dueDate")} </th>
                <th className="px-0">{t("tax")} </th>
                <th className="px-0">{t("amountAfterDueDate")} </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Row>
    </div>
  );
};

export default UtilityPayouts;
