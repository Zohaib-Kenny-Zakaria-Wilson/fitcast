import React from "react";

function ClothingDisplay({ link, text }) {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <main className="w-48 h-48 flex flex-col rounded-md bg-primary-tw">
          <img
            className="w-full max-h-3/5 rounded-t-md"
            src={`${process.env.PUBLIC_URL}/assets/${link}`}
            alt=""
          />
          <div className="w-full h-2/5 flex justify-center items-center">
            <p className="text-dark-primary-tw text-center">{text}</p>
          </div>
        </main>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ClothingDisplay;
