import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSchedules } from "app/redux/actions/ExampleAction";
import { Table, Button, Card, Form, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";
import { Cities } from "../../../cities";

const ViewVehicle = (props) => {
  useEffect(() => {
    props.getSchedules("03/09/22");
  }, []);

  const sch = props.data;

  return (
    <div>
      <Row>
        <Col>
          {/* {console.log(sch.S_Time)} */}
          <h2>{t("viewVehicles")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Link to="/fleet/addvehicle">
            <Button size="lg" className="mx-1">
              <i className="i-Add"></i> {t("addVehicle")}
            </Button>
          </Link>
        </Col>

        <Row className="mt-2">
          <Col>
            <Form>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Form.Label>
                        <h5>{t("warehouse")}</h5>
                      </Form.Label>
                      <Form.Select>
                        <option selected="true" disabled>
                          --{t("selectWarehouse")}--
                        </option>
                        <option>item</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Form>
          </Col>
        </Row>
      </Row>

      <Card elevation={6} className="w-100 overflow-auto mt-4">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              <th className="pl-sm-24">{t("id")}</th>
              <th className="pl-sm-24">{t("makeYear")}</th>
              <th className="px-0">{t("makeModel")}</th>
              <th className="px-0">{t("mileage")}</th>
              <th className="px-0">{t("purchaseSlip")}</th>
              <th className="px-0">{t("registrationSlip")}</th>
              <th className="px-0">{t("status")}</th>
              <th className="px-0">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <Link to="/fleet/vehicledetails">
              {" "}
              <td>Details</td>
            </Link>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/fleet/editvehicle">
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

      <div className="mt-5">
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                </tr>

                {sch ? (
                  sch.map((item) => (
                    <tr>
                      <td>{item.Date}</td>
                      <td>{item.S_Time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>No entries found</td>
                    <td>No entries found</td>
                  </tr>
                )}
              </thead>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ data: state.example.data });
export default connect(mapStateToProps, { getSchedules })(ViewVehicle);
