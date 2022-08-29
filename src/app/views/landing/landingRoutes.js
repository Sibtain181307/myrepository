import { lazy } from "react";

const Landing = lazy(() => import("./Landing"));

const landingRoutes = [
  {
    path: "/welcome",
    component: Landing,
  },
];

export default landingRoutes;
