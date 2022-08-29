import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import { Breadcrumb } from "@gull";
class GeneratePayableSlip extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>Generate Payable Slip</h2>
          </Col>
          <Col className="d-flex flex-row-reverse mx-5">
            <Link to="/warehousecrew/addstaff">
              <Button size="lg">
                <i className="i-Add"></i> Export Slip
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="mt-4">
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Make </td>
                        <td>Invoice</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Slip</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col md={6}>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Shipper</td>
                        <td>Spama</td>
                      </tr>
                      <tr>
                        <td>To Date</td>
                        <td>12/02/22</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">AWB</th>
                <th className="pl-sm-24">Shipping Charges</th>
                <th className="px-0">Insurance </th>
                <th className="px-0">COD Collection</th>
                <th className="px-0">Return</th>
                <th className="px-0">Online COD</th>
                <th className="px-0">Taxable Amount</th>
                <th className="px-0">VAT</th>
                <th className="px-0">Total</th>
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
  }
}

export default GeneratePayableSlip;
