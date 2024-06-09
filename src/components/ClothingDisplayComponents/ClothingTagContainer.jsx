import React from "react";
import ClothingTag from "./ClothingTag";

export function ClothingTagContainer() {
  return (
    <div>
      <div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Sunny"}
          color={"#FFD700"}
          textColor={"#262626"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Sunny"}
          color={"#FFD700"}
          textColor={"#262626"}
        />
      </div>
      <div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Sunny"}
          color={"#FFD700"}
          textColor={"#262626"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Sunny"}
          color={"#FFD700"}
          textColor={"#262626"}
        />
      </div>
      <div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Sunny"}
          color={"#FFD700"}
          textColor={"#262626"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Sunny"}
          color={"#FFD700"}
          textColor={"#262626"}
        />
      </div>
    </div>
  );
}
