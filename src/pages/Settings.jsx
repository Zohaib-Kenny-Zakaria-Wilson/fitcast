import React from "react";
import { Link } from "react-router-dom";
function Settings() {
  return (
    <main className=" w-screen h-screen py-10 gap-14 bg-background dark:bg-dark-background">
      <div className=" flex flex-col justify-between my-48 mx-48 rounded-lg bg-foreground dark:bg-dark-foreground h-2/4 p-10 gap-9">
        <div className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw">
          Settings
        </div>
        <div className="flex justify-between flex-row-inverse">
          <button className="px-4 py-2 rounded dark:text-dark-primary-tw text-primary-tw dark:bg-dark-component-border bg-component-border hover:bg-blue-700">
            sign out
          </button>
          <Link to="/">
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
