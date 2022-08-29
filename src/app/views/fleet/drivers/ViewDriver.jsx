import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const ViewDriver = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("viewDrivers")}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-row-reverse mx-5">
          <Link to="/fleet/adddriver">
            <Button size="lg" className="mx-1">
              <i className="i-Add"></i> {t("addDriver")}
            </Button>
          </Link>

          <Link to="/fleet/adddriver">
            {" "}
            <Button size="lg" className="mx-1">
              {t("export")}
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
              <th className="px-0">{t("employedBy")}</th>
              <th className="px-0">{t("Status")}</th>
              <th className="px-0">{t("allocatedTo")}</th>
              <th className="px-0">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <Link to="/fleet/driverdetails">
              {" "}
              <td>{t("details")}</td>
            </Link>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/fleet/editdriver">
                <Button variant="success">
                  <i className="i-Pen-2"></i>
                </Button>{" "}
              </Link>
              <Button variant="danger">
                <i className="i-Remove"></i>
              </Button>
            </td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ViewDriver;
