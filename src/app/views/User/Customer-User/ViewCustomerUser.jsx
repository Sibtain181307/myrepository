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
import DataFetcher from "../UserComponents/DataFetcher";
import React, { Component } from "react";

export default class ViewCustomerUser extends Component {
  ViewCustomerData = [];

  GetViewData = (props) => {
    this.ViewCustomerData = props;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <DataFetcher
          Data={this.GetViewData}
          url="http://15.235.141.168:70/user/get-users"
          event="Get-Customer_Users"
        />
        <Row>
          <Col>
            <h2>{t("Customer User")}</h2>
          </Col>
          <Col className="d-flex flex-row-reverse mx-5">
            <Link to="/CustomerUser/add">
              <Button size="lg">
                <i className="i-Add"></i> {t("Add Customer")}
              </Button>
            </Link>
          </Col>
        </Row>

        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">{t("ID")}</th>
                <th className="pl-sm-24">{t("name")}</th>
                <th className="px-0">{t("Number")}</th>
                <th className="px-0">{t("address")}</th>
                <th className="px-0">{t("action")}</th>
              </tr>
            </thead>
            {this.ViewCustomerData.map((i) => {
              return (
                <tbody>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.number}</td>
                  <td>{i.address}</td>

                  <td>
                    <Link
                      to={{
                        pathname: "/CustomerUser/edit",
                        id: i.id,
                        path: "/CustomerUser/view",
                      }}
                    >
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
