import { lazy } from "react";
import App from "../App";
import { Suspense } from "react";

// Lazy loading das páginas
const NotFoundPage = lazy(() => import("../pages/not-found-page"));
const UserlessSession = lazy(() => import("../acess/pages/userless-session"));

export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <App />
      </Suspense>
    ),
  },

  {
    path: "/userless",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserlessSession />
      </Suspense>
    ),
  },
  { path: "*", element: <NotFoundPage /> },
];
