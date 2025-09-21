import App from "../App";
import { Suspense } from "react";
import RegisterForm from "../pages/register-form";

export const appRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <App />
      </Suspense>
    ),
  },

  {
    path: "register",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <RegisterForm />
      </Suspense>
    ),
  },
];
