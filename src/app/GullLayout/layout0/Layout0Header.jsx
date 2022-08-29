import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { getTimeDifference } from "@utils";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { setLang } from "../../../translations";
import { merge } from "lodash";

const Layout0Header = (props) => {
  const state = {
    shorcutMenuList: [
      {
        icon: "i-Shop-4",
        link: "#",
        text: "Home",
      },
      {
        icon: "i-Library",
        link: "#",
        text: "Ui Kits",
      },
      {
        icon: "i-Drop",
        link: "#",
        text: "Apps",
      },
      {
        icon: "i-File-Clipboard-File--Text",
        link: "#",
        text: "Form",
      },
      {
        icon: "i-Checked-User",
        link: "#",
        text: "Sessions",
      },
      {
        icon: "i-Ambulance",
        link: "#",
        text: "Support",
      },
    ],
    notificationList: [
      {
        icon: "i-Speach-Bubble-6",
        title: "New message",
        description: "James: Hey! are you busy?",
        time: "2019-10-30T02:10:18.931Z",
        color: "primary",
        status: "New",
      },
      {
        icon: "i-Receipt-3",
        title: "New order received",
        description: "1 Headphone, 3 iPhone",
        time: "2019-03-10T02:10:18.931Z",
        color: "success",
        status: "New",
      },
      {
        icon: "i-Empty-Box",
        title: "Product out of stock",
        description: "1 Headphone, 3 iPhone",
        time: "2019-05-10T02:10:18.931Z",
        color: "danger",
        status: "3",
      },
      {
        icon: "i-Data-Power",
        title: "Server up!",
        description: "Server rebooted successfully",
        time: "2019-03-10T02:10:18.931Z",
        color: "success",
        status: "3",
      },
    ],
    showSearchBox: false,
  };

  const handleMenuClick = () => {
    let { setLayoutSettings, settings } = props;
    setLayoutSettings(
      merge({}, settings, {
        Layout0Settings: {
          leftSidebar: {
            open: settings.Layout0Settings.leftSidebar.secondaryNavOpen
              ? true
              : !settings.Layout0Settings.leftSidebar.open,
            secondaryNavOpen: false,
          },
        },
      })
    );
  };

  const handleDirectionChange = () => {
    let { settings, setLayoutSettings } = props;
    let dir = settings.dir === "rtl" ? "ltr" : "rtl";
    dir === "rtl" ? setLang("ar") : setLang("en");
    // console.log("url is", `${process.env.REACT_APP_API_URL}`);

    document.documentElement.setAttribute("dir", dir);
    setLayoutSettings(
      merge({}, settings, {
        dir: dir,
      })
    );
  };

  const toggleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreen) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  };

  const handleSearchBoxOpen = () => {
    let { setLayoutSettings, settings } = props;
    setLayoutSettings(
      merge({}, settings, {
        Layout0Settings: {
          searchBox: {
            open: true,
          },
        },
      })
    );
  };

  let { settings } = props;

  let { shorcutMenuList, notificationList } = state;

  return (
    <div className="main-header">
      <div className="logo">
        <img src="/assets/images/ziyad-logo-small.png" alt="" />
      </div>

      <Button
        className="mx-2 bg-black"
        variant="outline-primary"
        onClick={handleMenuClick}
      >
        <img src="/assets/images/bars.png" alt="" style={{ width: "1.4rem" }} />
      </Button>
      {settings.dir === "rtl" ? (
        <Button
          className="mx-1 btn btn-danger text-white fw-bold border-0 "
          variant="danger "
          onClick={handleDirectionChange}
        >
          English
        </Button>
      ) : (
        <Button
          className="mx-1 btn btn-success fw-bold border-0 "
          variant="success"
          onClick={handleDirectionChange}
        >
          عربى
        </Button>
      )}

      <div style={{ margin: "auto" }}></div>

      <div className="header-part-right">
        <i
          className="i-Full-Screen header-icon text-primary bg-white d-none d-sm-inline-block"
          data-fullscreen
          onClick={toggleFullScreen}
        ></i>

        {/* 
        <Dropdown>
          <Dropdown.Toggle as="span" className="toggle-hidden">
            <i className="i-Safe-Box text-muted header-icon" role="button"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="menu-icon-grid">
              {shorcutMenuList.map((menu) => (
                <Link key={menu.text} to={menu.link}>
                  <i className={menu.icon}></i> {menu.text}
                </Link>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown> */}

        <Dropdown>
          <Dropdown.Toggle
            as="div"
            id="dropdownNotification"
            className="badge-top-container toggle-hidden"
          >
            <span className="badge bg-primary cursor-pointer">3</span>
            <i className="i-Bell text-muted header-icon"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="notification-dropdown">
            {notificationList.map((note, index) => (
              <div key={index} className="dropdown-item d-flex">
                <div className="notification-icon">
                  <i className={`${note.icon} text-${note.color} mr-1`}></i>
                </div>
                <div className="notification-details flex-grow-1">
                  <p className="m-0 d-flex align-items-center">
                    <span>{note.title}</span>
                    <span
                      className={`badge rounded-pill bg-${note.color} ms-1 me-1`}
                    >
                      {note.status}
                    </span>
                    <span className="flex-grow-1"></span>
                    <span className="text-small text-muted ms-auto">
                      {getTimeDifference(new Date(note.time))} ago
                    </span>
                  </p>
                  <p className="text-small text-muted m-0">
                    {note.description}
                  </p>
                </div>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <div className="user col px-3">
          <Dropdown>
            <Dropdown.Toggle as="span" className="toggle-hidden cursor-pointer">
              <img
                src="/assets/images/faces/1.jpg"
                id="userDropdown"
                alt=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="dropdown-header">
                <i className="i-Lock-User me-1"></i> Timothy Carlson
              </div>
              <Link
                to="/pages/user-profile"
                className="dropdown-item cursor-pointer"
              >
                Account settings
              </Link>
              <Link to="/" className="dropdown-item cursor-pointer">
                Billing history
              </Link>
              <Link
                to="/"
                className="dropdown-item cursor-pointer"
                onClick={props.logoutUser}
              >
                Sign out
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

Layout0Header.propTypes = {
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
  })(Layout0Header)
);
