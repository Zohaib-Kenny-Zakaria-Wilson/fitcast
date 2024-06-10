import React from "react";
import ClothingTag from "./ClothingTag";

export function ClothingTagContainer() {
  return (
    <>
      <p>Great For</p>
    <div className="flex flex-col col-span-1 col-span-2 gap-4">
      <div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Cold Weather"}
          color={"#A4DEFF"}
          textColor={"#2477B2"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Hot Weather"}
          color={"#FFA4A4"}
          textColor={"#690A0A"}
        />
      </div><div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Low Wind"}
          color={"#FFD59D"}
          textColor={"#4D3206"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"High Wind"}
          color={"#FF9243"}
          textColor={"#4D3206"}
        />
      </div>
      <div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Low Rain %"}
          color={"#B6EEBC"}
          textColor={"#374151"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"High Rain %"}
          color={"#FFA4A4"}
          textColor={"#690A0A"}
        />
      </div>
      <div className="flex gap-4 w-fit h-fit">
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"Low Humidity"}
          color={"#EAB6EE"}
          textColor={"#6314C9"}
        />
        <ClothingTag
          onClick={() => {
            console.log("tag switch");
          }}
          text={"High Humidity"}
          color={"#FFB7E2"}
          textColor={"#B60D72"}
        />
      </div>
      
      
      </div>
      </>
  );
}
