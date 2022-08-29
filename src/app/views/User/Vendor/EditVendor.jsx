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
import { Link } from "react-router-dom";
import DataFetcher from "../UserComponents/DataFetcher";
import BusinessProfile from "../ViewComponents/BusinessProfile";
class EditBizCustomer extends Component {
  businessDataDTO = {
    vendorDto: {
      billingTenure: "abc",
      billingType: "abc",
      businessProfile: {
        address: {
          _long: 20,
          cityId: 1,
          geoLink: "abc",
          lang: 22,
          streetAddress: "abc",
        },
        contact: {
          countryCode: "abc",
          networkCode: 20,
          number: 220,
          numberType: "abc",
        },
        crAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
        crNumber: 1,
        displayName: "abc",
        logoAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
        name: "abc",
        taxNumber: 1,
        vatAttachment: {
          attachmentType: "abc",
          description: "abc",
          filePath: "abc",
          fileType: "abc",
        },
      },
      chargerInterCity: 20,
      chargesCodCollection: 20,
      chargesInsurancePercentage: 20,
      chargesInterCountry: 20,
      chargesOnlinePayment: 20,
      chargesPerKg: 20,
      chargesReturn: 20,
      chargesSameCity: 20,
      chargesWallet: {
        balance: 20,
        title: "abc",
        walletType: "abc",
      },
      codWallet: {
        balance: 20,
        title: "abc",
        walletType: "abc",
      },
      contractAttachment: {
        attachmentType: "abc",
        description: "abc",
        filePath: "abc",
        fileType: "abc",
      },
      contractCode: "abc",
      creditLimit: 200,
      isChargesGeneral: 20,
      validityDate: "2022-01-04",
    },
  };
  ViewData = (props) => {
    console.log(props);
    this.businessDataDTO.vendorDto.businessProfile = props.businessProfile;
    this.forceUpdate();
  };
  Getid = () => {
    return this.props.location.id;
  };
  render() {
    return (
      <div>
        {console.log()}
        <DataFetcher
          Data={this.ViewData}
          url="http://15.235.141.168:70/business/get-business"
          event="Get-Customer"
          idsetter={this.Getid()}
        />
        <Row>
          <Col>
            <h2>
              {t("Vendor")} / {t("Edit Vendor")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <BusinessProfile
                  Data={this.businessDataDTO.vendorDto.businessProfile}
                />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editformvendor",
                      resource: this.businessDataDTO.vendorDto.businessProfile,
                      path: this.props.location.path,
                    }}
                  >
                    <Button className="mx-2 mb-2 " variant="success">
                      {t("Edit Data")}
                    </Button>
                  </Link>
                </Col>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </div>
    );
  }
}
export default EditBizCustomer;
