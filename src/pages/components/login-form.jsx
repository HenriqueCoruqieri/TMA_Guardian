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

import { InputForm } from "./input-form";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PiClockUserLight } from "react-icons/pi";

const LoginForm = ({ showUserlessSessionButton = true }) => {
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
      navigate("/userless");
    }, 1500);
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="h-140 w-100 bg-slate-700 rounded-3xl text-white shadow-2xl shadow-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4" align="flex-start" maxW="sm">
          {/* INPUTS DE LOGIN E SENHA */}
          <div className="w-full space-y-6 p-9.5 mt-9">
            <InputForm
              label="Email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              error={errors.email}
              size="full"
              {...register("email", {
                required: "Informe seu email cadastrado",
              })}
            />

            <InputForm
              label="Senha"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              error={errors.password}
              size="full"
              {...register("password", {
                required: "Informe sue senha cadastrada",
              })}
            />
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col ml-[11%] w-[80%] gap-4">
            <Button
              border="2px"
              color="white"
              rounded="full"
              type="submit"
              variant="outline"
            >
              Entrar
            </Button>

            {showUserlessSessionButton && (
              <Button
                className="gap-3"
                rounded="full"
                onClick={() => handleClick()}
              >
                {loading ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <>
                    <PiClockUserLight size="25px" />
                    Entrar sem login
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="w-full flex flex-col font-bold gap-2 items-start pl-6 p-3">
            <Link color="white">Esqueci minha senha</Link>

            <Link href="http://localhost:5173/register" color="white">
              Cadastrar
            </Link>
          </div>
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
