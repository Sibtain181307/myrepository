import layout1Settings from "./Layout1/Layout1Settings";
import ShipperLayoutSettings from "./ShipperLayout/ShipperLayoutSettings";
import VendorLayoutSettings from "./VendorLayout/VendorLayoutSettings";
import Layout0Settings from "./layout0/Layout0Settings";
export const GullLayoutSettings = {
  activeLayout: "Layout0",

  dir: "ltr",
  layout1Settings,
  Layout0Settings,
  ShipperLayoutSettings,
  VendorLayoutSettings,

  customizer: {
    show: true,
    open: true,
  },
  footer: {
    show: true,
  },
};
