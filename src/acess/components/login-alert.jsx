import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactJsAlert from "reactjs-alert";

const LoginAlert = () => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("warning");
  const [title, setTitle] = useState("This is a success alert");

  return (
    <div className="flex ml-[32%] ">
      <Button
        bgColor="yellow.400"
        color="white"
        rounded="full"
        onClick={() => {
          setStatus(true);
          setType("warning");
          setTitle(
            "Todos os dados gravados nessa sessão serão perdidos após ser encerrada, clique em ''Login'' para se cadastrar ou entrar com seu usuário"
          );
        }}
      >
        !
      </Button>

      <div className="absolute ml-12 mt-2 font-bold">
        <h1 className="text-white ">Sessão iniciada sem login</h1>
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
