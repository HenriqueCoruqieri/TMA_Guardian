import UserlessMenu from "../components/userless-menu";

const UserlessResult = () => {
  return (
    <div className="h-screen w-screen bg-gray-500">
      <div className="flex justify-center">
        <UserlessMenu />
      </div>

      <div className="">
        <h1>Resultados</h1>
      </div>
    </div>
  );
};

export default UserlessResult;
