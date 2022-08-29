import React from "react";
import {
  Table,
  Row,
  Col,
  Form,
  Card,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { default as t } from "../../../../translations";

const SearchShipment = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2 className="rtl-none">{t("searchShipments")}</h2>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("searchByAwb")}</Form.Label>
                  <FormControl
                    placeholder="--Enter AWB Number--"
                    aria-label="Startdate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("searchByCustomerId")}</Form.Label>
                  <FormControl
                    placeholder="--Enter Customer ID--"
                    aria-label="enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("searchByContactNumber")}</Form.Label>

                  <FormControl
                    placeholder="--Enter Contact Number--"
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>

              <hr />
              <Row>
                <Col className="d-flex flex-sm-row-reverse justify-content-center justify-content-center justify-content-sm-start ">
                  <Button size="lg">{t("search")}</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </Row>

      <Row>
        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Card.Body>
            <Row>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{t("awb")}</th>
                    <th>{t("shipper")}</th>
                    <th>{t("lastUpdate")}</th>
                    <th>{t("currentLocation")}</th>
                    <th>{t("action")}</th>
                  </tr>
                </thead>
                <tbody>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link to="/shipmentcontrols/searchshipmentupdate">
                      <Button variant="success">{t("update")}</Button>
                    </Link>{" "}
                    <Link to="/shipmentcontrols/searchshipmentcancel">
                      <Button variant="danger">{t("cancel")}</Button>
                    </Link>{" "}
                  </td>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default SearchShipment;
