import LoginAlert from "../components/login-alert";
import Logo from "../components/logo";
import UserlessMenu from "../components/userless-menu";
import Timer from "../components/timer";

const UserlessSession = () => {
  return (
    <div className="h-screen w-screen bg-gray-600">
      <div className="flex justify-center">
        <UserlessMenu />
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

export default UserlessSession;
