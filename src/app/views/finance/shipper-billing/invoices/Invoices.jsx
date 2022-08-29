import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../../translations";

const Invoices = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("invoices")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Link to="/finance/createinvoice">
            <Button size="lg">
              <i className="i-Add"></i> {t("newInvoice")}
            </Button>
          </Link>
        </Col>
      </Row>

      <Card elevation={6} className="w-100 overflow-auto mt-4">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              <th className="pl-sm-24">{t("id")}</th>
              <th className="pl-sm-24">{t("invoiceTo")}</th>
              <th className="px-0">{t("invoiceFor")} </th>
              <th className="px-0">{t("status")}</th>
              <th className="px-0">{t("amount")}</th>
              <th className="px-0">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Link to="/finance/invoicedetails">
              <td>
                <i className="i-Full-View-Window"></i>
              </td>
            </Link>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Invoices;
