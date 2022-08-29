import React from "react";
import {
  Table,
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

export const MarkShipment = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("markShipments")}</h2>
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
                    <option disabled selected="true">
                      --{t("selectWarehouse")}--
                    </option>
                    <option>item1</option>
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
              <th className="pl-sm-24">#</th>
              <th className="pl-sm-24">{t("awb")}</th>
              <th className="px-0">{t("shipper")}</th>
              <th className="px-0">{t("lastAction")}</th>
              <th className="px-0">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button variant="success" className="text-black">
                {t("transit")}
              </Button>{" "}
              <Button variant="danger">{t("return")}</Button>
            </td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default MarkShipment;
