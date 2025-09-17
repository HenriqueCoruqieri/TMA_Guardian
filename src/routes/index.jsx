import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/not-found-page";
import { userlessRoutes } from "./userless-routes";
import { appRoutes } from "./user-routes";

const router = createBrowserRouter([
  ...userlessRoutes,
  ...appRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
