import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

// View Employee

const ViewEmploy = lazy(() => import("./Employee-User/ViewEmployUser"));
const AddEmploy = lazy(() => import("./Employee-User/AddEmployUser"));
const EditEmploy = lazy(() => import("./Employee-User/EditEmployUser"));

const ViewBusineesCustomer = lazy(() =>
  import("./Business-Customer-User/ViewBusineesCustomer")
);
const EditBusineesCustomer = lazy(() =>
  import("./Business-Customer-User/EditBusineesCustomer")
);
const AddBusineesCustomer = lazy(() =>
  import("./Business-Customer-User/AddBusineesCustomer")
);

const AddCustomerUser = lazy(() => import("./Customer-User/AddCustomerUser"));
const ViewCustomerUser = lazy(() => import("./Customer-User/ViewCustomerUser"));
const EditCustomerUser = lazy(() => import("./Customer-User/EditCustomerUser"));

const AddEmpDriver = lazy(() => import("./Emp-Driver/AddEmpDriver"));
const EditEmpDriver = lazy(() => import("./Emp-Driver/EditEmpDriver"));
const ViewEmpDriver = lazy(() => import("./Emp-Driver/ViewEmpDriver"));

const AddFreelanceDriver = lazy(() =>
  import("./Freelance-Driver/AddFreelanceDriver")
);

const EditFreelanceDriver = lazy(() =>
  import("./Freelance-Driver/EditFreelanceDriver")
);

const ViewFreelanceDriver = lazy(() =>
  import("./Freelance-Driver/ViewFreelanceDriver")
);

const AddVendorDriver = lazy(() => import("./Vendor-Driver/AddVendorDriver"));
const EditVendorDriver = lazy(() => import("./Vendor-Driver/EditVendorDriver"));
const ViewVendorDriver = lazy(() => import("./Vendor-Driver/ViewVendorDriver"));

const AddVendorUser = lazy(() => import("./Vendor-User/AddVendorUser"));
const EditVendorUser = lazy(() => import("./Vendor-User/EditVendorUser"));
const ViewVendorUser = lazy(() => import("./Vendor-User/ViewVendorUser"));

const EditForm = lazy(() => import("./CollectiveEditForm/EditForm"));

const AddUserRoutes = [
  //   view warehouses
  {
    path: "/EmpUser/view",
    component: ViewEmploy,
    auth: authRoles.admin,
  },
  {
    path: "/EmpUser/add",
    component: AddEmploy,
    auth: authRoles.admin,
  },
  {
    path: "/EmpUser/edit",
    component: EditEmploy,
    auth: authRoles.admin,
  },

  {
    path: "/EmpDrvier/view",
    component: ViewEmpDriver,
    auth: authRoles.admin,
  },
  {
    path: "/EmpDriver/add",
    component: AddEmpDriver,
    auth: authRoles.admin,
  },
  {
    path: "/EmpDriver/edit",
    component: EditEmpDriver,
    auth: authRoles.admin,
  },

  {
    path: "/BusinessCustomer/view",
    component: ViewBusineesCustomer,
    auth: authRoles.admin,
  },
  {
    path: "/BusinessCustomer/add",
    component: AddBusineesCustomer,
    auth: authRoles.admin,
  },
  {
    path: "/BusinessCustomer/edit",
    component: EditBusineesCustomer,
    auth: authRoles.admin,
  },

  {
    path: "/CustomerUser/view",
    component: ViewCustomerUser,
    auth: authRoles.admin,
  },
  {
    path: "/CustomerUser/add",
    component: AddCustomerUser,
    auth: authRoles.admin,
  },
  {
    path: "/CustomerUser/edit",
    component: EditCustomerUser,
    auth: authRoles.admin,
  },

  {
    path: "/FreelanceDriver/view",
    component: ViewFreelanceDriver,
    auth: authRoles.admin,
  },
  {
    path: "/FreelanceDriver/add",
    component: AddFreelanceDriver,
    auth: authRoles.admin,
  },
  {
    path: "/FreelanceDriver/edit",
    component: EditFreelanceDriver,
    auth: authRoles.admin,
  },

  {
    path: "/VendorDriver/view",
    component: ViewVendorDriver,
    auth: authRoles.admin,
  },
  {
    path: "/VendorDriver/add",
    component: AddVendorDriver,
    auth: authRoles.admin,
  },
  {
    path: "/VendorDriver/edit",
    component: EditVendorDriver,
    auth: authRoles.admin,
  },

  {
    path: "/VendorUser/view",
    component: ViewVendorUser,
    auth: authRoles.admin,
  },
  {
    path: "/VendorUser/add",
    component: AddVendorUser,
    auth: authRoles.admin,
  },
  {
    path: "/VendorUser/edit",
    component: EditVendorUser,
    auth: authRoles.admin,
  },
  {
    path: "/editform",
    component: EditForm,
    auth: authRoles.admin,
  },
];

export default AddUserRoutes;
