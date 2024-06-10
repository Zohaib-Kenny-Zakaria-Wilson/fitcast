import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";

export default function Outfit() {
    return (
        <>
        <main className="flex justify-evenly">
            <ClothingItem link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
            <ClothingItem link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
            <ClothingItem link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
            <ClothingItem link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
        </main>
        </>
    )
}