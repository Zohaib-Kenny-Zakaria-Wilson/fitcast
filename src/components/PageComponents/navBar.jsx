import React from "react";
import { SearchBar } from "../misc/SearchBar";
import { DarkModeButton } from "../misc/DarkModeButton";
import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import LogoIcon from "../misc/LogoIcon";

export default function NavBar() {
  // State for toggling dark mode
  const [, toggleDarkMode] = useDarkMode();

  return (
    <main className="flex items-center justify-end w-full gap-8 max-h-fit">
      <Link
        to="/daily"
        className="transition-transform my-1 ml-1 duration-150 ease-in size-12 hover:translate-y-[2px] hover:scale-105 dark:hover:scale-110 dark:hover:translate-y-[2px]"
      >
        <LogoIcon />
      </Link>
      {/* Search Bar*/}
      <SearchBar />
      {/* Dark Mode Button */}
      <DarkModeButton onClick={toggleDarkMode} />
      {/* Profile */}
      <Link
        to="/settings"
        className="transition-transform my-1 mr-1 box-border duration-150 ease-in size-12 hover:translate-y-[2px] hover:scale-105 dark:hover:scale-110 dark:hover:translate-y-[2px] rounded-sm"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/base-profile.jpeg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Link>
    </main>
  );
}
