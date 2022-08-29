import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const VendorDashboard = lazy(() => import("./VendorDashboard"));

const VendorDashboardRoutes = [
  {
    path: "/dashboard/vendor",
    component: VendorDashboard,
  },
];

export default VendorDashboardRoutes;
