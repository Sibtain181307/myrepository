import React, { Component, useState, useEffect } from "react";
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
import axios from "axios";

export default class AddAsset extends Component {
  inventoryDataDto = {
    assetDto: {
      accuringDate: "2202-02-04",
      amount: 10,
      currency: 123,
      net: 12,
      title: "string",
      vat: 10,
    },
  };
  handleClick = (e) => {
    console.log(this.inventoryDataDto);
    axios
      .post("http://15.235.141.168:70/inventory/add", this.inventoryDataDto, {
        headers: { SessionKey: "123", Event: "Create-Inventory-Item" },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.inventoryDataDto);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    return (
      <Row>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Add Accuring Date")} </h5>
          </Form.Label>

          <FormControl
            placeholder="yyyy-mm-dd"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.inventoryDataDto.assetDto.accuringDate;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Amount")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Amount"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.inventoryDataDto.assetDto.amount;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Currency")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Currency"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.inventoryDataDto.assetDto.currency;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Net")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Net"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.inventoryDataDto.assetDto.net;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Title")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Title"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.inventoryDataDto.assetDto.title;
            }}
          />
        </Col>
        <Col md={6} className="mt-2">
          <Form.Label>
            <h5>{t("Vat")} </h5>
          </Form.Label>

          <FormControl
            placeholder="Vat"
            aria-label="Enddate"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.inventoryDataDto.assetDto.vat;
            }}
          />
        </Col>
        <Row className="mt-2">
          <Col className="d-flex justify-content-end align-items-center">
            <Button className="mx-2" variant="danger">
              {t("discard")}
            </Button>
            <Button
              className="mx-2"
              variant="success"
              onClick={this.handleClick}
            >
              {t("create")}
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}
