import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const ViewBusineesController = lazy(() =>
  import("./BusinessController/ViewBusiness")
);
const EditBusineesController = lazy(() =>
  import("./BusinessController/EditBusinessController")
);
const AddBusineesController = lazy(() =>
  import("./BusinessController/AddBusinessController")
);

const EditForm = lazy(() => import("./BusinessController/EditForm"));

const AddBusinessRoutes = [
  {
    path: "/BusinessController/view",
    component: ViewBusineesController,
    auth: authRoles.admin,
  },
  {
    path: "/BusinessController/add",
    component: AddBusineesController,
    auth: authRoles.admin,
  },
  {
    path: "/BusinessController/edit",
    component: EditBusineesController,
    auth: authRoles.admin,
  },
  {
    path: "/editbusinessForm",
    component: EditForm,
    auth: authRoles.admin,
  },
];

export default AddBusinessRoutes;
