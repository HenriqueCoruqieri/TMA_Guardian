"use client";

import {
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";

import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PiClockUserLight } from "react-icons/pi";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/welcome");
    }, 1500);
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="h-140 w-100 bg-slate-700 rounded-2xl text-white shadow-2xl shadow-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4" align="flex-start" maxW="sm">
          {/* INPUTS DE LOGIN E SENHA */}
          <div className="space-y-6 p-8 mt-9">
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                width="xs"
                errorBorderColor="white"
                {...register("email", { required: "Campo obrigatório" })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.senha}>
              <FormLabel>Senha</FormLabel>
              <Input
                errorBorderColor="white"
                type="password"
                {...register("senha", { required: "Campo obrigatório" })}
              />
              <FormErrorMessage>
                {errors.senha && errors.senha.message}
              </FormErrorMessage>
            </FormControl>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col ml-[10%] w-[80%] gap-4">
            <Button
              border="2px"
              color="white"
              rounded="full"
              type="submit"
              variant="outline"
            >
              Entrar
            </Button>

            <Button
              className="gap-3"
              rounded="full"
              onClick={() => handleClick()}
            >
              <PiClockUserLight size="25px" />
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Entrar sem login"
              )}
            </Button>
          </div>

          <div className="w-full flex flex-col font-bold gap-2 items-start pl-6 p-3">
            <Link color="white">Esqueci minha senha</Link>
            <Link color="white">Cadastrar</Link>
          </div>
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
