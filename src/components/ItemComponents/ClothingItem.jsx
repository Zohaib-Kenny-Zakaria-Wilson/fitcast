import React, { useState } from "react";
import ItemMini from "./ItemMini";
import ItemExpanded from "./ItemExpanded";
import useAppContext from "../../context/useAppContext";

/**
 * @param {clothingItem} The clothing item to display in the wardrobe
 */
export default function ClothingItem({ clothingItem }) {
  // State to toggle the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Used to update the clothing items in the context
  const { setClothingItems } = useAppContext();

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

  /**
   * Edits the item in the wardrobe and updates the context
   * @param {clothingItem} newClothingItem The new clothing item to replace the old one
   * 
   * @returns {void}
   */
  const editItem = (updatedItem) => {
    // Update the clothing items in the context by mapping over the items and replacing the one that was edited
    setClothingItems((prevItems) =>
      prevItems.map((item) =>
        item.id === clothingItem.id ? updatedItem : item
      )
    );
    // Close the modal
    closeModal();
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        <ItemMini link={clothingItem.image} text={clothingItem.name} color={clothingItem.dominantColor} textColor={clothingItem.contrastColor} />
      </button>
      {isModalOpen && (
        <dialog open className="modal">
          <ItemExpanded
            clothingItem={clothingItem}
            onSubmit={editItem}
            buttonText="Save Changes"
          />
          <button type="button" onClick={closeModal} className="modal-backdrop backdrop-blur-sm">
            Close
          </button>
        </dialog>
      )}
    </>
  );
}
