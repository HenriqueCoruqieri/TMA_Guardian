// src/pages/NotFound.jsx
import { Button } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-screen flex flex-col justify-center items-center bg-gray-700 text-white p-8">
        <div className="text-5xl p-6">
          <h1>Erro 404</h1>
          <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
        </div>

        <p className="text-center font-serif mb-6">
          Ops! Não foi possível localizar a rota requisitada!
        </p>

        <div className="p-6">
          <Button
            border="2px"
            variant="outline"
            rounded="full"
            textColor="white"
            width="150px"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
