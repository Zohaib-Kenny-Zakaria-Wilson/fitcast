import { Link } from "react-router-dom";
import { Logo } from "../components/misc/Logo";
function Main() {
  return (
    <main className="flex bg-gray-950 md:flex-row lg:flex-row flex-col-reverse h-screen ">
      <div></div>
      <div className="flex flex-col justify-center px-5 pt-8 bg-background">
        <img
          alt="pci"
          width="90%"
          src={require("../components/images/demo2.png")}
        ></img>
      </div>
      <div className="flex grow flex-col items-center justify-center p-12 bg-emerald-400 gap-10 ">
        <h1 className="text-5xl font-bold text-gray-950"> Get Started With </h1>
        <Logo />
        <div className="flex flex-row justify-between gap-x-3 gap-y-2">
          <Link className="btn btn-large">Log in</Link>
          <Link className="btn btn-large">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
