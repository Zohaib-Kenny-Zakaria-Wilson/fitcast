import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/misc/Logo";
function Main() {
  return (
    <main className="flex flex-row min-h-full w-screen">
      <div className="flex-col justify-center px-5 pt-8 bg-gray-50">
        <Logo />
      </div>
      <div className=" flex from-sky-500 flex-col items-center justify-between px-5 py-8 bg-gradient-to-r to-indigo-500">
        <div className="flex flex-row gap-x-3 gap-y-2">
          <Link class="btn btn-large">Log in</Link>
          <Link class="btn btn-large">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
