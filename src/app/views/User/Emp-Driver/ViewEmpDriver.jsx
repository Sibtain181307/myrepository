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

export default class ViewEmpDriver extends Component {
  ViewEmpDriverData = [];

  GetViewData = (props) => {
    this.ViewEmpDriverData = props;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <DataFetcher
          Data={this.GetViewData}
          url="http://15.235.141.168:70/user/get-users"
          event="Get-Driver-Employs"
        />
        <Row>
          <Col>
            <h2>{t("Employ Driver")}</h2>
          </Col>
          <Col className="d-flex flex-row-reverse mx-5">
            <Link to="/EmpDriver/add">
              <Button size="lg">
                <i className="i-Add"></i> {t("Add Employ Driver")}
              </Button>
            </Link>
          </Col>
        </Row>

        <Card elevation={6} className="w-100 overflow-auto mt-4">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="px-0">{t("ID")}</th>
                <th className="px-0">{t("Employ Type")}</th>
                <th className="pl-sm-24">{t("name")}</th>
                <th className="px-0">{t("Number")}</th>
                <th className="px-0">{t("address")}</th>
                <th className="px-0">{t("action")}</th>
              </tr>
            </thead>
            {this.ViewEmpDriverData.map((i) => {
              return (
                <tbody>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.empType}</td>
                  <td>{i.number}</td>
                  <td>{i.address}</td>

                  <td>
                    <Link
                      to={{
                        pathname: "/EmpDriver/edit",
                        id: i.id,
                        path: "/EmpDrvier/view",
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
