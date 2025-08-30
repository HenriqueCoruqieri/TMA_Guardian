import { lazy } from "react";
import App from "../App";
import { Suspense } from "react";

// Lazy loading das páginas
const UserPage = lazy(() => import("../pages/user-page"));
const NotFoundPage = lazy(() => import("../pages/not-found-page"));
// Adicione outras páginas se existirem, exemplo:
// const Home = lazy(() => import("../pages/home"));
// const Login = lazy(() => import("../pages/login"));

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
    path: "/userpage",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserPage />
      </Suspense>
    ),
  },
  { path: "*", element: <NotFoundPage /> },
];
