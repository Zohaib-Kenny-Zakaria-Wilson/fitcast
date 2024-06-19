import React from "react";
import { SearchBar } from "./misc/SearchBar";

export default function NavBar() {
  return (
    <>
    <main className="flex justify-end w-full gap-4 max-h-fit">
        {/* Search Bar*/}
        <SearchBar />
        {/* Dark Mode Button */}
        <button className="flex items-center justify-center rounded-full size-12 bg-primary-tw"><img className="size-8" src={process.env.PUBLIC_URL + '/assets/add-icon.svg'} alt="" /></button>
        { /* Profile */}
        <button
  className="rounded-full size-12 bg-primary-tw"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/base-profile.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
></button>
    </main>
    </>
  );
}
