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

export default class ViewVendor extends Component {
  ViewVendorData = [];

  GetViewData = (props) => {
    this.ViewVendorData = props;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <DataFetcher
          Data={this.GetViewData}
          url="http://15.235.141.168:70/business/get-businesses"
          event="Get-Vendors"
        />
        <Row>
          <Col>
            <h2>{t("Vendors")}</h2>
          </Col>
          <Col className="d-flex flex-row-reverse mx-5">
            <Link to="/vendor/add">
              <Button size="lg">
                <i className="i-Add"></i> {t("Add Vendor")}
              </Button>
            </Link>
          </Col>
        </Row>

        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="px-0">{t("ID")}</th>
                <th className="px-0">{t("name")}</th>
                <th className="px-0">{t("Location")}</th>
                <th className="px-0">{t("Contact")}</th>
                <th className="px-0">{t("Contract Code")}</th>
                <th className="px-0">{t("action")}</th>
              </tr>
            </thead>
            {this.ViewVendorData.map((i) => {
              return (
                <tbody>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.location}</td>
                  <td>{i.contact}</td>
                  <td>{i.contractCode}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/vendor/edit",
                        id: i.id,
                        path: "/vendor/view",
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
