import React from "react";
import ItemExpanded from "./ItemExpanded";
import Button from "../misc/Button";

export default function ClothingItem({ link, text, color, textColor }) {
  //TODO: Set up state for clothing item

  return (
    <>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <Button text="Add Item" />
      </button>
      <dialog id="my_modal_2" className="modal">
        <ItemExpanded
          link={link}
          text={text}
          color={color}
          textColor={textColor}
          onClick={() => {console.log("Add Item")}}
        />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

