import React from "react";
import { Link } from "react-router-dom";
import { Table, Card, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const VehicleDetails = () => {
  const celldata = [
    t("makeYear"),
    t("makeModel"),
    t("registration"),
    t("mileage"),
  ];

  return (
    <div>
      <Row>
        <Col md={6}>
          <h2>
            {" "}
            {t("viewVehicles")} / {t("vehicleDetails")}
          </h2>
          <Card className="p-2 bg-dark pb-0 ">
            <Table className="text-center">
              {celldata.map((item) => (
                <tr>
                  <td
                    className="bg-primary px-0 mx-0 text-white border"
                    style={{ width: "20%" }}
                  >
                    {item}
                  </td>
                  <td className="px-0 bg-light border"></td>
                </tr>
              ))}
            </Table>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{t("attachments")}</Card.Title>
              <Row>
                <Col>
                  <i className="i-File-Block" style={{ fontSize: "30px" }}></i>{" "}
                  <span>Contract</span>
                </Col>
                <Col>
                  <Link>
                    <i className="i-Eye" style={{ fontSize: "20px" }}></i>{" "}
                  </Link>
                  <Link>
                    <i className="i-Down" style={{ fontSize: "20px" }}></i>
                  </Link>
                </Col>
                <Col></Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <i className="i-ID-Card" style={{ fontSize: "30px" }}></i>{" "}
                  <span>ID</span>
                </Col>
                <Col>
                  <Link>
                    <i className="i-Eye" style={{ fontSize: "20px" }}></i>{" "}
                  </Link>
                  <Link>
                    <i className="i-Down" style={{ fontSize: "20px" }}></i>
                  </Link>
                </Col>
                <Col></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VehicleDetails;
