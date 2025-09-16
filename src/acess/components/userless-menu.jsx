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

const UserlessMenu = () => {
  const navigate = useNavigate();

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
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="">Inicio</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="">Painel</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="">Resultados</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="">Login</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="absolute ml-460 mt-3">
        <Button
          onClick={() => navigate("/")}
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
