import React from "react";
import {
  Table,
  Row,
  Col,
  Form,
  Card,
  InputGroup,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";

import { default as t } from "../../../../translations";

const CodCollection = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2 className="rtl-none">{t("codCollection")}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h4>{t("financeType")}</h4>
              </Col>
              <Col>
                <h4>Data</h4>
              </Col>

              <Col>
                <h4>{t("pendingCod")}</h4>
              </Col>
              <Col>
                <h4>Data</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row className="mt-3 ">
        <Col md={5}>
          <Card elevation={6} className="w-100 overflow-auto mt-4">
            <Card.Body>
              <Card.Title>{t("pendingCod")}</Card.Title>
              <Table>
                <tbody>
                  <tr>
                    <th>{t("shipper")}</th>
                    <th>{t("amount")}</th>
                  </tr>
                  <tr>
                    <td>Sample Text</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7} className="mt-4">
          <Row>
            <Form>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    {t("pendingCod")}
                  </Card.Title>
                  <Row>
                    <Col md={6}>
                      <Form.Label>{t("warehouse")}</Form.Label>
                      <InputGroup>
                        <Form.Control placeholder="--select warehouse--" />
                        <DropdownButton>
                          <Dropdown.Item href="#/action-1">
                            {t("action")}
                          </Dropdown.Item>
                        </DropdownButton>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <Form.Label>{t("amount")}</Form.Label>
                      <Form.Control placeholder="--enter amount--" />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Label>{t("selectPaymentMethod")}</Form.Label>
                      <InputGroup>
                        <Form.Control placeholder="--select payment method--" />
                        <DropdownButton>
                          <Dropdown.Item href="#/action-1">
                            {t("action")}
                          </Dropdown.Item>
                        </DropdownButton>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <Form.Label>{t("proof")}</Form.Label>
                      <Form.Control type="file" />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end mt-2">
                    <Button>{t("received")}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Form>
          </Row>
          <Row>
            <Col>
              <Card elevation={6} className="w-100 overflow-auto my-4">
                <Card.Body>
                  <Card.Title>{t("warehouseCod")}</Card.Title>
                  <Table>
                    <tbody>
                      <tr>
                        <th>{t("warehouse")}</th>
                        <th>{t("warehouseCollection")}</th>
                        <th>{t("driverColleciton")}</th>
                      </tr>
                      <tr>
                        <td>Sample Text</td>
                        <td>Sample Text</td>
                        <td>Sample Text</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CodCollection;
