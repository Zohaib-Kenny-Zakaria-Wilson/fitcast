import React from "react";
import ClothingDisplay from "./ClothingDisplay";

export default function Outfit() {
    return (
        <>
        <main className="flex justify-evenly">
            <ClothingDisplay link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
            <ClothingDisplay link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
            <ClothingDisplay link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
            <ClothingDisplay link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
        </main>
        </>
    )
}