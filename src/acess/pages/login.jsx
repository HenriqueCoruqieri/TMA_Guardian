import UserlessMenu from "../components/userless-menu";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-gray-600">
      <div className="flex justify-center">
        <UserlessMenu />
      </div>

      <div className="">
        <h1>Login</h1>
      </div>
    </div>
  );
};

export default Login;
