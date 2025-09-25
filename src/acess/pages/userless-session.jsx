import LoginAlert from "../components/login-alert";
import Logo from "../components/logo";
import UserlessMenu from "../components/userless-menu";
import Timer from "../components/timer";

const UserlessSession = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-600 overflow-x-hidden">
      <div className="flex justify-center">
        <UserlessMenu />
      </div>

      <div className="flex flex-col items-center space-y-8 mt-16 p-6">
        <Logo />
        <div className="w-full max-w-[700px] flex flex-col items-center">
          <Timer />
          <div className="w-full flex mt-4">
            <LoginAlert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserlessSession;
