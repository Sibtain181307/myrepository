import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Card,
  Form,
  InputGroup,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { default as t } from "../../../../translations";

const ShipperAccounts = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("shipperAccounts")}</h2>
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
            <Row>
              <Col>
                <h4>{t("billingType")}</h4>
              </Col>
              <Col>
                <h4>Data</h4>
              </Col>

              <Col>
                <h4>{t("balance")}</h4>
              </Col>
              <Col>
                <h4>Data</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-4">
        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Card.Body>
            <Card.Title className="text-center">
              {t("accountStatement")}
            </Card.Title>

            <Table style={{ minWidth: "700px" }}>
              <thead>
                <tr>
                  <th>{t("id")}</th>
                  <th>{t("transactionDescription")} </th>
                  <th>
                    {t("credit")}/ {t("debit")}
                  </th>
                  <th>{t("amount")}</th>
                  <th>{t("netBalance")}</th>
                  <th>{t("recordedTime")}</th>
                  <th>{t("proof")}</th>
                </tr>
              </thead>
              <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Link>
                    {" "}
                    <Button>
                      <i className="i-File-Block"></i>
                    </Button>
                  </Link>
                </td>
              </tbody>
            </Table>

            <div className="d-flex justify-content-end">
              <Button className="mx-1" variant="success">
                {t("exportStatement")}
              </Button>
              <Button className="mx-1" variant="danger">
                {t("printStatement")}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default ShipperAccounts;
