import React from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { default as t } from "../../../../translations";

const EditAssetManagement = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>
            {t("viewCustomerWareHouses")} / {t("EditAssetManagement")}
          </h2>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("country")}</Form.Label>
                  <FormControl
                    placeholder="--select country--"
                    aria-label="Startdate"
                    aria-describedby="basic-addon1"
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("city")}</Form.Label>

                  <FormControl
                    placeholder="--select city--"
                    aria-label="enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("displayAddress")}</Form.Label>

                  <FormControl
                    placeholder="--Add Display Address--"
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("addLocation")}</Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="--Add Location--"
                      aria-label="Enddate"
                      aria-describedby="basic-addon1"
                    />
                    <Button>{t("addLocation")}</Button>
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("landlineNumber")}</Form.Label>

                  <FormControl
                    placeholder="--Add Landline Number--"
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("country")}</Form.Label>

                  <FormControl
                    placeholder="--Add Postal Code--"
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="d-flex justify-content-end align-items-center">
                  <Button className="mx-2" variant="danger">
                    {t("discard")}
                  </Button>
                  <Button className="mx-2" variant="success">
                    {t("create")}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </Row>
    </div>
  );
};

export default EditAssetManagement;
