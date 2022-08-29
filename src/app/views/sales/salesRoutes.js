import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const ViewShipper = lazy(() => import("./shipper/ViewShipper"));
const AddShipper = lazy(() => import("./shipper/AddShipper"));

const salesRoutes = [
  {
    path: "/sales/viewshipper",
    component: ViewShipper,
    auth: authRoles.admin,
  },
  {
    path: "/sales/addshipper",
    component: AddShipper,
    auth: authRoles.admin,
  },
];

export default salesRoutes;
