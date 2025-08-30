import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ChakraProvider>
);
