import React, { useState } from "react";
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
  Modal,
} from "react-bootstrap";

import { default as t } from "../../../../translations";

const DriverManagement = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const celldata = [
    t("employeeId"),
    t("fullName"),
    t("streetAddress"),
    t("city"),
    t("country"),
    t("postalCode"),
    t("warehouse"),
    t("designation"),
    t("idNumber"),
    t("contractId"),
    t("salary"),
    t("joiningDate"),
    t("contractExpiry"),
    t("employeeType"),
    t("vendor"),
  ];

  return (
    <div>
      <Row>
        <Col>
          <h2>{t("staffManagement")}</h2>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{t("addDriverVehicle")}</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>{t("vehiclePlateNumber")}</Form.Label>
            <Form.Control placeholder="enter vehicle plate number" />
            <Form.Label>{t("vehicleModel")}</Form.Label>
            <Form.Control placeholder="enter vehicle model" />
            <Form.Label>{t("vehiclePlateYear")}</Form.Label>
            <Form.Control placeholder="enter vehicle make year" />
            <Form.Label>{t("cargoCapacity")}</Form.Label>
            <Form.Control placeholder="enter carago capacity in Kg" />
            <div className="mt-2 d-flex justify-content-center">
              <Button>{t("addVehicle")}</Button>
            </div>
          </Modal.Body>
        </Form>
      </Modal>

      <Row className="mt-1 ">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>
                    <h5>{t("selectWarehouse")}</h5>
                  </Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="--select warehouse--"
                      aria-label="Warehouse"
                      aria-describedby="basic-addon1"
                    />
                    <DropdownButton>
                      <Dropdown.Item>Item1</Dropdown.Item>
                      <Dropdown.Item>Item2</Dropdown.Item>
                      <Dropdown.Item>Item3</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>

                <Col md={6}>
                  <Form.Label>
                    <h5>{t("selectDriver")}</h5>
                  </Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="--select driver--"
                      aria-label="Warehouse"
                      aria-describedby="basic-addon1"
                    />
                    <DropdownButton>
                      <Dropdown.Item>Item1</Dropdown.Item>
                      <Dropdown.Item>Item2</Dropdown.Item>
                      <Dropdown.Item>Item3</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </Row>

      <Row className="mt-2">
        <Col md={6}>
          <Card>
            <Card.Body>
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
              <div className="d-flex justify-content-end">
                <Button variant="primary" onClick={handleShow}>
                {t("addDriverAndVehicle")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Row>
            <Card>
              <Card.Body>
                <Form>
                  <Card.Title>{t("generateCredentials")}</Card.Title>
                  <Form.Label>{t("username")}</Form.Label>
                  <Form.Control type="text" />
                  <Form.Label>{t("password")}</Form.Label>
                  <Form.Control type="password" />
                  <div className="d-flex justify-content-end mt-2">
                    <Button>{t("generate")}</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Row>

          <Row className="mt-2">
            <Card>
              <Card.Body>
                <Form>
                  <Card.Title>{t("terminateUser")}</Card.Title>
                  <Form.Label>{t("terminationReason")}</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="--select termination members--"
                    />
                    <DropdownButton></DropdownButton>
                  </InputGroup>
                  <Form.Label>{t("note")}</Form.Label>
                  <Form.Control type="text" />
                  <div className="d-flex justify-content-end mt-2">
                    <Button variant="danger">{t("update")}</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DriverManagement;
