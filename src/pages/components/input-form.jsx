"use client";

import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

export const InputForm = React.forwardRef(
  (
    {
      name,
      label,
      error = null,
      bgColor = "#334155",
      textColor = "#ffffff",
      size = "full",
      ...rest
    },
    ref
  ) => {
    const sizeClasses = {
      xs: "w-20",
      sm: "w-32",
      md: "w-64",
      lg: "w-96",
      full: "w-full",
    };

    const widthClass = sizeClasses[size] || sizeClasses.full;

    return (
      <div className={widthClass}>
        <FormControl isInvalid={!!error}>
          {/* Só mostra o label se ele for passado como prop */}
          {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

          <Input
            id={name}
            name={name}
            ref={ref}
            style={{
              "--autofill-bg": bgColor,
              "--autofill-text": textColor,
            }}
            {...rest}
          />

          {/* Só mostra a mensagem de erro se ela existir */}
          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      </div>
    );
  }
);

// Adiciona um nome de exibição para facilitar a depuração no React DevTools
InputForm.displayName = "InputForm";
