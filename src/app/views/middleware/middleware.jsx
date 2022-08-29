import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import PropTypes from "prop-types";
import { merge } from "lodash";
class middleware extends Component {
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
})(middleware);
