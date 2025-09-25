import LoginForm from "../../pages/components/login-form";
import UserlessMenu from "../components/userless-menu";
import { User } from "lucide-react";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-gray-600">
      <div className="flex justify-center">
        <UserlessMenu />
      </div>

      <div className="flex flex-col items-center p-12 space-y-8">
        <User color="white" size="150" />
        <LoginForm showUserlessSessionButton={false} />
      </div>
    </div>
  );
};

export default Login;
