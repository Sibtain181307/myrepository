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
import axios from "axios";
import React, { Component } from "react";
import GetCityName from "./../LocationComponents/GetCityName";
import DataFetcher from "app/views/User/UserComponents/DataFetcher";
export default class ViewCustomerWareHouse extends Component {
  ViewCustWarehouse = [];

  ValueGetter = (props) => {
    this.ViewCustWarehouse = [];
    console.log(props);
    axios
      .get("http://15.235.141.168:70/location/view", {
        headers: { SessionKey: "123", Event: "View-Biz-Warehouse" },
      })
      .then((res) => {
        res.data.data.map((i, index) => {
          {
            console.log(i);
            if (props == i.cityId) {
              this.ViewCustWarehouse.push(i);
              this.forceUpdate();
              console.log(this.ViewCustWarehouse);
            } else {
              console.log("this is not working");
            }
          }
        });
        if (res.status === 200) {
          return res;
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  GetViewData = (props) => {
    this.ViewCustWarehouse = props;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <DataFetcher
          Data={this.GetViewData}
          url="http://15.235.141.168:70/location/view"
          event="View-Biz-Warehouse"
        />
        <Row>
          <Col>
            <h2>{t("View Customer Warehouse")}</h2>
          </Col>
          <Col className="d-flex flex-row-reverse mx-5">
            <Link to="/AddCustomerWarehouse">
              <Button size="lg">
                <i className="i-Add"></i> {t("Add Customer Warehouse")}
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <GetCityName Data={this.ValueGetter} />
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Row>
        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-0">{t("ID")}</th>
                <th className="pl-0">{t("warehouse")}</th>
                <th className="px-0">{t("Address")}</th>
                <th className="px-0">{t("Location")}</th>
                <th className="px-0">{t("Contact")}</th>
                <th className="px-0">{t("Contact Type")}</th>
              </tr>
            </thead>
            {this.ViewCustWarehouse.map((i) => {
              return (
                <tbody>
                  <td>{i.id}</td>
                  <td>{i.warhouse}</td>
                  <td>{i.address}</td>
                  <td>{i.location}</td>
                  <td>{i.contact}</td>
                  <td>{i.contactType}</td>
                  <td>
                    <Link to={{ pathname: "/EditCustomerWarehouse", id: i.id }}>
                      <Button variant="success">
                        <i className="i-Pen-2"></i>
                      </Button>{" "}
                    </Link>
                    <Button variant="danger">
                      <i className="i-Remove"></i>
                    </Button>
                  </td>
                </tbody>
              );
            })}
          </Table>
        </Card>
      </div>
    );
  }
}
