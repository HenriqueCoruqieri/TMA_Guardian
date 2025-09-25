import { UserPlus, CornerDownLeft } from "lucide-react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-white text-5xl font-bold">
        <UserPlus className="ml-12" color="white" size="150" />
        <h1>Cadastrar</h1>
      </div>

      <div className="flex p-6 mr-100">
        <Button
          type="button"
          variant="outline"
          rounded="full"
          size="sm"
          onClick={() => navigate(-1)}
        >
          <CornerDownLeft color="white" />
        </Button>
      </div>
    </div>
  );
};

export default RegisterHeader;

{
  /*
    <div className="text-white text-5xl font-bold space-y-2">
        <UserPlus className="ml-12" color="white" size="150" />
        <h1>Cadastrar</h1>
      </div>

      <div className="flex p-6 mr-100">
        <Button
          type="button"
          variant="outline"
          rounded="full"
          size="sm"
          onClick={() => navigate(-1)}
        >
          <CornerDownLeft color="white" />
        </Button>
      </div>
*/
}
