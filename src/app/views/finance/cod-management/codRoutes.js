import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const CodCollection = lazy(() => import("./CodCollection"));
const CodReturn = lazy(() => import("./CodReturn"));
const NewReturn = lazy(() => import("./NewReturn"));

const codRoutes = [
  {
    path: "/codmanagement/codcollection",
    component: CodCollection,
    auth: authRoles.admin,
  },
  {
    path: "/codmanagement/codreturn",
    component: CodReturn,
    auth: authRoles.admin,
  },
  {
    path: "/codmanagement/newreturn",
    component: NewReturn,
    auth: authRoles.admin,
  },
];

export default codRoutes;
