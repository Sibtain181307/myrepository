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

const VendorLayoutSidenav = (props) => {
  const navigations = [
    {
      name: t("Vendor's Dashboard"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/dashboard/vendor",
      icon: "i-Bar-Chart",
    },

    {
      name: t("finance"),
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Financial",
      sub: [
        {
          icon: "i-Billing",
          name: t("VendorBilling"),
          type: "dropDown",
          sub: [
            {
              name: t("invoices"),
              path: "/finance/invoices",
              type: "link",
            },
            {
              name: t("VendorAccounts"),
              path: "/finance/shipperaccounts",
              type: "link",
            },
          ],
        },

        {
          icon: "i-Cash-Register",
          name: t("Transactions"),
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
      icon: "i-Administrator",
      name: t("Vendor User"),
      path: "/VendorUser/view",
      type: "link",
    },
    {
      icon: "i-Jeep",
      name: t("Vendor Driver"),
      path: "/VendorDriver/view",
      type: "link",
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
        VendorLayoutSettings: {
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
        VendorLayoutSettings: {
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
        VendorLayoutSettings: {
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
        VendorLayoutSettings: {
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
          open: settings.VendorLayoutSettings.leftSidebar.open,
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
          open: settings.VendorLayoutSettings.leftSidebar.secondaryNavOpen,
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
          open: settings.VendorLayoutSettings.leftSidebar.secondaryNavOpen,
        })}
      ></div>
    </div>
  );
};

VendorLayoutSidenav.propTypes = {
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
  })(VendorLayoutSidenav)
);
