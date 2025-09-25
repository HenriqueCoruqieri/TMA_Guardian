import { Input, FormLabel, Button } from "@chakra-ui/react";
import RegisterButton from "./components/register-button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterHeader from "./components/register-header";
import { InputForm } from "./components/input-form";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Zod Schema
  const createUserFormSchema = z
    .object({
      agent_name: z.string().nonempty("O usuário é obrigatório"),
      email: z
        .string()
        .nonempty("O email é obrigatório")
        .email("Formato de email inválido"),
      password: z
        .string()
        .nonempty("A senha é obrigatória")
        .min(8, "A senha precisa ter no mínimo 8 caracteres"),
      confirmPassword: z
        .string()
        .nonempty("Confirme sua senha")
        .min(8, "A senha obrigatóriamente possui mais de 8 caracteres"),
    })
    .refine((data) => data.password == data.confirmPassword, {
      message: "Senhas divergêntes",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  //Enviar dados do formulário para o banco
  async function createUser(data) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agent_name: data.agent_name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      } else {
        alert(result.error || "Erro ao cadastrar usuário");
        setLoading(false);
      }
    } catch {
      alert("Erro de conexão com o servidor");
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-600 items-center p-2">
      <RegisterHeader />
      <form
        className="bg-slate-700 p-8 text-white md:w-1/4 space-y-4 min-w-md rounded-3xl"
        onSubmit={handleSubmit(createUser)}
      >
        <InputForm
          label="Usuário"
          name="agent"
          type="text"
          placeholder="Digite um nome de usuário"
          error={errors.agent_name}
          size="full"
          {...register("agent_name")}
        />

        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          error={errors.email}
          size="full"
          {...register("email")}
        />

        <InputForm
          label="Senha"
          name="password"
          type="password"
          placeholder="Crie uma senha"
          error={errors.password}
          size="full"
          {...register("password")}
        />

        <InputForm
          label="Confirmar Senha"
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          error={errors.confirmPassword}
          size="full"
          {...register("confirmPassword")}
        />
        <div className="p-4">
          <RegisterButton loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
