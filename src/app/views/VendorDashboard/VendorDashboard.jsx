import React, { Component } from "react";
import ComparisonChart from "app/views/charts/echarts/ComparisonChart";
import SimpleCard from "@gull/components/cards/SimpleCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { default as t } from "../../../translations";

class VendorDashboard extends Component {
  state = {
    topSellingProduct: [
      {
        title: "Wireless Headphone E23",
        description: "Lorem ipsum dolor sit amet consectetur.",
        prevPrice: 500,
        currentPrice: 450,
        imgUrl: "/assets/images/products/headphone-4.jpg",
      },
      {
        title: "Wireless Headphone Y902",
        description: "Lorem ipsum dolor sit amet consectetur.",
        prevPrice: 500,
        currentPrice: 200,
        imgUrl: "/assets/images/products/headphone-3.jpg",
      },
      {
        title: "Wireless Headphone E09",
        description: "Lorem ipsum dolor sit amet consectetur.",
        prevPrice: 500,
        currentPrice: 600,
        imgUrl: "/assets/images/products/headphone-2.jpg",
      },
      {
        title: "Wireless Headphone X89",
        description: "Lorem ipsum dolor sit amet consectetur.",
        prevPrice: 500,
        currentPrice: 350,
        imgUrl: "/assets/images/products/headphone-4.jpg",
      },
    ],
    newUserList: [
      {
        name: "Smith Doe",
        email: "Smith@gmail.com",
        status: "active",
        photoUrl: "/assets/images/faces/1.jpg",
      },
      {
        name: "Jhon Doe",
        email: "Jhon@gmail.com",
        status: "pending",
        photoUrl: "/assets/images/faces/2.jpg",
      },
      {
        name: "Alex",
        email: "Otttio@gmail.com",
        status: "inactive",
        photoUrl: "/assets/images/faces/3.jpg",
      },
      {
        name: "Mathew Doe",
        email: "matheo@gmail.com",
        status: "active",
        photoUrl: "/assets/images/faces/4.jpg",
      },
    ],
    userActivity: [
      {
        activitylist: [
          {
            title: "Pages / Visit",
            count: 2065,
          },
          {
            title: "New user",
            count: 465,
          },
          {
            title: "Last week",
            count: 23456,
          },
        ],
      },
      {
        activitylist: [
          {
            title: "Pages / Visit",
            count: 435,
          },
          {
            title: "New user",
            count: 5435643,
          },
          {
            title: "Last week",
            count: 45435,
          },
        ],
      },
      {
        activitylist: [
          {
            title: "Pages / Visit",
            count: 545,
          },
          {
            title: "New user",
            count: 54353,
          },
          {
            title: "Last week",
            count: 4643,
          },
        ],
      },
    ],
  };

  getUserStatusClass = (status) => {
    switch (status) {
      case "active":
        return "badge-success";
      case "inactive":
        return "badge-warning";
      case "pending":
        return "badge-primary";
      default:
        break;
    }
  };

  render() {
    const cardList1 = [
      {
        icon: "i-Add-User",
        title: t("totalOrders"),
        subtitle: "7561",
      },
      {
        icon: "i-Financial",
        title: t("lastMonthOrders"),
        subtitle: "45300",
      },
      {
        icon: "i-Checkout-Basket",
        title: t("openOrders"),
        subtitle: "50",
      },
      {
        icon: "i-Money-2",
        title: t("newOrders"),
        subtitle: "3",
      },
    ];
    const cardList2 = [
      {
        icon: "i-Add-User",
        title: t("totalRevenue"),
        subtitle: "7561",
      },
      {
        icon: "i-Financial",
        title: t("lastMonthRevenue"),
        subtitle: "453",
      },
      {
        icon: "i-Checkout-Basket",
        title: t("collectedBalance"),
        subtitle: "50",
      },
      {
        icon: "i-Money-2",
        title: t("pending"),
        subtitle: "3",
      },
    ];

    return (
      <div>
        <h2 className="fw-bold">{t("dashboard")}</h2>

        <hr />
        <div className="row">
          {cardList1.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center fw-bold">
                  {/* <i className={card.icon}></i> */}
                  <h5 className="fw-bold">{card.title}</h5>
                  <div className="content">
                    <p className="text-muted mt-2 mb-0 text-capitalize">
                      {card.subtitle}
                    </p>
                    <p className="lead text-primary text-24 mb-2 text-capitalize"></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {cardList2.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center fw-bold">
                  {/* <i className={card.icon}></i> */}
                  <h5 className="fw-bold">{card.title}</h5>
                  <div className="content">
                    <p className="text-muted mt-2 mb-0 text-capitalize">
                      {card.subtitle}
                    </p>
                    <p className="lead text-primary text-24 mb-2 text-capitalize"></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <SimpleCard title={t("shipmentThresholds")} className="mb-4">
              <ComparisonChart height="260px"></ComparisonChart>
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

VendorDashboard.propTypes = {
  language: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  language: state,
});

export default connect(mapStateToProps, {})(VendorDashboard);
