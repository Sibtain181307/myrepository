import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

// View hub

const Viewhub = lazy(() => import("./view-hub/ViewHubs"));
const Addhub = lazy(() => import("./view-hub/AddHubs"));
const Edithub = lazy(() => import("./view-hub/EditHubs"));

//hub Crew

const ViewStaff = lazy(() => import("./Hub-crew/view-staff/ViewStaff"));
const AddStaff = lazy(() => import("./Hub-crew/view-staff/AddStaff"));
const EditStaff = lazy(() => import("./Hub-crew/view-staff/EditStaff"));
const StaffDetails = lazy(() => import("./Hub-crew/view-staff/StaffDetails"));

const ViewAssetManagement = lazy(() =>
  import("./Hub-management/Asset_Management")
);

const AddAssetManagement = lazy(() =>
  import("./Hub-management/AddAssetManagement")
);

const EditAssetManagement = lazy(() =>
  import("./Hub-management/EditAssetManagement")
);
const AddLastMileLocation = lazy(() =>
  import("./lastMileLocation/AddLastMileLocation")
);
const ViewLastMileLocation = lazy(() =>
  import("./lastMileLocation/ViewLastMileLocation")
);
const EditLastMileLocation = lazy(() =>
  import("./lastMileLocation/EditLastMileLocation")
);

const AddCustomerWareHouse = lazy(() =>
  import("./Customer-Warehouse/AddCustomerWareHouse")
);
const EditCustomerWareHouse = lazy(() =>
  import("./Customer-Warehouse/EditCustomerWareHouse")
);
const ViewCustomerWareHouse = lazy(() =>
  import("./Customer-Warehouse/ViewCustomerWareHouse")
);
const EditFormCustWarehouse = lazy(() =>
  import("./Customer-Warehouse/EditForm")
);
const EditFormLastMile = lazy(() => import("./lastMileLocation/EditForm"));
const EditFormHub = lazy(() => import("./view-hub/EditForm"));
const locationroutes = [
  {
    path: "/hub/viewhubs",
    component: Viewhub,
    auth: authRoles.admin,
  },
  {
    path: "/hub/addhub",
    component: Addhub,
    auth: authRoles.admin,
  },
  {
    path: "/hub/edithub",
    component: Edithub,
    auth: authRoles.admin,
  },
  //   hub crew

  {
    path: "/hubcrew/viewstaff",
    component: ViewStaff,
    auth: authRoles.admin,
  },

  {
    path: "/hubcrew/addstaff",
    component: AddStaff,
    auth: authRoles.admin,
  },
  {
    path: "/hubcrew/editstaff",
    component: EditStaff,
    auth: authRoles.admin,
  },
  {
    path: "/hubcrew/staffdetails",
    component: StaffDetails,
    auth: authRoles.admin,
  },

  {
    path: "/lastMileLocation/add",
    component: AddLastMileLocation,
    auth: authRoles.admin,
  },
  {
    path: "/lastMileLocation/edit",
    component: EditLastMileLocation,
    auth: authRoles.admin,
  },
  {
    path: "/ViewlastMileLocation",
    component: ViewLastMileLocation,
    auth: authRoles.admin,
  },
  {
    path: "/ViewCustomerWarehouse",
    component: ViewCustomerWareHouse,
    auth: authRoles.admin,
  },
  {
    path: "/EditCustomerWarehouse",
    component: EditCustomerWareHouse,
    auth: authRoles.admin,
  },
  {
    path: "/AddCustomerWarehouse",
    component: AddCustomerWareHouse,
    auth: authRoles.admin,
  },
  {
    path: "/AddAssets",
    component: AddAssetManagement,
    auth: authRoles.admin,
  },
  {
    path: "/EditAssets",
    component: EditAssetManagement,
    auth: authRoles.admin,
  },
  {
    path: "/ViewAssets",
    component: ViewAssetManagement,
    auth: authRoles.admin,
  },
  {
    path: "/EditFormHub",
    component: EditFormHub,
    auth: authRoles.admin,
  },
  {
    path: "/EditFormCustWarehouse",
    component: EditFormCustWarehouse,
    auth: authRoles.admin,
  },
  {
    path: "/EditFormLastMile",
    component: EditFormLastMile,
    auth: authRoles.admin,
  },
];
export default locationroutes;
