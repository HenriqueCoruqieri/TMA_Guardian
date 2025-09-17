import { lazy } from "react";
import App from "../App";
import { Suspense } from "react";

// Lazy loading das páginas
const NotFoundPage = lazy(() => import("../pages/not-found-page"));
const UserlessSession = lazy(() => import("../acess/pages/userless-session"));
const UserlessPanel = lazy(() => import("../acess/pages/userless-panel"));
const UserlessResult = lazy(() => import("../acess/pages/userless-result"));
const Login = lazy(() => import("../acess/pages/login"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <App />
      </Suspense>
    ),
  },
];
