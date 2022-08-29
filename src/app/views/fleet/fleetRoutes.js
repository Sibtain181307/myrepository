import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const DriverManagement = lazy(() => import("./drivers/DriverManagement"));

const ViewDriver = lazy(() => import("./drivers/ViewDriver"));
const AddDriver = lazy(() => import("./drivers/AddDriver"));
const EditDriver = lazy(() => import("./drivers/EditDriver"));
const DriverDetails = lazy(() => import("./drivers/DriverDetails"));

const ViewVehicle = lazy(() => import("./vehicles/ViewVehicle"));
const AddVehicle = lazy(() => import("./vehicles/AddVehicle"));
const VehicleDetails = lazy(() => import("./vehicles/VehicleDetails"));
const EditVehicle = lazy(() => import("./vehicles/EditVehicle"));

const fleetRoutes = [
  {
    path: "/fleet/drivermanagement",
    component: DriverManagement,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/viewdriver",
    component: ViewDriver,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/adddriver",
    component: AddDriver,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/editdriver",
    component: EditDriver,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/driverdetails",
    component: DriverDetails,
    auth: authRoles.admin,
  },

  {
    path: "/fleet/viewvehicle",
    component: ViewVehicle,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/addvehicle",
    component: AddVehicle,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/vehicledetails",
    component: VehicleDetails,
    auth: authRoles.admin,
  },
  {
    path: "/fleet/editvehicle",
    component: EditVehicle,
    auth: authRoles.admin,
  },
];

export default fleetRoutes;
