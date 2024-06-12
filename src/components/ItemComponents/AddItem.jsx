import React, { useState } from "react";
import ItemExpanded from "./ItemExpanded";
import Button from "../misc/Button";
import useAppContext from "../../context/useAppContext";
import { clothingItem } from "../models/clothingItem";


export default function AddItem() {
    // State to toggle the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
    // Used to update the clothing items in the context\
  const { clothingItems, setClothingItems } = useAppContext();

  /**
   * Opens the modal
   *
   * @returns {void}
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the modal
   * 
   * @returns {void}
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getNextId = () => {
    const ids = clothingItems.map(item => parseInt(item.id, 10)).filter(id => !isNaN(id));
    return ids.length ? Math.max(...ids) + 1 : 1;
  };

  const addItem = (newItem) => {
    newItem.id = getNextId().toString();  // Ensure the ID is a string
    setClothingItems((curr) => [newItem, ...curr]);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>
        <Button children={"Add Item"} />
      </button>
      {isModalOpen && (
        <dialog open className="modal">
          <ItemExpanded
            clothingItem={new clothingItem("", "", "", "#FFFFFF", "#000000", "", "", false, false, false, false, false, false, false, false)}
            onSubmit={addItem}
            buttonText={"Add Item"}
          />
          <button
            formMethod="dialog"
            onClick={closeModal}
            className="modal-backdrop backdrop-blur-sm"
          />
        </dialog>
      )}
    </>
  );
}
