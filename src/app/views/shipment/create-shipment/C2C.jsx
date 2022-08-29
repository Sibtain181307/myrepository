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
import GetLocations from "../ShipmentComponents/GetLocations";
import Number from "../ShipmentComponents/Number";
import Location from "../ShipmentComponents/Location";
export default class C2C extends Component {
  //Receiver Checks
  senderid = null;
  receiverid = null;
  newusercheckreceiver = false;
  differentContactCheckreciver = false;
  CustomerCheckreceiver = false;
  CLDLCheckreceiver = false;
  DifferentLocationCheckreceiver = false;
  locationReceiverCheck = false;

  //Sender Checks

  newuserchecksender = false;
  differentContactChecksender = false;
  CustomerChecksender = false;
  CLDLChecksender = false;
  DifferentLocationChecksender = false;
  locationSenderCheck = false;

  //Shipment check

  loadShipmentCheck = false;

  //Data to send
  orderBaseDto = {
    c2COdrDto: {
      delivery: {
        contactDto: {
          countryCode: "",
          networkCode: 0,
          number: 0,
          numberType: "",
        },
        isCLDL: false,
        isContactDifferentForLocation: false,
        isLocationByID: false,
        locationDto: {
          address: {
            _long: 0,
            cityId: 0,
            geoLink: "",
            lang: 0,
            streetAddress: "",
          },
          addressId: 0,
          contact: {
            countryCode: "",
            networkCode: 0,
            number: 0,
            numberType: "",
          },
          contactId: 0,
          isAddressById: false,
          isContactById: false,
          statusId: 0,
          title: "",
          type: "",
        },
        locationId: 0,
      },
      pickup: {
        contactDto: {
          countryCode: "",
          networkCode: 0,
          number: 0,
          numberType: "",
        },
        isCLDL: false,
        isContactDifferentForLocation: false,
        isLocationByID: false,
        locationDto: {
          address: {
            _long: 0,
            cityId: 0,
            geoLink: "",
            lang: 0,
            streetAddress: "",
          },
          addressId: 0,
          contact: {
            countryCode: "",
            networkCode: 0,
            number: 0,
            numberType: "",
          },
          contactId: 0,
          isAddressById: false,
          isContactById: false,
          statusId: 0,
          title: "",
          type: "",
        },
        locationId: 0,
      },
      receiver: {
        custDetailDto: {
          resource: {
            address: {
              _long: 0,
              cityId: 0,
              geoLink: "",
              lang: 0,
              streetAddress: "",
            },
            contact: {
              countryCode: "",
              networkCode: 0,
              number: 0,
              numberType: "",
            },
            dateOfBirth: "",
            firstName: "",
            gender: "",
            lastName: "",
            middleName: "",
            nic: "",
            nicAttachment: {
              attachmentType: "",
              description: "",
              filePath: "",
              fileType: "",
            },
          },
        },
        custId: 0,
        isByID: false,
      },
      sender: {
        custDetailDto: {
          resource: {
            address: {
              _long: 0,
              cityId: 0,
              geoLink: "",
              lang: 0,
              streetAddress: "",
            },
            contact: {
              countryCode: "",
              networkCode: 0,
              number: 0,
              numberType: "",
            },
            dateOfBirth: "",
            firstName: "",
            gender: "",
            lastName: "",
            middleName: "",
            nic: "",
            nicAttachment: {
              attachmentType: "",
              description: "",
              filePath: "",
              fileType: "",
            },
          },
        },
        custId: 0,
        isByID: false,
      },
    },
    shipmentContentDtoList: [],
    type: 3,
  };

  //Get Functions Receiver
  GetShipmentDetails = (props) => {
    this.orderBaseDto.shipmentContentDtoList.push(props);
    console.log(this.orderBaseDto.shipmentContentDtoList);
    this.forceUpdate();
    this.handleCreateShipment();
  };

  GetContactReceiver = (props) => {
    axios
      .get("http://15.235.141.168:70/cust/get-cust-by-number", {
        headers: {
          SessionKey: "123",
          Number: props,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(this.orderBaseDto.c2COdrDto.receiver);
        console.log(props);
        if (res.data.data !== null) {
          this.receiverid = res.data.data.id;
          console.log("if is executed");
          this.orderBaseDto.c2COdrDto.receiver.isByID = true;
          this.orderBaseDto.c2COdrDto.receiver.custId = res.data.data.id;
          this.orderBaseDto.c2COdrDto.receiver.custDetailDto = null;
          console.log(this.orderBaseDto);
          this.forceUpdate();
        } else {
          console.log("else is executed");
          this.newusercheckreceiver = true;
          this.forceUpdate();
        }
      });
  };
  GetChecksDelivery = (props) => {
    this.orderBaseDto.c2COdrDto.delivery.isContactDifferentForLocation =
      props.isNewDeliveryLocationContact;
    this.DifferentLocationCheckreceiver = props.isDeliveryLocationDiffernet;
    this.orderBaseDto.c2COdrDto.delivery.isCLDL =
      props.isDeliveryLocationDiffernet;
    console.log(this.orderBaseDto.c2COdrDto.pickup);
    if (
      this.orderBaseDto.c2COdrDto.delivery.isContactDifferentForLocation ===
      true
    ) {
      this.differentContactCheckreciver = true;
      this.forceUpdate();
    } else {
      this.orderBaseDto.c2COdrDto.delivery.contactDto = null;
    }
    if (this.DifferentLocationCheck !== true) {
      //  this.orderBaseDto.c2COdrDto.delivery.isCLDL = true;
      this.orderBaseDto.c2COdrDto.delivery.isLocationByID = true;
      this.orderBaseDto.c2COdrDto.delivery.locationDto = null;
      this.forceUpdate();
    } else {
      this.orderBaseDto.c2COdrDto.delivery.isCLDL = false;
      this.orderBaseDto.c2COdrDto.delivery.isLocationByID = false;
    }
    if (
      this.differentContactCheckreciver === false &&
      this.DifferentLocationCheckreceiver === false
    ) {
      this.loadShipmentcheck = true;
      this.locationReceiverCheck = true;
    }
    if (this.newuserchecksender === true) {
      this.orderBaseDto.c2COdrDto.delivery.isCLDL = true;
      this.orderBaseDto.c2COdrDto.delivery.isLocationByID = false;
    }
    this.forceUpdate();
  };

  GetDifferentContactDelivery = (props) => {
    this.orderBaseDto.c2COdrDto.delivery.contactDto = props;
  };
  GetLocationDelivery = (props) => {
    this.orderBaseDto.c2COdrDto.delivery.locationDto = props;
  };
  GetCustomerReceiver = (props) => {
    console.log(props);
    this.orderBaseDto.c2COdrDto.receiver.custDetailDto = props.resource;
    console.log(this.orderBaseDto);
    if (props !== null) {
      this.CustomerCheckreceiver = true;
    }
    this.forceUpdate();
  };
  //Sender Functions

  GetCustomerSender = (props) => {
    console.log(props);
    this.orderBaseDto.c2COdrDto.sender.custDetailDto = props.resource;
    console.log(this.orderBaseDto);
    if (props !== null) {
      this.CustomerChecksender = true;
    }
    this.forceUpdate();
  };

  GetContactSender = (props) => {
    axios
      .get("http://15.235.141.168:70/cust/get-cust-by-number", {
        headers: {
          SessionKey: "123",
          Number: props,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(this.orderBaseDto.c2COdrDto.sender);
        console.log(props);
        if (res.data.data !== null) {
          console.log("if is executed");
          this.senderid = res.data.data.id;
          this.orderBaseDto.c2COdrDto.sender.isByID = true;
          this.orderBaseDto.c2COdrDto.sender.custId = res.data.data.id;
          this.orderBaseDto.c2COdrDto.sender.custDetailDto = null;
          console.log(this.orderBaseDto);
          this.forceUpdate();
        } else {
          console.log("else is executed");
          this.newuserchecksender = true;
          this.forceUpdate();
        }
      });
  };
  GetChecksPickup = (props) => {
    this.orderBaseDto.c2COdrDto.pickup.isContactDifferentForLocation =
      props.isNewDeliveryLocationContact;
    this.DifferentLocationChecksender = props.isDeliveryLocationDiffernet;
    this.orderBaseDto.c2COdrDto.pickup.isCLDL =
      props.isDeliveryLocationDiffernet;
    console.log(this.orderBaseDto.c2COdrDto.pickup);
    if (
      this.orderBaseDto.c2COdrDto.pickup.isContactDifferentForLocation === true
    ) {
      this.differentContactChecksender = true;
      this.forceUpdate();
    } else {
      this.orderBaseDto.c2COdrDto.pickup.contactDto = null;
    }
    if (this.DifferentLocationChecksender !== true) {
      // this.orderBaseDto.c2COdrDto.pickup.isCLDL = true;
      this.orderBaseDto.c2COdrDto.pickup.isLocationByID = true;
      this.orderBaseDto.c2COdrDto.pickup.locationDto = null;
      this.forceUpdate();
    } else {
      this.orderBaseDto.c2COdrDto.pickup.isCLDL = false;
      this.orderBaseDto.c2COdrDto.pickup.isLocationByID = false;
    }
    if (
      this.differentContactChecksender === false &&
      this.DifferentLocationChecksender === false
    ) {
      this.loadShipmentcheck = true;
      this.locationSenderCheck = true;
    }
    if (this.newuserchecksender === true) {
      this.orderBaseDto.c2COdrDto.pickup.isCLDL = true;
      this.orderBaseDto.c2COdrDto.pickup.isLocationByID = false;
    }
    this.forceUpdate();
  };

  GetDifferentContactPickup = (props) => {
    this.orderBaseDto.c2COdrDto.pickup.contactDto = props;
  };
  GetLocationPickup = (props) => {
    this.orderBaseDto.c2COdrDto.pickup.locationDto = props;
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

  //SenderLocationId

  GetLocationSender = (props) => {
    this.orderBaseDto.c2COdrDto.pickup.locationId = props;
  };

  //ReceiverLocationId

  GetLocationReceiver = (props) => {
    this.orderBaseDto.c2COdrDto.delivery.locationId = props;
  };

  render() {
    return (
      <div>
        <Row>
          <Number
            Data={this.GetContactReceiver}
            title={t("Add Receiver's Contact")}
          />
          <Number
            Data={this.GetContactSender}
            title={t("Add Sender's Contact")}
          />
          {this.newusercheckreceiver === true ? (
            <Customer
              Data={this.GetCustomerReceiver}
              title={t("Add Receiver")}
            />
          ) : null}
          {this.newuserchecksender === true ? (
            <Customer Data={this.GetCustomerSender} title={t("Add Sender")} />
          ) : null}
          {this.orderBaseDto.c2COdrDto.receiver.isByID === true ? (
            <Checks Data={this.GetChecksPickup} title={t("Pickup Checks")} />
          ) : null}
          {this.orderBaseDto.c2COdrDto.sender.isByID === true ? (
            <Checks
              Data={this.GetChecksDelivery}
              title={t("Delivery Checks")}
            />
          ) : null}
          {this.DifferentLocationCheckreceiver === true ? (
            <Location
              Data={this.GetLocationPickup}
              title={t("Sender's Locations")}
              subtitle={t("Sender")}
            />
          ) : null}
          {this.DifferentLocationChecksender === true ? (
            <Location
              Data={this.GetLocationDelivery}
              title={t("Receiver's Locations")}
              subtitle={t("Receiver")}
            />
          ) : null}

          {this.differentContactChecksender === true ? (
            <Contact
              Data={this.GetDifferentContactPickup}
              title={t("Sender's Different Contact")}
            />
          ) : null}

          {this.differentContactCheckreciver === true ? (
            <Contact
              Data={this.GetDifferentContactDelivery}
              title={t("Receiver's Difference Contact")}
            />
          ) : null}
          {this.locationSenderCheck === true ? (
            <Card>
              <Card.Body>
                <GetLocations
                  Data={this.GetLocationSender}
                  title={t("Locations Sender")}
                  id={this.senderid}
                />
              </Card.Body>
            </Card>
          ) : null}
          {this.locationReceiverCheck === true ? (
            <Card>
              <Card.Body>
                <GetLocations
                  Data={this.GetLocationReceiver}
                  title={t("Locations Receiver")}
                  id={this.receiverid}
                />
              </Card.Body>
            </Card>
          ) : null}
          {this.CustomerChecksender === true ||
          this.DifferentLocationChecksender === true ||
          this.differentContactChecksender === true ||
          this.locationReceiverCheck === true ||
          this.locationSenderCheck === true ? (
            <ShipmentContent Data={this.GetShipmentDetails} />
          ) : null}
        </Row>
      </div>
    );
  }
}
