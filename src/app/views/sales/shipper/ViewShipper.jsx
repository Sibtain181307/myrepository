import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, Card, Form, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const ViewShipper = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("viewShipper")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Link to="/sales/addshipper">
            <Button size="lg">
              <i className="i-Add"></i> {t("addShipper")}
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>
                    <h5>{t("shipper")}</h5>
                  </Form.Label>
                  <Form.Select>
                    <option selected="true" disabled="disabled">
                      --{t("selectShipper")}--
                    </option>
                    <option>item</option>
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
              <th className="pl-sm-24">{t("id")}</th>
              <th className="pl-sm-24">{t("fullName")}</th>
              <th className="px-0">{t("contractTenure")}</th>
              <th className="px-0">{t("contactNumber")}</th>
              <th className="px-0">{t("email")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
              <Link to="/warehouse/editwarehouse">
                <Button variant="success">
                  <i className="i-Pen-2"></i>
                </Button>{" "}
              </Link>
              <Link>
                <Button variant="danger">
                  <i className="i-Remove"></i>
                </Button>
              </Link>
            </td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ViewShipper;
