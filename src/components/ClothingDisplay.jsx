import React from "react";

function ClothingDisplay({ link, text }) {
  return (
    //NOTE: Going to have to change the sizing because this is simply a test
    //FIXME: When linking the image, make sure to use the correct path
    <main className="w-48 h-48 flex flex-col rounded-md bg-primary">
      <img
        className="w-full max-h-3/5 rounded-t-md"
        src={`${process.env.PUBLIC_URL}/assets/${link}`}
        alt=""
      />
      <div className="w-full h-2/5 flex justify-center items-center">
        <p className="text-dark-primary text-center">{text}</p>
      </div>
    </main>
  );
}

export default ClothingDisplay;
