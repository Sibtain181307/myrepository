import { lazy } from "react";

const Signup = lazy(() => import("./Signup"));

const SignupShipper = lazy(() => import("./SignupShipper"));

const Signin = lazy(() => import("./Signin"));

const ForgotPassword = lazy(() => import("./ForgotPassword"));

const Error404 = lazy(() => import("./Error"));

const sessionsRoutes = [
  {
    path: "/session/signup",
    component: Signup,
  },
  {
    path: "/session/signupshipper",
    component: SignupShipper,
  },
  {
    path: "/session/signin",
    component: Signin,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: Error404,
  },
];

export default sessionsRoutes;
