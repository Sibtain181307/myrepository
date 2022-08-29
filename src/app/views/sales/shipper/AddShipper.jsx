import React from "react";
import { Button, Card, Form, FormControl, Row, Col } from "react-bootstrap";
import { default as t } from "../../../../translations";

const AddShipper = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>
            {t("viewShipper")} / {t("addShipper")}
          </h2>
        </Col>
      </Row>
      <Row className="mt-1">
        <Form>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>{t("firstName")}</Form.Label>
                  <FormControl
                    aria-label="firstname"
                    aria-describedby="basic-addon1"
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>{t("lastName")}</Form.Label>

                  <FormControl
                    aria-label="last Name"
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("businessName")}</Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>
                    {t("monogram")} ({t("logo")})
                  </Form.Label>

                  <FormControl type="file" />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    {t("address")} ({t("owner")})
                  </Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("ownerIqama")}</Form.Label>

                  <FormControl
                    aria-label="Enddate"
                    aria-describedby="basic-addon1"
                  />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("iqamaAttachment")}</Form.Label>

                  <FormControl type="file" />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("contractId")}</Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("contractAttachment")}</Form.Label>

                  <FormControl type="file" />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("tenure")}</Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("crNumber")}</Form.Label>

                  <FormControl />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("crAttachment")}</Form.Label>

                  <FormControl type="file" />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("vatNumber")}</Form.Label>

                  <FormControl />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("vatAttachment")}</Form.Label>

                  <FormControl type="file" />
                </Col>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    {t("address")} ({t("office")})
                  </Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("city")}</Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("country")}</Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("ownerPostalCode")}</Form.Label>

                  <FormControl />
                </Col>

                <Col md={6} className="mt-2">
                  <Form.Label>{t("officePostalCode")}</Form.Label>

                  <FormControl />
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

export default AddShipper;
