import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const CreateTrips = lazy(() => import("./CreateTrips"));
const ActiveTrips = lazy(() => import("./ActiveTrips"));
const PendingTrips = lazy(() => import("./PendingTrips"));
const CompletedTrips = lazy(() => import("./CompletedTrips"));

const schedulingRoutes = [
  {
    path: "/createtrips",
    component: CreateTrips,
    auth: authRoles.admin,
  },
  {
    path: "/activetrips",
    component: ActiveTrips,
    auth: authRoles.admin,
  },
  {
    path: "/pendingtrips",
    component: PendingTrips,
    auth: authRoles.admin,
  },
  {
    path: "/completedtrips",
    component: CompletedTrips,
    auth: authRoles.admin,
  },
];

export default schedulingRoutes;
