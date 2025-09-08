import LoginAlert from "../components/login-alert";
import Logo from "../components/logo";
import Menu from "../components/no-user-menu";
import Timer from "../components/timer";

const UseWithoutLogin = () => {
  return (
    <div className="h-screen w-screen bg-gray-500">
      <div className="flex justify-center">
        <Menu />
      </div>

      <div className="flex flex-col items-center space-y-8 mt-16 p-6">
        <Logo />
        <Timer />
      </div>

      <div className="w-screen mt-2 items-center">
        <LoginAlert />
      </div>
    </div>
  );
};

export default UseWithoutLogin;
