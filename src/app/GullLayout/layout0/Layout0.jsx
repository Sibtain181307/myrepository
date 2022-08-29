import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import PropTypes from "prop-types";
import { merge } from "lodash";
import History from "@history";

class Layout0 extends Component {
  componentDidMount() {
    console.log(localStorage.auth_user);
    const user = JSON.parse(localStorage.user);
    const role = user.role;
    console.log(role === "CUST-BIZ");
    if (role === "CUST-BIZ") {
      let { settings, setLayoutSettings } = this.props;
      setLayoutSettings(
        merge({}, settings, {
          activeLayout: "ShipperLayout",
        })
      );
      this.forceUpdate();
    } else if (role === "ADMIN") {
      let { settings, setLayoutSettings } = this.props;
      setLayoutSettings(
        merge({}, settings, {
          activeLayout: "layout1",
        })
      );
      this.forceUpdate();
    } else if (role === "CUST") {
      let { settings, setLayoutSettings } = this.props;
      setLayoutSettings(
        merge({}, settings, {
          activeLayout: "CustomerLayout",
        })
      );
      this.forceUpdate();
    }
    this.forceUpdate();
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
});

export default connect(mapStateToProps, {
  setLayoutSettings,
  setDefaultSettings,
})(Layout0);
