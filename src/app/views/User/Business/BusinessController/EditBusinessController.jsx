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
import { default as t } from "../../../../../translations";
import { Link } from "react-router-dom";
import DataFetcher from "../../UserComponents/DataFetcher";
import BusinessProfile from "../../ViewComponents/BusinessProfile";
class EditBizCustomer extends Component {
  businessDataDTO = {
    customerBusinessDto: {
      billingTenure: "",
      billingType: "",
      businessProfile: {
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
        crAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
        crNumber: 0,
        displayName: "",
        logoAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
        name: "",
        taxNumber: 0,
        vatAttachment: {
          attachmentType: "",
          description: "",
          filePath: "",
          fileType: "",
        },
      },
      chargerInterCity: 0,
      chargesCodCollection: 0,
      chargesInsurancePercentage: 0,
      chargesInterCountry: 0,
      chargesOnlinePayment: 0,
      chargesPerKg: 0,
      chargesReturn: 0,
      chargesSameCity: 0,
      chargesWallet: {
        balance: 0,
        title: "",
        walletType: "",
      },
      codWallet: {
        balance: 0,
        title: "",
        walletType: "",
      },
      contractAttachment: {
        attachmentType: "",
        description: "",
        filePath: "",
        fileType: "",
      },
      contractCode: "",
      creditLimit: 0,
      isChargesGeneral: 0,
      validityDate: "",
    },
  };

  ViewData = (props) => {
    console.log(props);
    this.businessDataDTO.customerBusinessDto.businessProfile =
      props.businessProfile;
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
              {t("Business Customer")} / {t("Edit Business Customer")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-1">
          <Form>
            <Card>
              <Card.Body>
                <BusinessProfile
                  Data={
                    this.businessDataDTO.customerBusinessDto.businessProfile
                  }
                />
                <Col className="d-flex justify-content-end align-items-center">
                  <Link
                    to={{
                      pathname: "/editbusinessForm",
                      resource:
                        this.businessDataDTO.customerBusinessDto
                          .businessProfile,
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
