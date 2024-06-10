import React from "react";
import ClothingMiniDisplay from "./ClothingDisplayComponents/ClothingMiniDisplay";
import ClothingExpandedDisplay from "./ClothingDisplayComponents/ClothingExpandedDisplay";

function ClothingDisplay({ link, text, color, textColor }) {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <ClothingMiniDisplay
          link={link}
          text={text}
          color={color}
          textColor={textColor}
        />
      </button>
      <dialog id="my_modal_2" className="modal">
        <ClothingExpandedDisplay
          link={link}
          text={text}
          color={color}
          textColor={textColor}
        />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ClothingDisplay;
