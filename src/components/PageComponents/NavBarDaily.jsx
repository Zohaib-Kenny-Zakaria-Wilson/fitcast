import React from "react";
import { SearchBar } from "../misc/SearchBar";
import { DarkModeButton } from "../misc/DarkModeButton";
import useDarkMode from "../../hooks/useDarkMode";
import LogoIcon from "../misc/LogoIcon";
import { Link } from "react-router-dom";

export default function NavBarDaily({ toggleWthrDisplay }) {
  const [, toggleDarkMode] = useDarkMode();

  return (
    <main className="flex items-center justify-end w-full gap-4 max-h-fit">
      <button
        onClick={toggleWthrDisplay}
        className="transition-transform duration-150 ease-in w-fit size-12 hover:translate-y-[2px] hover:scale-105 dark:hover:scale-110 dark:hover:translate-y-[2px]"
      >
        <LogoIcon />
      </button>
      {/* Search Bar */}
      <SearchBar />
      {/* Dark Mode Button */}
      <DarkModeButton onClick={toggleDarkMode} />
      {/* Profile */}
      <Link
        to="/settings"
        className="rounded-full size-12 bg-primary-tw"
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
