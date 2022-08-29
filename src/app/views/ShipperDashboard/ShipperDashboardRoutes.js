import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const ShipperDashboard = lazy(() => import("./ShipperDashboard"));

const ShipperDashboardRoutes = [
  {
    path: "/dashboard/shipper",
    component: ShipperDashboard,
  },
];

export default ShipperDashboardRoutes;
