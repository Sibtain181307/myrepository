import { lazy } from "react";

const UploadForm = lazy(() => import("./UploadForm"));

const AppSweetAlert = lazy(() => import("./AppSweetAlert"));

const AppImageCropper = lazy(() => import("./AppImageCropper"));

const extraKitsRoutes = [
  {
    path: "/extra-kits/upload",
    component: UploadForm,
  },

  {
    path: "/extra-kits/sweet-alert",
    component: AppSweetAlert,
  },
  {
    path: "/extra-kits/image-cropper",
    component: AppImageCropper,
  },
];

export default extraKitsRoutes;
