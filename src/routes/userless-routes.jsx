import { lazy } from "react";
import { Suspense } from "react";

const UserlessSession = lazy(() => import("../acess/pages/userless-session"));
const UserlessPanel = lazy(() => import("../acess/pages/userless-panel"));
const UserlessResult = lazy(() => import("../acess/pages/userless-result"));
const Login = lazy(() => import("../acess/pages/login"));

export const userlessRoutes = [
  {
    path: "/userless",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserlessSession />
      </Suspense>
    ),
  },

  {
    path: "/userless-panel",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserlessPanel />
      </Suspense>
    ),
  },

  {
    path: "/userless-result",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserlessResult />
      </Suspense>
    ),
  },

  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <Login />
      </Suspense>
    ),
  },
];
