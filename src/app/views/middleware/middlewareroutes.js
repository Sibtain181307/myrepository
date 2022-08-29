import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";
const Middleware = lazy(() => import("./middleware"));

const middlewareroutes = [
  {
    path: "/middleware",
    component: Middleware,
  },
];

export default middlewareroutes;
