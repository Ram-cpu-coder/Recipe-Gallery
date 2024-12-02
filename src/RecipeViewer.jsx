import React from "react";

const RecipeViewer = ({ dish, ingredients, process, image, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-opacity-60 bg-black">
      <img src={image} />
      <div>{dish}</div>
      <div>{process}</div>
      <div>{ingredients}</div>
      <button
        className=" border-red-600 rounded-lg bg-white text-black px-5 py-2 "
        onClick={() => closeModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default RecipeViewer;
