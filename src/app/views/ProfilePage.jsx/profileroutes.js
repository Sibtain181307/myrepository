import { lazy } from "react";

const UserProfile = lazy(() => import("./UserProfile"));
const EditProfile = lazy(() => import("./editProfile"));
const Profileroutes = [
  {
    path: "/pages/user-profile",
    component: UserProfile,
  },
  {
    path: "/profilepage/edit-profile",
    component: EditProfile,
  },
];

export default Profileroutes;
