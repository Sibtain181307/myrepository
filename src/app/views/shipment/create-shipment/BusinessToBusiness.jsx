import { default as t } from "../../../../translations";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import React, { Component } from "react";
import GetLocations from "../ShipmentComponents/GetLocations";
import ShipmentContent from "../ShipmentComponents/ShipmentContent";
import axios from "axios";
export default class BusinessToBusiness extends Component {
  locationscheck = false;
  orderBaseDto = {
    b2BOdrDto: {
      bizCustId: 0,
      deliveryLocationId: 0,
      pickupLoactionId: 0,
    },
    shipmentContentDtoList: [],
    type: 4,
  };
  setid = () => {
    const user = JSON.parse(localStorage.user);
    const id = user.typeId;
    return id;
  };
  GetDeliverylocationID = (props) => {
    this.orderBaseDto.b2BOdrDto.deliveryLocationId = parseInt(props, 10);
  };
  GetPickuplocationID = (props) => {
    this.orderBaseDto.b2BOdrDto.pickupLoactionId = parseInt(props, 10);
  };
  GetShipmentDetails = (props) => {
    this.orderBaseDto.shipmentContentDtoList.push(props);
    console.log(this.orderBaseDto.shipmentContentDtoList);
    const user = JSON.parse(localStorage.user);
    this.orderBaseDto.b2BOdrDto.bizCustId = user.id;
    this.forceUpdate();
    this.handleCreateShipment();
  };
  handleCreateShipment = () => {
    axios
      .post("http://15.235.141.168:70/order/create", this.orderBaseDto, {
        headers: {
          SessionKey: "123",
          Event: "Create-Cargo-Shipment",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new Error(res.this.orderBaseDto);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  handlesubmit = () => {
    this.locationscheck = true;
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Row>
              <GetLocations
                title={t("Receiver Locations")}
                Data={this.GetDeliverylocationID}
                id={this.setid()}
              />
              <GetLocations
                title={t("Sender Locations")}
                Data={this.GetPickuplocationID}
                id={this.setid()}
              />
              <Row className="mt-2">
                <Col className="d-flex justify-content-end align-items-center">
                  <Button
                    className="mx-2 mb-2 "
                    variant="success"
                    onClick={this.handlesubmit}
                  >
                    {t("Create")}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>

        <Row>
          {this.locationscheck === true ? (
            <ShipmentContent Data={this.GetShipmentDetails} />
          ) : null}
        </Row>
      </div>
    );
  }
}
