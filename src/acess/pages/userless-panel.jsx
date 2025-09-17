import UserlessMenu from "../components/userless-menu";

const UserlessPanel = () => {
  return (
    <div className="h-screen w-screen bg-gray-500">
      <div className="flex justify-center">
        <UserlessMenu />
      </div>

      <div className="">
        <h1>Painel</h1>
      </div>
    </div>
  );
};

export default UserlessPanel;
