import React from "react";

function ClothingDisplay({ link, text, color, textColor }) {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <main
          className={`flex flex-col w-48 h-48 rounded-md`}
          style={{ backgroundColor: color }}
        >
          <div className="w-full h-5/6">
            <img
              className="object-cover object-center w-full h-full object rounded-t-md"
              src={`${process.env.PUBLIC_URL}/assets/${link}`}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full h-2/5">
            <p className="text-center " style={{ color: textColor }}>
              {text}
            </p>
          </div>
        </main>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div
          className={`modal-box min-w-[75vw] min-h-[50vw] xl:min-w-[60vw] xl:min-h-[30vw] p-12 flex gap-12 text-primary-tw`}
          style={{ backgroundColor: color }}
        >
          <div className="flex w-full min-h-full">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={`${process.env.PUBLIC_URL}/assets/${link}`}
              alt=""
            />
          </div>
          <div className="flex flex-col w-full min-h-full px-6 py-6 rounded-lg bg-foreground">
            <div>
              <p className="text-xl font-medium xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw">
                {text}
              </p>
              <p className=" text-2xl text-[#7A7A7A] dark:text-dark-primary-tw">
                Shirt
              </p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ClothingDisplay;
