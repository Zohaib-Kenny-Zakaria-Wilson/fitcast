import React, { useState } from "react";
import ItemExpanded from "./ItemExpanded";
import Button from "../misc/Button";
import useAppContext from "../../context/useAppContext";
import { clothingItem } from "../models/clothingItem";


export default function AddItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clothingItems, setClothingItems } = useAppContext();
  const link = "tshirt.png";
  const text = "";
  const color = "";
  const textColor = "";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    const newItem = new clothingItem("1", "1", formData.text, "Red", "Black", formData.selectedOption, "tshirt.png", true, false, true, false, true, false, true, false);

    setClothingItems((curr) => [newItem, ...curr]);

    console.log("Form submitted with:", newItem);
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
            link={link}
            parentText={text}
            color={color}
            textColor={textColor}
            onSubmit={handleFormSubmit}
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
