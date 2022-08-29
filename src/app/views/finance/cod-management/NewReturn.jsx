import React from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { default as t } from "../../../../translations";

const NewReturn = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{t("createNewReturnNote")}</h2>
        </Col>
      </Row>

      <Row>
        <Card>
          <Card.Body>
            <Col md={6}>
              <Form>
                <Form.Label>{t("shipper")}</Form.Label>
                <InputGroup>
                  <Form.Control placeholder="--select shipper" />
                  <DropdownButton>
                    <Dropdown.Item>Item1</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Form>
            </Col>
          </Card.Body>
        </Card>
      </Row>

      <Row className="mt-4">
        <Card>
          <Card.Body>
            <Row>
              <Col xs={6} md={3}>
                <h4>{t("pendingCod")}</h4>
              </Col>
              <Col xs={6} md={3}>
                <h4>-Sr. 15,320</h4>
              </Col>

              <Col xs={6} md={3}>
                <h4>{t("collectedCod")}</h4>
              </Col>
              <Col xs={6} md={3}>
                <h4>Sr. 15,206</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row className="mt-4">
        <Card>
          <Form>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("lastClosingDate")}</Form.Label>
                  <Form.Control type="text" />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("newCodClosingDate")}</Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("newCodReturnDueDate")}</Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Row>
              <div className="mt-2 d-flex justify-content-end">
                <Button>{t("create")}</Button>
              </div>
            </Card.Body>
          </Form>
        </Card>
      </Row>
    </div>
  );
};

export default NewReturn;
