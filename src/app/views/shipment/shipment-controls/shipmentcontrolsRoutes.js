import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const SearchShipment = lazy(() => import("./SearchShipment"));
const SearchShipmentUpdate = lazy(() => import("./SearchShipmentUpdate"));
const SearchShipmentCancel = lazy(() => import("./SearchShipmentCancel"));

const MarkShipment = lazy(() => import("./MarkShipment"));

const shipmentconntrolRoutes = [
  {
    path: "/shipmentcontrols/searchshipment",
    component: SearchShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentcontrols/searchshipmentupdate",
    component: SearchShipmentUpdate,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentcontrols/searchshipmentcancel",
    component: SearchShipmentCancel,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentcontrols/markshipment",
    component: MarkShipment,
    auth: authRoles.admin,
  },
];

export default shipmentconntrolRoutes;
