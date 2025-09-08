import { lazy } from "react";
import App from "../App";
import { Suspense } from "react";
import UseWithoutLogin from "../acess/pages/use-without-login";

// Lazy loading das páginas
const UserPage = lazy(() => import("../acess/pages/use-without-login"));
const NotFoundPage = lazy(() => import("../pages/not-found-page"));

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
    path: "/welcome",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserPage />
      </Suspense>
    ),
  },

  {
    path: "/nouser",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UseWithoutLogin />
      </Suspense>
    ),
  },
  { path: "*", element: <NotFoundPage /> },
];
