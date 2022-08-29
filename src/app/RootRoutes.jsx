import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./views/dashboard/dashboardRoutes";
import Profileroutes from "./views/ProfilePage.jsx/profileroutes";
import sessionsRoutes from "./views/sessions/sessionsRoutes";
import AuthGuard from "./auth/AuthGuard";
import chartsRoute from "./views/charts/chartsRoute";
import extraKitsRoutes from "./views/extra-kits/extraKitsRoutes";
import ShipperDashboardRoutes from "./views/ShipperDashboard/ShipperDashboardRoutes";
import invoiceRoutes from "./views/app/invoice/invoiceRoutes";
import locationroutes from "./views/Locations/locationsroutes";
import VendorDashboardRoutes from "./views/VendorDashboard/VendorDashboardRoutes";
// scheduling
import schedulingRoutes from "./views/shipment/scheduling/schedulingRoutes";
import shipmentviewRoutes from "./views/shipment/shipment-views/shipmentviewRoutes";
import shipmentconntrolRoutes from "./views/shipment/shipment-controls/shipmentcontrolsRoutes";

// Warehouse

import fleetRoutes from "./views/fleet/fleetRoutes";
import financeRoutes from "./views/finance/financeRoutes";
import codRoutes from "./views/finance/cod-management/codRoutes";
import AddUserRoutes from "./views/User/addUserRoutes";
import salesRoutes from "./views/sales/salesRoutes";
import middlewareroutes from "./views/middleware/middlewareroutes";
import shipperactionRoutes from "./views/shipment/create-shipment/shipperactionRoutes";

import landingRoutes from "./views/landing/landingRoutes";
import Addvendorroutes from "./views/User/Vendor/addvendorroutes";
import AddBusinessRoutes from "./views/User/Business/addbusinessroutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/welcome" />,
  },
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
];

const RootRoutes = [
  ...sessionsRoutes,
  ...landingRoutes,
  {
    path: "/",
    component: AuthGuard,
    routes: [
      // Added
      ...schedulingRoutes,
      ...shipmentviewRoutes,
      ...shipmentconntrolRoutes,
      ...fleetRoutes,
      ...financeRoutes,
      ...codRoutes,
      ...salesRoutes,
      ...shipperactionRoutes,
      ...AddUserRoutes,
      ...Addvendorroutes,
      ...AddBusinessRoutes,
      ...Profileroutes,
      ...VendorDashboardRoutes,
      ...locationroutes,
      ...middlewareroutes,

      ...ShipperDashboardRoutes,
      // old
      ...dashboardRoutes,
      ...chartsRoute,
      ...extraKitsRoutes,
      ...invoiceRoutes,
      ...redirectRoute,
      ...errorRoute,
    ],
  },
];

export default RootRoutes;
