import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const ViewVendor = lazy(() => import("./ViewVendor"));
const EditVendor = lazy(() => import("./EditVendor"));
const AddVendor = lazy(() => import("./AddVendor"));
const EditFormVendor = lazy(() => import("./EditFormVendor"));
const Addvendorroutes = [
  {
    path: "/vendor/view",
    component: ViewVendor,
    auth: authRoles.admin,
  },
  {
    path: "/vendor/add",
    component: AddVendor,
    auth: authRoles.admin,
  },
  {
    path: "/vendor/edit",
    component: EditVendor,
    auth: authRoles.admin,
  },
  {
    path: "/editformvendor",
    component: EditFormVendor,
    auth: authRoles.admin,
  },
];

export default Addvendorroutes;
