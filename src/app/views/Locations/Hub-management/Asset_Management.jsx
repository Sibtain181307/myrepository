import React from "react";
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

const ViewAssetManagements = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("ViewAssetManagement")}</h2>
        </Col>
        <Col className="d-flex flex-row-reverse mx-5">
          <Link to="/AddAssets">
            <Button size="lg">
              <i className="i-Add"></i> {t("Add Assets")}
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>
                    <h5>{t("hub")}</h5>
                  </Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="--select hub--"
                      aria-label="hub"
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
      <Card elevation={6} className="w-100 overflow-auto mt-4">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              <th className="pl-sm-24">{t("id")}</th>
              <th className="pl-sm-24">{t("city")}</th>
              <th className="px-0">{t("shelfShipments")}</th>
              <th className="px-0">{t("floorShipments")}</th>
              <th className="px-0">{t("codCollection")}</th>
              <th className="px-0">{t("address")}</th>
              <th className="px-0">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/hub/edithub">
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

export default ViewAssetManagements;
