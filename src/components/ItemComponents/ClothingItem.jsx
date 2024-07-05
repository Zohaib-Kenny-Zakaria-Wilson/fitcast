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
  const { editItem, updateClothingItemsInOutfits } = useAppContext();

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
  const handleEditItem = (updatedItem) => {
    // Update the clothing items in the context by mapping over the items and replacing the one that was edited

    editItem(updatedItem);
    // Update the clothing items in the outfits
    updateClothingItemsInOutfits(updatedItem);
    // Close the modal
    closeModal();
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        <ItemMini clothingItem={clothingItem} />
      </button>
      {isModalOpen && (
        <dialog open className="modal">
          <ItemExpanded
            clothingItem={clothingItem}
            onSubmit={handleEditItem}
            buttonText="Save Changes"
          />
          <button
            type="button"
            onClick={closeModal}
            className="modal-backdrop backdrop-blur-sm"
          >
            Close
          </button>
        </dialog>
      )}
    </>
  );
}
