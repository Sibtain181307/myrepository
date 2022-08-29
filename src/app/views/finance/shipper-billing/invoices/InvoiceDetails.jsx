import React from "react";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../../translations";

const InvoiceDetails = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("invoiceDetails")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Button size="lg" onClick={() => window.print()}>
            <i className="i-Add"></i> {t("exportSheet")}
          </Button>
        </Col>
      </Row>

      <section>
        <div>
          <Row className="mt-4">
            <Card>
              <Card.Body>
                <Row id="print-area">
                  <Col sm={6} md={6}>
                    <Table>
                      <tbody>
                        <tr>
                          <td>{t("invoiceNumber")}</td>
                          <td>17</td>
                        </tr>
                        <tr>
                          <td>{t("fromDate")}</td>
                          <td>11/02/22</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>

                  <Col sm={6} md={6}>
                    <Table>
                      <tbody>
                        <tr>
                          <td>{t("shipper")}</td>
                          <td>Spama</td>
                        </tr>
                        <tr>
                          <td>{t("toDate")}</td>
                          <td>12/02/22</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Row>
                    <Col sm={6} md={6}>
                      <Table>
                        <tbody>
                          <tr>
                            <td>{t("shipper")}</td>
                            <td>third one</td>
                          </tr>
                          <tr>
                            <td>{t("toDate")}</td>
                            <td>12/02/22</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </section>

      <Row>
        <Col></Col>
      </Row>

      <Card elevation={6} className="w-100 overflow-auto mt-4">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              <th className="pl-sm-24">{t("awb")}</th>
              <th className="pl-sm-24">{t("shippingCharges")}</th>
              <th className="px-0">{t("insurance")} </th>
              <th className="px-0">{t("codCollection")}</th>
              <th className="px-0">{t("return")}</th>
              <th className="px-0">{t("onlineCod")}</th>
              <th className="px-0">{t("taxableAmount")}</th>
              <th className="px-0">{t("vat")}</th>
              <th className="px-0">{t("total")}</th>
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
    </div>
  );
};

export default InvoiceDetails;
