import React, { useState } from "react";
import ItemMini from "./ItemMini";
import ItemExpanded from "./ItemExpanded";

export default function ClothingItem({ link, text, color, textColor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with:", formData);
    closeModal();
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        <ItemMini link={link} text={text} color={color} textColor={textColor} />
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
          <button type="button" onClick={closeModal} className="modal-backdrop backdrop-blur-sm">
            Close
          </button>
        </dialog>
      )}
    </>
  );
}
