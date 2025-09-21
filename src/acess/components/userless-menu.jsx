"use client";

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Button,
} from "@chakra-ui/react";
import { TbMinusVertical } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserlessMenu = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const exitUserlessSessionClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="flex justify-center">
      <div className="flex h-15 w-screen justify-center bg-gray-700 items-center max-w-full shadow-2xl shadow-white">
        <Breadcrumb
          color="white"
          fontSize="2xl"
          fontStyle="oblique"
          separator={<TbMinusVertical color="white" />}
          className="font-bold"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="http://localhost:5173/userless">
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="http://localhost:5173/userless-panel">
              Painel
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="http://localhost:5173/userless-result">
              Resultados
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="http://localhost:5173/login">
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="absolute ml-460 mt-3">
        <Button
          onClick={() => exitUserlessSessionClick(loading)}
          variant="outline"
          size="sm"
          rounded="full"
        >
          <LuLogOut color="white" />
        </Button>
      </div>
    </div>
  );
};

export default UserlessMenu;
