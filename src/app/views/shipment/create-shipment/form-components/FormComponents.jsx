import React from "react";
import {
  Row,
  Col,
  Form,
  Card,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import { cities } from "../../../../cities";
import { countries } from "../../../../countries";
import { default as t } from "../../../../../translations";

export const ToForm = (props) => {
  const { title, action, buttonaction } = props;
  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={action}>
            <Row>
              <Col className="mt-2">
                <Form.Label>
                  <h5>{title}</h5>
                </Form.Label>
                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>{t("contactNumber")}</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col className="mt-2">
                    <Form.Label>{t("city")}</Form.Label>
                    <Form.Select placeholder="select city">
                      <option selected="true" disabled="disabled">
                        --{t("selectCity")}--
                      </option>
                      {cities.map((item) => (
                        <option value="1" key={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col className="mt-2" key="country">
                    <Form.Label>{t("country")}</Form.Label>
                    <Form.Select placeholder="select country">
                      <option selected="true" disabled="disabled">
                        --{t("selectCountry")}--
                      </option>
                      {countries.map((item) => (
                        <option value="1">{item}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row>
                  <Col className="mt-2" md={6}>
                    <Form.Label>{t("deliveryType")}</Form.Label>
                    <Form.Control />
                  </Col>

                  <Col className="mt-2" md={6}>
                    <Form.Label>{t("mapLink")}</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mt-2">
                    <Form.Label>
                      {t("longitude")} / {t("latitude")}
                    </Form.Label>
                    <InputGroup>
                      <Form.Control disabled />
                      <Form.Control disabled />
                    </InputGroup>
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("postalCode")}</Form.Label>
                    <Form.Control />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("firstName")}</Form.Label>
                    <Form.Control />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("lastName")}</Form.Label>
                    <Form.Control />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("email")}</Form.Label>
                    <Form.Control type="email" />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("dateOfBirth")}</Form.Label>
                    <Form.Control type="date" />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("idNumber")}</Form.Label>
                    <Form.Control />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("idAttachment")}</Form.Label>
                    <Form.Control type="file" />
                  </Col>

                  <Col md={6} className="mt-2">
                    <Form.Label>{t("gender")}</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="mt-2 d-flex justify-content-end ">
              <Button type="submit" onClick={buttonaction}>
                {t("enter")}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export const FromForm = (props) => {
  const { title, action, buttonaction } = props;

  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={action}>
            <Row>
              <Col className="mt-2">
                <Form.Label>
                  <h5>{title}</h5>
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Label>{t("city")}</Form.Label>

                    <Form.Select placeholder="select city">
                      <option selected="true" disabled="disabled">
                        --{t("selectCity")}--
                      </option>
                      {cities.map((item) => (
                        <option value="1">{item}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>{t("country")}</Form.Label>
                    <Form.Select>
                      <option selected="true" disabled="disabled">
                        --{t("selectCountry")}--
                      </option>
                      {countries.map((item) => (
                        <option value="1">{item}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-2" md={6}>
                    <Form.Label>{t("location")}</Form.Label>
                    <Form.Select>
                      <option selected="true" disabled="disabled">
                        --{t("selectLocation")}--
                      </option>
                      <option>Location 1</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <div className="mt-2 d-flex justify-content-end ">
                <Button type="submit" onClick={buttonaction}>
                  {t("enter")}
                </Button>
              </div>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export const ShipmentDetailsForm = (props) => {
  const { action, buttonaction } = props;
  return (
    <Card>
      <Card.Body>
        <Form onSubmit={action}>
          <Row>
            <Col className="mt-2">
              <Form.Label>
                <h5>{t("shipmentDetails")}</h5>
              </Form.Label>
              <Row>
                <Col>
                  <Form.Label>{t("shipmentTitle")}</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>{t("shipmentControls")}</Form.Label>
                  <Form.Control />
                </Col>
              </Row>

              <Row>
                <Col className="mt-2" md={6}>
                  <Form.Label>{t("weight")}</Form.Label>
                  <Form.Control />
                </Col>

                <Col className="mt-2" md={6}>
                  <Form.Label>{t("cargoType")}</Form.Label>
                  <Form.Control />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>{t("shipmentValue")}</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
            </Col>

            <div className="mt-2 d-flex justify-content-end ">
              <Button type="submit" onClick={buttonaction}>
                {t("enter")}
              </Button>
            </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const AdditionalDetailsForm = (props) => {
  const { action, buttonaction } = props;
  return (
    <Card>
      <Card.Body>
        <Form onSubmit={action}>
          <Row>
            <Col className="mt-2">
              <Form.Label>
                <h5>{t("additionalDetails")}</h5>
              </Form.Label>
              <Row>
                <Col>
                  <InputGroup>
                    <h5>
                      {" "}
                      <Form.Label className="me-4 text-center ">
                        {t("paymentType")}{" "}
                      </Form.Label>
                      <DropdownButton>
                        <Dropdown.Item>{t("prepaid")}</Dropdown.Item>
                        <Dropdown.Item>{t("cod")}</Dropdown.Item>
                      </DropdownButton>
                    </h5>
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-2">
                  <Form.Label>
                    {t("insurance")} [2% {t("atShipmentValue")}]{" "}
                  </Form.Label>
                  <Form.Control />
                </Col>
              </Row>
            </Col>

            <div className="mt-2 d-flex justify-content-end ">
              <Button type="submit" onClick={buttonaction}>
                {t("enter")}
              </Button>
            </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const ItemDetails = (props) => {
  return (
    <Card>
      <Card.Body>
        <Col md={6}>
          <p>{t("itemCode")}</p>
        </Col>

        <Row className="col-md-12 d-flex justify-content-end">
          <div className="invoice-summary invoice-summary-input float-right">
            <p>
              {t("subTotal")}
              <span></span>
            </p>
            <p className="d-flex align-items-center">
              {t("vat")}(%):
              <span>
                <FormControl type="text" className="small-input" name="vat" />
              </span>
            </p>
            <h5 className="fw-bold d-flex align-items-center">
              {t("grandTotal")}
              <span>
                <FormControl
                  type="text"
                  className="small-input"
                  name="currency"
                />
              </span>
            </h5>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BulkShipmentForm = () => {
  return (
    <Card>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              <th>Header 1</th>
            </tr>
          </thead>
        </Table>
      </Card.Body>
    </Card>
  );
};
