import React, { Component, Suspense } from "react";
import { renderRoutes } from "react-router-config";

import VendorLayoutSidenav from "./VendorLayoutSideNav";
import Footer from "../SharedComponents/Footer";
import VendorLayoutHeader from "./VendorLayoutHeader";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { classList } from "@utils";
import GullSearch from "@gull/components/GullSearch";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { merge } from "lodash";
import Loading from "@gull/components/GullLoadable/Loading";
import { withRouter } from "react-router-dom";

class VendorLayout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  state = {};

  handleSearchBoxClose = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        VendorLayoutSettings: {
          searchBox: {
            open: false,
          },
        },
      })
    );
  };

  render() {
    let { settings, routes } = this.props;

    return (
      <div>
        <div className={`app-admin-wrap layout-sidebar-large`}>
          <VendorLayoutHeader></VendorLayoutHeader>
          <VendorLayoutSidenav />
          {/* sidebar */}

          <div
            className={classList({
              "main-content-wrap d-flex flex-column": true,
              "sidenav-open": settings.VendorLayoutSettings.leftSidebar.open,
            })}
          >
            <Suspense fallback={<Loading />}>
              <div className="main-content">{renderRoutes(routes)}</div>
            </Suspense>
            {settings.footer.show && <Footer></Footer>}
          </div>
        </div>
        <GullSearch
          open={settings.VendorLayoutSettings.searchBox.open}
          handleClose={this.handleSearchBoxClose}
        ></GullSearch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
});

export default withRouter(
  connect(mapStateToProps, { setLayoutSettings })(VendorLayout)
);
