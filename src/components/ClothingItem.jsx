import React from "react";
import ItemMini from "./ItemComponents/ItemMini";
import ItemExpanded from "./ItemComponents/ItemExpanded";

export default function ClothingItem({ link, text, color, textColor }) {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <ItemMini
          link={link}
          text={text}
          color={color}
          textColor={textColor}
        />
      </button>
      <dialog id="my_modal_2" className="modal">
        <ItemExpanded
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

