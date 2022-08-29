import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../../translations";

const ViewStaff = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("viewStaff")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Link to="/warehousecrew/addstaff">
            <Button size="lg">
              <i className="i-Add"></i> {t("addStaff")}
            </Button>
          </Link>
        </Col>
      </Row>

      <Card elevation={6} className="w-100 overflow-auto mt-4">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              <th className="pl-sm-24">{t("id")}</th>
              <th className="pl-sm-24">{t("name")}</th>
              <th className="px-0">{t("designation")} </th>
              <th className="px-0">{t("status")}</th>
              <th className="px-0">{t("allocatedTo")}</th>
              <th className="px-0">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <Link to="/warehousecrew/staffdetails">
              <td>{t("details")}</td>
            </Link>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/warehousecrew/editstaff">
                <Button variant="success">
                  <i className="i-Pen-2"></i>
                </Button>{" "}
              </Link>
              <Link>
                {" "}
                <Button variant="danger">
                  <i className="i-Remove"></i>
                </Button>
              </Link>
            </td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ViewStaff;
