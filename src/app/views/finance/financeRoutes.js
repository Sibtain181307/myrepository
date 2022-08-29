import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Invoices = lazy(() => import("./shipper-billing/invoices/Invoices"));
const InvoiceDetails = lazy(() =>
  import("./shipper-billing/invoices/InvoiceDetails")
);

const CreateInvoices = lazy(() =>
  import("./shipper-billing/invoices/CreateInvoices")
);
const ShipperAccounts = lazy(() => import("./shipper-billing/ShipperAccounts"));

const Payouts = lazy(() => import("./expense-management/Payout"));
const UtilityPayouts = lazy(() =>
  import("./expense-management/UtilityPayouts")
);

const CreateExpense = lazy(() =>
  import("./expense-management/other-payable/CreateExpense")
);

const PrintPDF = lazy(() => import("./shipper-billing/invoices/PrintPDF"));
const financeRoutes = [
  {
    path: "/finance/invoices",
    component: Invoices,
    auth: authRoles.admin,
  },
  {
    path: "/finance/invoicedetails",
    component: InvoiceDetails,
    auth: authRoles.admin,
  },
  {
    path: "/finance/createinvoice",
    component: CreateInvoices,
    auth: authRoles.admin,
  },
  {
    path: "/finance/shipperaccounts",
    component: ShipperAccounts,
    auth: authRoles.admin,
  },
  {
    path: "/finance/payouts",
    component: Payouts,
    auth: authRoles.admin,
  },
  {
    path: "/finance/utlitypayouts",
    component: UtilityPayouts,
    auth: authRoles.admin,
  },
  {
    path: "/finance/createexpense",
    component: CreateExpense,
    auth: authRoles.admin,
  },
  {
    path: "/finance/print",
    component: PrintPDF,
    auth: authRoles.admin,
  },
];

export default financeRoutes;
