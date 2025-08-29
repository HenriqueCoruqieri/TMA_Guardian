import "./App.css";
import LoginForm from "./components/login-form";
import WelcomeImage from "./components/welcome-image";
import WelcomeLogo from "./components/welcome-logo";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-600 inline-flex">
        <div className="absolute">
          <WelcomeLogo />
        </div>

        <div className="mt-[12%] p-12">
          <LoginForm />
        </div>

        <div className="h-screen w-screen">
          <WelcomeImage />
        </div>
      </div>
    </>
  );
}

export default App;
