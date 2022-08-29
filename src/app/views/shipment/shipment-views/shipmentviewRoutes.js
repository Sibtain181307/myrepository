import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const PendingPickup = lazy(() => import("./PendingPickup"));
const IntripShipment = lazy(() => import("./IntripShipment"));
const ShelfShipment = lazy(() => import("./ShelfShipment"));
const FloorShipment = lazy(() => import("./FloorShipment"));
const InterCityShipment = lazy(() => import("./InterCityShipment"));
const BulkCargoShipment = lazy(() => import("./BulkCargoShipment"));
const TransportedShipment = lazy(() => import("./TransportedShipment"));
const CancelledShipment = lazy(() => import("./CancelledShipment"));
const UndefineShipment = lazy(() => import("./UndefineShipment"));
const ReturnShipment = lazy(() => import("./ReturnShipment"));
const ShipmentReport = lazy(() => import("./ShipmentReport"));
const ArchievedShipments = lazy(() => import("./ArchievedShipments"));

const shipmentviewRoutes = [
  {
    path: "/shipmentviews/pendingpickup",
    component: PendingPickup,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/intripshipment",
    component: IntripShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/shelfshipment",
    component: ShelfShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/floorshipment",
    component: FloorShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/intercityshipment",
    component: InterCityShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/bulkcargoshipment",
    component: BulkCargoShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/transportedshipment",
    component: TransportedShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/cancelledshipment",
    component: CancelledShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/undefineshipment",
    component: UndefineShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/returnshipment",
    component: ReturnShipment,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/shipmentreport",
    component: ShipmentReport,
    auth: authRoles.admin,
  },
  {
    path: "/shipmentviews/archievedshipments",
    component: ArchievedShipments,
    auth: authRoles.admin,
  },
];

export default shipmentviewRoutes;
