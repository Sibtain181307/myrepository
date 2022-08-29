import React from "react";
import { Table, Card, Form, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const CreateTrips = () => {
  return (
    <div>
      <h2>{t("createTrip")}</h2>
      <div>
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
              <Row>
                <Col md={6} className="mt-3">
                  <Form.Label>
                    <h5>{t("driver")}</h5>
                  </Form.Label>
                  <Form.Select>
                    <option selected="true" disabled="disabled">
                      --{t("selectDriver")}--
                    </option>
                    <option>Item</option>
                    <option>Item</option>
                  </Form.Select>
                </Col>

                <Col md={6} className="mt-3">
                  <Form.Label>
                    <h5>{t("vehicle")}</h5>
                  </Form.Label>
                  <Form.Select>
                    <option selected="true" disabled="disabled">
                      --{t("selectVehicle")}--
                    </option>
                    <option>Item </option>
                    <option>Item </option>
                    <option>Item </option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </div>
      <Row className="mt-4">
        <h2> {t("pickupShipments")}</h2>
        <Card elevation={6} className="w-100 overflow-auto">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">#</th>
                <th className="pl-sm-24">{t("awb")}</th>
                <th className="pl-sm-24">{t("pickupType")}</th>
                <th className="px-0">{t("shipper")}</th>
                <th className="px-0">{t("shipmentType")}</th>
                <th className="px-0">{t("location")}</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
        </Card>
      </Row>

      <Row className="mt-4">
        <h2>{t("deliveryShipment")}</h2>
        <Card elevation={6} className="w-100 overflow-auto">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">#</th>
                <th className="pl-sm-24">{t("awb")}</th>
                <th className="pl-sm-24">{t("deliveryType")}</th>
                <th className="px-0">{t("shipper")}</th>
                <th className="px-0">{t("shipmentType")}</th>
                <th className="px-0">{t("location")}</th>
                <th className="px-0">{t("attempts")}</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
        </Card>
      </Row>
    </div>
  );
};

export default CreateTrips;
