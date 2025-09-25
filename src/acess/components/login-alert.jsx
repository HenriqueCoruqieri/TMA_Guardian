"use client";

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactJsAlert from "reactjs-alert";

const LoginAlert = () => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("warning");
  const [title, setTitle] = useState("This is a success alert");

  return (
    <div className="flex items-center gap-2">
      <Button
        bgColor="yellow.500"
        color="white"
        rounded="full"
        onClick={() => {
          setStatus(true);
          setType("warning");
          setTitle(
            "Todos os dados gravados nessa sessão serão perdidos após ser encerrada, clique em 'Login' para entrar com seu usuário"
          );
        }}
      >
        !
      </Button>

      <div className="">
        <h1 className="text-white font-bold">Sessão iniciada sem login</h1>
      </div>

      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
    </div>
  );
};

export default LoginAlert;
