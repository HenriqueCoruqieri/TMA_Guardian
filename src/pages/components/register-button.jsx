"use client";

import { Button } from "@chakra-ui/react";
import { LoaderCircle } from "lucide-react";

const RegisterButton = ({ loading }) => {
  return (
    <Button
      type="Submit"
      className="gap-3 w-[80%]"
      background="white"
      minWidth="3xs"
      rounded="full"
      isLoading={loading}
      spinner={<LoaderCircle className="animate-spin" />}
      disabled={loading}
    >
      Concluir
    </Button>
  );
};

export default RegisterButton;
