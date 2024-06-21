import { Link } from "react-router-dom";
import { WthrLogo } from "../components/WthrComponents/WthrLogo";
function Main() {
  return (
    <main className="flex flex-col-reverse h-screen dark:bg-dark-background bg-background md:flex-row lg:flex-row ">
      <div className="flex flex-col justify-center pl-12">
        <img
          alt="pci"
          width="90%"
          src={require("../components/images/demo2.png")}
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-12 grow bg-emerald-400 ">
        <h1 className="text-5xl font-bold text-gray-950"> Get Started With </h1>
        <WthrLogo />
        <div className="flex flex-row justify-between gap-x-3 gap-y-2">
          <Link to={"/daily"} className="btn btn-large">
            Log in
          </Link>
          <Link to={"/daily"} className="btn btn-large">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
