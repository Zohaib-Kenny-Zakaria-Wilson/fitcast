import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/misc/Logo";
function Main() {
  return (
    <main className="flex bg-gray-950 flex-row h-screen ">
      <div className="flex-col grow justify-center px-5 pt-8 bg-gray-50">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center px-5 py-8 bg-emerald-400 gap-10 ">
        <h1 className="text-5xl font-bold text-gray-950">Get Started</h1>
        <div className="flex flex-row justify-between gap-x-3 gap-y-2">
          <Link class="btn btn-large">Log in</Link>
          <Link class="btn btn-large">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
