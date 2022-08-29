import React from "react";
import {
  Button,
  Form,
  InputGroup,
  Row,
  Col,
  DropdownButton,
} from "react-bootstrap";

import DropdownItem from "react-bootstrap/esm/DropdownItem";

import { default as t } from "../../../../../translations";

const AddStaff = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>
            {t("viewStaff")} / {t("addNew")}
          </h2>
        </Col>
      </Row>

      <Row className="mt-2">
        <Form>
          <Row>
            <Col md={6}>
              <Form.Label>{t("firstName")}</Form.Label>
              <Form.Control placeholder="--enter first name--" />
            </Col>
            <Col md={6}>
              <Form.Label>{t("lastName")}</Form.Label>
              <Form.Control placeholder="--enter last name--" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>{t("streetAddress")}</Form.Label>
              <Form.Control placeholder="--enter street address--" />
            </Col>
            <Col md={6}>
              <Form.Label>{t("city")}</Form.Label>
              <InputGroup>
                <Form.Control placeholder="--select city--" />
                <DropdownButton>
                  <DropdownItem>Item1</DropdownItem>
                </DropdownButton>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>{t("country")}</Form.Label>
              <InputGroup>
                <Form.Control placeholder="--select country--" />
                <DropdownButton>
                  <DropdownItem>Item1</DropdownItem>
                </DropdownButton>
              </InputGroup>
            </Col>
            <Col md={6}>
              <Form.Label>{t("postalCode")}</Form.Label>
              <Form.Control placeholder="--enter postal code--" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>{t("selectDesignation")}</Form.Label>
              <InputGroup>
                <Form.Control placeholder="--select designation--" />
                <DropdownButton>
                  <DropdownItem>Item1</DropdownItem>
                </DropdownButton>
              </InputGroup>
            </Col>
            <Col md={6}>
              <Form.Label>{t("selectWarehouse")}</Form.Label>
              <InputGroup>
                <Form.Control placeholder="--select warehouse--" />
                <DropdownButton>
                  <DropdownItem>Item1</DropdownItem>
                </DropdownButton>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>NIC/ Iqama/ {t("passportNumber")}</Form.Label>
              <Form.Control />
            </Col>
            <Col md={6}>
              <Form.Label>NIC/ Iqama/ {t("passportAttachment")}</Form.Label>
              <Form.Control type="file" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>{t("contractId")}</Form.Label>
              <Form.Control />
            </Col>
            <Col md={6}>
              <Form.Label>{t("contractAttachment")}</Form.Label>
              <Form.Control type="file" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>{t("salaryInSar")}</Form.Label>
              <Form.Control placeholder="--Enter Salary amount in SAR--" />
            </Col>

            <Col md={6}>
              <Form.Label>{t("contractTenureInMonths")}</Form.Label>
              <InputGroup>
                <Button>-12</Button>
                <Button>-6</Button>
                <Button>-</Button>
                <Form.Control type="number" />
                <Button>+</Button>
                <Button>+6</Button>
                <Button>+12</Button>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label>{t("employmentStatus")}</Form.Label>
              <Form.Control placeholder="--Select Employement status--" />
            </Col>
            <Col md={6}>
              <Form.Label>
                {t("employer")} ({t("ifVendor")})
              </Form.Label>
              <Form.Control />
            </Col>
          </Row>

          <Row className="mt-2 ">
            <Col className="d-flex justify-content-end">
              <Button className="mx-2" variant="danger">
                {t("discard")}
              </Button>{" "}
              <Button className="mx-2" variant="success">
                {t("create")}
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default AddStaff;
