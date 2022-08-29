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

const IntripShipment = () => {
  const celldata = [
    "#",
    t("awb"),
    t("pickupType"),
    t("locationType"),
    t("driver"),
    t("dispatchTime"),
    t("shipper"),
    t("shipmentType"),
    t("action"),
  ];

  return (
    <div>
      <Row>
        <Col>
          <h2>{t("inTripShipments")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Button size="lg" className="mx-4 rtl-pe-4 text-white fw-bold my-2">
            Export
          </Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>
                    <h2>{t("warehouse")}</h2>
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
        <Card.Body>
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                {celldata.map((item) => (
                  <th className="pl-sm-24">{item}</th>
                ))}
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
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};
export default IntripShipment;
