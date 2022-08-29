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
import VehicleDto from "./VehicleDto";
import { default as t } from "../../../../translations";
import axios from "axios";
const Get_city = (props) => {
  const [name, setname] = useState([]);
  const [id, setid] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      axios
        .get("http://15.235.141.168:70/util/get-city")
        .then((res) => {
          setTimeout(() => {
            setname([{ name: res.data.data.name }]);
            setid([{ id: res.data.data.id }]);
          }, 1000);
          if (res.status === 200) {
            return res;
          } else {
            throw new Error(res);
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    fetch();
  }, []);

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => {
        const returnid = e.target.value;
        props.Data(returnid);
      }}
    >
      <option selected>{"-- City --"}</option>
      {name.map((n) => {
        return id.map((i) => {
          return <option value={i.id}>{n.name}</option>;
        });
      })}
    </select>
  );
};
export default class AddVendorVehicle extends Component {
  inventoryDataDto = {
    vendorVehicleDto: {
      accuringDate: "2022-07-25T06:39:14.770Z",
      cityId: 1,
      lastUpdate: "2022-07-25T06:39:14.770Z",
      rent: 1,
      vatPercentage: 1,
      vehicle: {
        cargoCapacity: 4,
        chassyNumber: "abc",
        make: "abc",
        makeYear: "abc",
        model: "abc",
        plateNumber: "abc",
        registrationNumber: "abc",
      },
      vendorId: 0,
    },
  };
  Get_Vehicle = (props) => {
    console.log(props);
    this.inventoryDataDto.vendorVehicleDto.vehicle.cargoCapacity =
      props.cargoCapacity;
    this.inventoryDataDto.vendorVehicleDto.vehicle.chassyNumber =
      props.chassyNumber;
    this.inventoryDataDto.vendorVehicleDto.vehicle.make = props.make;
    this.inventoryDataDto.vendorVehicleDto.vehicle.model = props.model;
    this.inventoryDataDto.vendorVehicleDto.vehicle.makeYear = props.makeYear;
    this.inventoryDataDto.vendorVehicleDto.vehicle.plateNumber =
      props.plateNumber;
    this.inventoryDataDto.vendorVehicleDto.vehicle.registrationNumber =
      props.registrationNumber;
  };
  Get_city_id = (props) => {
    this.inventoryDataDto.vendorVehicleDto.cityId = props;
  };
  handleClick = (e) => {
    console.log(this.inventoryDataDto);
    axios
      .post("http://15.235.141.168:70/inventory/add", this.inventoryDataDto, {
        headers: { SessionKey: "123", Event: "Create-Vendor-Vehicle" },
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
        <VehicleDto SetVehicle={this.Get_Vehicle} />
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
                this.inventoryDataDto.vendorVehicleDto.accuringDate;
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Last Update")} </h5>
            </Form.Label>

            <FormControl
              placeholder="yyyy-mm-dd"
              aria-label="Enddate"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.inventoryDataDto.vendorVehicleDto.lastUpdate;
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
                this.inventoryDataDto.vendorVehicleDto.vatPercentage;
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Rent")} </h5>
            </Form.Label>

            <FormControl
              placeholder="Rent"
              aria-label="Enddate"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.inventoryDataDto.vendorVehicleDto.rent;
              }}
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("city")} </h5>
            </Form.Label>

            <InputGroup>
              <Get_city Data={this.Get_city_id} />
            </InputGroup>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Label>
              <h5>{t("Vendor ID")} </h5>
            </Form.Label>

            <FormControl
              placeholder="Vendor ID"
              aria-label="Enddate"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.inventoryDataDto.vendorVehicleDto.vendorId;
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
                {t("create Hub Vehicle")}
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
    );
  }
}
