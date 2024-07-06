import React, { useState } from "react";
import ItemExpanded from "./ItemExpanded";
import Button from "../misc/Button";
import useAppContext from "../../context/useAppContext";
import { clothingItem } from "../../models/clothingItem";

export default function AddItem() {
  // State to toggle the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Used to update the clothing items in the context\
  const { setClothingItems, addItem } = useAppContext();

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

  const handleSubmit = (newItem) => {
    addItem(newItem);
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
            clothingItem={
              new clothingItem(
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
              )
            }
            onSubmit={handleSubmit}
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
