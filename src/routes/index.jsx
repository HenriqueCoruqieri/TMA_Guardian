import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/not-found-page";
import { userlessRoutes } from "./userless-routes";
import { appRoutes } from "./user-routes";
import RegisterForm from "../pages/register-form";

const router = createBrowserRouter([
  ...userlessRoutes,
  ...appRoutes,

  {
    path: "*",
    element: <NotFoundPage />,
  },

  {
    path: "register",
    element: <RegisterForm />,
  },
]);

export default router;
