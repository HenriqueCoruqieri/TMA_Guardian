import { Outlet } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/components/login-form";
import WelcomeImage from "./pages/components/welcome-image";
import WelcomeLogo from "./pages/components/welcome-logo";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col md:flex-row bg-gray-600">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 md:h-1/2">
          <WelcomeLogo />
          <LoginForm />
        </div>
        <div className="hidden md:flex w-2/2">
          <WelcomeImage />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
