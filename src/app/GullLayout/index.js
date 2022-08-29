import { lazy } from "react";

const Layout1 = lazy(() => import("./Layout1/Layout1"));
const ShipperLayout = lazy(() => import("./ShipperLayout/ShipperLayout"));
const VendorLayout = lazy(() => import("./VendorLayout/VendorLayout"));
const Layout0 = lazy(() => import("./layout0/Layout0"));
export const GullLayouts = {
  layout1: Layout1,
  ShipperLayout: ShipperLayout,
  VendorLayout: VendorLayout,
  Layout0: Layout0,
};
