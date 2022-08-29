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
import { default as t } from "../../../../translations";
import DataFetcher from "app/views/User/UserComponents/DataFetcher";
import React, { Component } from "react";
import axios from "axios";
export default class PendingOrders extends Component {
  ViewPendingOrders = [];
  setid = () => {
    const user = JSON.parse(localStorage.user);
    const id = user.typeId;
    return id;
  };
  GetViewData = (props) => {
    this.ViewPendingOrders = props;
    console.log(props);
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <DataFetcher
          Data={this.GetViewData}
          url="http://15.235.141.168:70/order/get_orders"
          event="Get-Cust-Pending-Orders"
          idsetter={this.setid()}
        />
        {console.log(this.setid())}
        <Row>
          <Col>
            <h2>{t("Pending Shipments")}</h2>
          </Col>
          <Col className="d-flex flex-row-reverse mx-5">
            {this.createclicked === false ? (
              <Button size="lg" onClick={this.handleCreate}>
                <i className="rounded"></i> {t("Create Palette for Pickup")}
              </Button>
            ) : null}

            {this.createclicked === true ? (
              <Button size="lg" onClick={this.handlesubmit}>
                <i className="rounded"></i> {t("Submit Pallette for Pickup")}
              </Button>
            ) : null}
          </Col>
        </Row>

        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-0">{t("awb")}</th>
                <th className="pl-0">{t("log Charges")}</th>
                <th className="px-0">{t("Net Total")}</th>
                <th className="px-0">{t("Sub Total")}</th>
                <th className="px-0">{t("Vat")}</th>
                <th className="px-0">{t("Weight")}</th>
                <th className="px-0">{t("Weight Charges")}</th>
                <th className="px-0">{t("action")}</th>
                {this.createclicked === true ? (
                  <th className="px-0">{t("Select")}</th>
                ) : null}
              </tr>
            </thead>
            {this.ViewPendingOrders.map((i) => {
              return (
                <tbody>
                  <td>{i.awb}</td>
                  <td>{i.logCharges}</td>
                  <td>{i.netTotal}</td>
                  <td>{i.subTotal}</td>
                  <td>{i.vat}</td>
                  <td>{i.weight}</td>
                  <td>{i.weightCharges}</td>
                  <td>
                    <Button className="bg-success text-white border-0">
                      <i className="i-Pen-2 "></i>
                    </Button>{" "}
                    <Button className="bg-primary text-white">
                      <i className="i-Eye"></i>
                    </Button>
                  </td>

                  {this.createclicked === true ? (
                    <td>
                      <Form.Check
                        name="checkbox1"
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            this.selectsetter(i.id);
                            console.log(i.id);
                          }
                        }}
                      />
                    </td>
                  ) : null}
                </tbody>
              );
            })}
          </Table>
        </Card>
      </div>
    );
  }
}
