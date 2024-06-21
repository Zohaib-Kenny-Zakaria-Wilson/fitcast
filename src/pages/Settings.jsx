import React from "react";
import { Link } from "react-router-dom";
function Settings() {
  return (
    <main className="w-screen h-screen py-10 border-b-4 gap-14 bg-background dark:bg-dark-background ">
      <div className="flex flex-col justify-between p-10 mx-48 my-48 border-b-4 rounded-lg bg-foreground dark:bg-dark-foreground h-2/4 gap-9 border-component-border dark:border-dark-component-border">
        <div className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw ">
          Settings
        </div>
        <div className="flex justify-between flex-row-inverse">
          <Link to="/">
            <button className="px-4 py-2 rounded dark:text-dark-primary-tw text-primary-tw dark:bg-dark-component-border bg-component-border hover:bg-blue-700">
              sign out
            </button>
          </Link>
          <Link to="/daily">
            <button className="px-4 py-2 rounded dark:text-dark-primary-tw text-primary-tw dark:bg-dark-component-border bg-component-border hover:bg-blue-700">
              save
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Settings;
