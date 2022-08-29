import React, { Component } from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import GetWarehouseName from "../ShipmentComponents/GetWarehouse";
import Address from "app/views/User/UserComponents/Address";
import { default as t } from "../../../../translations";
import Customer from "./../ShipmentComponents/Customer";
import Contact from "../ShipmentComponents/Contact";
import ShipmentContent from "./../ShipmentComponents/ShipmentContent";
import Checks from "../ShipmentComponents/Checks";
import Number from "../ShipmentComponents/Number";
import Location from "../ShipmentComponents/Location";
import GetLocations from "../ShipmentComponents/GetLocations";
import History from "@history";
export default class B2C extends Component {
  custid = null;
  bizid = null;
  newusercheck = false;
  differentContactCheck = false;
  CustomerCheck = false;
  CLDLCheck = false;
  loadShipmentcheck = false;
  locationcheck = false;
  DifferentLocationCheck = false;
  orderBaseDto = {
    bizCustOdrDto: {
      bizCustId: 0,
      custLocationDto: {
        contactDto: {
          countryCode: "string",
          networkCode: 0,
          number: 0,
          numberType: "string",
        },
        isCLDL: false,
        isContactDifferentForLocation: false,
        isLocationByID: false,
        locationDto: {
          address: {
            _long: 0,
            cityId: 0,
            geoLink: "string",
            lang: 0,
            streetAddress: "string",
          },
          addressId: 0,
          contact: {
            countryCode: "string",
            networkCode: 0,
            number: 0,
            numberType: "string",
          },
          contactId: 0,
          isAddressById: false,
          isContactById: false,
          statusId: 0,
          title: "string",
          type: "string",
        },
        locationId: 0,
      },
      custWHId: 0,
      customer: {
        custDetailDto: {
          resource: {
            address: {
              _long: 0,
              cityId: 0,
              geoLink: "string",
              lang: 0,
              streetAddress: "string",
            },
            contact: {
              countryCode: "string",
              networkCode: 0,
              number: 0,
              numberType: "string",
            },
            dateOfBirth: "string",
            firstName: "string",
            gender: "string",
            lastName: "string",
            middleName: "string",
            nic: "string",
            nicAttachment: {
              attachmentType: "string",
              description: "string",
              filePath: "string",
              fileType: "string",
            },
          },
        },
        custId: null,
        isByID: false,
      },
    },
    shipmentContentDtoList: [],
    type: 1,
  };

  GetWarehouse = (props) => {
    console.log(props);
    this.orderBaseDto.bizCustOdrDto.custWHId = props;
  };
  componentWillUnmount() {
    console.log(History);
  }
  GetCustomer = (props) => {
    console.log(props);
    this.orderBaseDto.bizCustOdrDto.customer.custDetailDto = props.resource;
    console.log(this.orderBaseDto);
    if (props !== null) {
      this.CustomerCheck = true;
    }
    this.forceUpdate();
  };
  GetShipmentDetails = (props) => {
    console.log(props);
    this.orderBaseDto.shipmentContentDtoList = props;
    console.log(this.orderBaseDto.shipmentContentDtoList);
    const user = JSON.parse(localStorage.user);
    const id = user.typeId;
    this.orderBaseDto.bizCustOdrDto.bizCustId = id;
    console.log(this.orderBaseDto.bizCustOdrDto.bizCustId);
    this.forceUpdate();
    this.handleCreateShipment();
  };
  handleClick = () => {
    this.submitAddress = true;
    this.forceUpdate();
  };
  GetContact = (props) => {
    axios
      .get("http://15.235.141.168:70/cust/get-cust-by-number", {
        headers: {
          SessionKey: "123",
          Number: props,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(this.orderBaseDto.bizCustOdrDto.customer);
        console.log(props);
        if (res.data.data !== null) {
          console.log("if is executed");
          this.custid = res.data.data.id;
          const user = JSON.parse(localStorage.user);
          this.bizid = user.id;
          this.orderBaseDto.bizCustOdrDto.customer.isByID = true;
          this.orderBaseDto.bizCustOdrDto.customer.custId = res.data.data.id;
          this.orderBaseDto.bizCustOdrDto.customer.custDetailDto = null;
          console.log(this.orderBaseDto);
          this.forceUpdate();
        } else {
          console.log("else is executed");
          this.newusercheck = true;
          this.forceUpdate();
        }
      });
  };
  GetChecks = (props) => {
    this.orderBaseDto.bizCustOdrDto.custLocationDto.isContactDifferentForLocation =
      props.isNewDeliveryLocationContact;
    this.DifferentLocationCheck = props.isDeliveryLocationDiffernet;
    this.orderBaseDto.bizCustOdrDto.custLocationDto.isCLDL =
      props.isDeliveryLocationDiffernet;
    console.log(this.orderBaseDto.bizCustOdrDto.custLocationDto);
    if (
      this.orderBaseDto.bizCustOdrDto.custLocationDto
        .isContactDifferentForLocation === true
    ) {
      this.differentContactCheck = true;
      this.forceUpdate();
    } else {
      this.orderBaseDto.bizCustOdrDto.custLocationDto.contactDto = null;
    }
    if (this.DifferentLocationCheck !== true) {
      //  this.orderBaseDto.bizCustOdrDto.custLocationDto.isCLDL = true;
      this.orderBaseDto.bizCustOdrDto.custLocationDto.isLocationByID = true;
      this.orderBaseDto.bizCustOdrDto.custLocationDto.locationDto = null;
      this.forceUpdate();
    } else {
      this.orderBaseDto.bizCustOdrDto.custLocationDto.isCLDL = false;
      this.orderBaseDto.bizCustOdrDto.custLocationDto.isLocationByID = false;
    }
    if (
      this.differentContactCheck === false &&
      this.DifferentLocationCheck === false
    ) {
      this.loadShipmentcheck = true;
      this.locationcheck = true;
    }
    if (this.newusercheck === true) {
      this.orderBaseDto.bizCustOdrDto.custLocationDto.isCLDL = true;
      this.orderBaseDto.bizCustOdrDto.custLocationDto.isLocationByID = false;
    }
    this.forceUpdate();
  };
  GetLocationID = (props) => {
    this.orderBaseDto.bizCustOdrDto.custLocationDto.locationId = props;
  };
  GetDifferentContact = (props) => {
    this.orderBaseDto.bizCustOdrDto.customer.contactDto = props;
  };
  GetLocation = (props) => {
    this.orderBaseDto.bizCustOdrDto.custLocationDto.locationDto = props;
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
  render() {
    return (
      <div>
        <Row>
          <Card>
            <Card.Body>
              <Row>
                <GetWarehouseName
                  Data={this.GetWarehouse}
                  title={t("Customer Warehouse")}
                />
              </Row>
            </Card.Body>
          </Card>
          <Number Data={this.GetContact} title={t("Receiver's Contact")} />

          {this.newusercheck === true ? (
            <Customer
              Data={this.GetCustomer}
              title={t("Add New Receiver Customer")}
            />
          ) : null}
          {this.orderBaseDto.bizCustOdrDto.customer.isByID === true ? (
            <Checks
              Data={this.GetChecks}
              title={t("Reciver Location Checks")}
            />
          ) : null}
          {console.log(this.differentContactCheck, this.DifferentLocationCheck)}
          {this.DifferentLocationCheck === true ? (
            <Location Data={this.GetLocation} title={t("Location Receiver")} />
          ) : null}

          {this.differentContactCheck === true ? (
            <Contact
              Data={this.GetDifferentContact}
              title={t("Receiver's Different Contact")}
            />
          ) : null}
          {this.locationcheck === true ? (
            <Card>
              <Card.Body>
                <GetLocations
                  Data={this.GetLocationID}
                  title={t("Receiver's Locations")}
                  id={this.custid}
                />
              </Card.Body>
            </Card>
          ) : null}
          {this.CustomerCheck === true ||
          this.DifferentLocationCheck === true ||
          this.differentContactCheck === true ||
          this.loadShipmentcheck === true ? (
            <ShipmentContent Data={this.GetShipmentDetails} title={""} />
          ) : null}
        </Row>
      </div>
    );
  }
}
