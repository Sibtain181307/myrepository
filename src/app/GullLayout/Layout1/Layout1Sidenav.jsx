import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
// import { navigations } from "./navigations";
import { merge } from "lodash";
import { classList, isMobile } from "@utils";
import ScrollBar from "react-perfect-scrollbar";
import { DropDownMenu } from "@gull";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { default as t } from "../../../translations";

const Layout1Sidenav = (props) => {
  const navigations = [
    {
      name: t("dashboard"),
      description: "Lorem ipsum dolor sit.",
      path: "/dashboard/v1",
      type: "link",
      icon: "i-Bar-Chart",
    },

    {
      name: t("shipments"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Plane",
      sub: [
        {
          icon: "i-Calendar-3",
          name: t("scheduling"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("createTrip"),
              path: "/createtrips",
            },
            {
              name: t("activeTrips"),
              path: "/activetrips",
            },
            {
              name: t("pendingTrips"),
              path: "/pendingtrips",
            },
            {
              name: t("completedTrips"),
              path: "/completedtrips",
            },
          ],
        },
        {
          icon: "i-Plane",
          name: t("shipmentViews"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("pendingPickup"),
              path: "/shipmentviews/pendingpickup",
            },
            {
              name: t("inTripShipments"),
              path: "/shipmentviews/intripshipment",
            },
            {
              name: t("shelfShipments"),
              path: "/shipmentviews/shelfshipment",
            },
            {
              name: t("floorShipments"),
              path: "/shipmentviews/floorshipment",
            },
            {
              name: t("interCityShipments"),
              path: "/shipmentviews/intercityshipment",
            },
            {
              name: t("bulkCargoShipments"),
              path: "/shipmentviews/bulkcargoshipment",
            },
            {
              name: t("transportedShipments"),
              path: "/shipmentviews/transportedshipment",
            },
            {
              name: t("cancelledShipments"),
              path: "/shipmentviews/cancelledshipment",
            },
            {
              name: t("undefineShipments"),
              path: "/shipmentviews/undefineshipment",
            },
            {
              name: t("returnShipments"),
              path: "/shipmentviews/returnshipment",
            },
            {
              name: t("shipmentReport"),
              path: "/shipmentviews/shipmentreport",
            },
          ],
        },
        {
          icon: "i-Data-Settings",
          name: t("shipmentControls"),
          type: "dropDown",
          sub: [
            {
              name: t("searchShipments"),
              path: "/shipmentcontrols/searchshipment",
            },
            {
              name: t("markShipments"),
              path: "/shipmentcontrols/markshipment",
            },
          ],
        },
        {
          icon: "i-Add",
          name: t("createShipments"),
          path: "/shipments/shippertocustomer",
          type: "link",
          sub: [
            {
              name: t("Customer To Customer"),
              path: "/shipments/customertocustomer",
            },
          ],
        },
      ],
    },

    {
      name: t("sales"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Money",
      sub: [
        {
          icon: "i-Boy",
          name: t("viewShipper"),
          path: "/sales/viewshipper",
          type: "link",
        },
      ],
    },

    {
      name: t("Locations"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Home-4",
      sub: [
        {
          icon: "i-Home1",
          name: t("View Hubs"),
          path: "/hub/viewhubs",
          type: "link",
        },
        {
          icon: "i-Management",
          name: t("HubManagement"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("View Assets"),
              path: "/ViewAssets",
              type: "link",
            },
          ],
        },
        {
          icon: "i-Engineering",
          name: t("HubCrew"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("viewStaff"),
              path: "/hubcrew/viewstaff",
              type: "link",
            },
            {
              name: t("staffManagement"),
              path: "/warehouse/staffmanagement",
              type: "link",
            },
          ],
        },
        {
          icon: "i-Engineering",
          name: t("LastMile Location"),
          path: "/ViewlastMileLocation",
          type: "link",
        },
        {
          icon: "i-Engineering",
          name: t("Customer Warehouse"),
          path: "/ViewCustomerWarehouse",
          type: "link",
        },
      ],
    },

    {
      name: t("fleet"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Car-2",
      sub: [
        {
          icon: "i-Boy",
          name: t("driver"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("viewDrivers"),
              path: "/fleet/viewdriver",
              type: "link",
            },
            {
              name: t("driverManagement"),
              path: "/fleet/drivermanagement",
              type: "link",
            },
          ],
        },
        {
          icon: "i-Jeep",
          name: t("vehicle"),
          path: "/fleet/viewvehicle",
          type: "link",
        },
      ],
    },
    {
      name: t("finance"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Financial",
      sub: [
        {
          icon: "i-Billing",
          name: t("shipperBilling"),
          type: "dropDown",
          sub: [
            {
              name: t("invoices"),
              path: "/finance/invoices",
              type: "link",
            },
            {
              name: t("shipperAccounts"),
              path: "/finance/shipperaccounts",
              type: "link",
            },
          ],
        },
        {
          icon: "i-Money",
          name: t("codManagement"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("codCollection"),
              path: "/codmanagement/codcollection",
              type: "link",
            },
            {
              name: t("codReturn"),
              path: "/codmanagement/codreturn",
              type: "link",
            },
          ],
        },
        {
          icon: "i-Cash-Register",
          name: t("expenseManagement"),
          path: "/uikits/alerts",
          type: "link",
          sub: [
            {
              name: t("payouts"),
              path: "/finance/payouts",
              type: "link",
            },
            {
              name: t("utilityPayouts"),
              path: "/finance/utlitypayouts",
              type: "link",
            },
            {
              name: t("otherPayables"),
              path: "/finance/createexpense",
              type: "link",
            },
          ],
        },
      ],
    },
    {
      name: t("User"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Administrator",
      sub: [
        {
          icon: "i-Administrator",
          name: t("Employ User"),
          path: "/EmpUser/view",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: t("Vendor User"),
          path: "/VendorUser/view",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: t("Customer User"),
          path: "/CustomerUser/view",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: t("Business Customer User"),
          path: "/BusinessCustomer/view",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: t("Employ Driver"),
          path: "/EmpDrvier/view",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: t("Vendor Driver"),
          path: "/VendorDriver/view",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: t("Freelance Driver"),
          path: "/FreelanceDriver/view",
          type: "link",
        },
      ],
    },
    {
      name: t("Business"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Administrator",
      sub: [
        {
          icon: "i-Administrator",
          name: t("View Business"),
          path: "/BusinessController/view",
          type: "link",
        },
      ],
    },
    {
      name: t("Vendor"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Administrator",
      sub: [
        {
          icon: "i-Administrator",
          name: t("View Vendor"),
          path: "/vendor/view",
          type: "link",
        },
      ],
    },
  ];

  let windowListener = null;

  const [state, setState] = useState({
    selectedItem: null,
    navOpen: true,
    secondaryNavOpen: false,
  });

  const onMainItemMouseEnter = (item) => {
    if (item.type === "dropDown") {
      setSelected(item);
      openSecSidenav();
    } else {
      setSelected(item);
      closeSecSidenav();
    }
  };

  const onMainItemMouseLeave = () => {
    // closeSecSidenav();
  };

  const setSelected = (selectedItem) => {
    setState({ selectedItem });
    // console.log(selectedItem);
  };

  const removeSelected = () => {
    setState({ selectedItem: null });
    // console.log('removed');
  };

  const openSecSidenav = () => {
    let { setLayoutSettings, settings } = props;

    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          leftSidebar: {
            secondaryNavOpen: true,
          },
        },
      })
    );
  };

  const closeSecSidenav = () => {
    console.log("closing sec sidenav");
    let { setLayoutSettings, settings } = props;
    let other = {};

    if (isMobile()) {
      other.open = false;
    }

    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          leftSidebar: {
            ...other,
            secondaryNavOpen: false,
          },
        },
      })
    );
  };

  const closeSidenav = () => {
    console.log("closing sidenav");

    let { setLayoutSettings, settings } = props;
    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          leftSidebar: {
            open: false,
            secondaryNavOpen: false,
          },
        },
      })
    );
  };

  const openSidenav = () => {
    console.log("opening sidenav");
    let { setLayoutSettings, settings } = props;
    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          leftSidebar: {
            open: true,
          },
        },
      })
    );
  };

  useEffect(() => {
    if (state.selectedItem === null) closeSecSidenav();

    if (window)
      if (window.innerWidth < 1200) {
        closeSidenav();
        console.log("closed nav");
      } else {
        openSidenav();
      }

    windowListener = window.addEventListener("resize", ({ target }) => {
      if (window.innerWidth < 1200) {
        closeSidenav();
      } else {
        openSidenav();
      }
    });
  }, [windowListener]);

  useEffect(() => {
    if (windowListener) {
      window.removeEventListener("resize", windowListener);
    }
  }, []);

  let { settings } = props;

  return (
    <div className="side-content-wrap">
      <ScrollBar
        className={classList({
          "sidebar-left o-hidden rtl-ps-none": true,
          open: settings.layout1Settings.leftSidebar.open,
        })}
        id="mainsidenav"
      >
        <ul className="navigation-left">
          {navigations.map((item, i) => (
            <li
              className={classList({
                "nav-item": true,
                active: state.selectedItem === item,
              })}
              onMouseEnter={() => {
                onMainItemMouseEnter(item);
              }}
              onMouseLeave={onMainItemMouseLeave}
              key={i}
            >
              {item.path && item.type !== "extLink" && (
                <NavLink className="nav-item-hold" to={item.path}>
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </NavLink>
              )}
              {item.path && item.type === "extLink" && (
                <a className="nav-item-hold" href={item.path}>
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </a>
              )}
              {!item.path && (
                <div className="nav-item-hold">
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </div>
              )}
              <div className="triangle"></div>
            </li>
          ))}
        </ul>
      </ScrollBar>

      <ScrollBar
        className={classList({
          "sidebar-left-secondary o-hidden rtl-ps-none": true,
          open: settings.layout1Settings.leftSidebar.secondaryNavOpen,
        })}
      >
        {state.selectedItem && state.selectedItem.sub && (
          <DropDownMenu
            menu={state.selectedItem.sub}
            closeSecSidenav={closeSecSidenav}
          ></DropDownMenu>
        )}
        <span></span>
      </ScrollBar>
      <div
        onMouseEnter={closeSecSidenav}
        className={classList({
          "sidebar-overlay": true,
          open: settings.layout1Settings.leftSidebar.secondaryNavOpen,
        })}
      ></div>
    </div>
  );
};

Layout1Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  settings: state.layout.settings,
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
    setDefaultSettings,
    logoutUser,
  })(Layout1Sidenav)
);
