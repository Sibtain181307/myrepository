import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const CustomerToCustomer = lazy(() => import("./C2C"));
const CustomerToBusiness = lazy(() => import("./C2B"));
const BusinesstoCustomer = lazy(() => import("./B2C"));
const BusinessToBusiness = lazy(() => import("./BusinessToBusiness"));

const dashboardRoutes = [
  {
    path: "/shipments/businesstocustomer",
    component: BusinesstoCustomer,
    auth: authRoles.admin,
  },

  {
    path: "/shipments/customertobusiness",
    component: CustomerToBusiness,
    auth: authRoles.admin,
  },
  {
    path: "/shipments/customertocustomer",
    component: CustomerToCustomer,
    auth: authRoles.admin,
  },

  {
    path: "/shipments/businesstobusiness",
    component: BusinessToBusiness,
    auth: authRoles.admin,
  },
];

export default dashboardRoutes;
