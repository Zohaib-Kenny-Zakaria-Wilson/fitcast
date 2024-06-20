import React from "react";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <main className=" flex flex-col justify-center my-48 mx-48 rounded-lg dark:bg-dark-foreground h-2/4 p-8 gap-9">
      <div className="text-4xl ">Settings</div>
      <div>
        <button className="px-4 py-2 rounded dark:text-dark-primary-tw dark:bg-dark-component-border hover:bg-blue-700">
          sign out
        </button>
        <Link
          to="/"
          className="px-4 py-2 rounded dark:text-dark-primary-tw dark:bg-dark-component-border hover:bg-blue-700"
        >
          save
        </Link>
      </div>
    </main>
  );
}

export default Settings;
