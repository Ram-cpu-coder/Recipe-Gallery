import React from "react";

const RecipeViewer = ({ dish, ingredients, about, image, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-opacity-70 bg-black">
      <div className="flex flex-col justify-center items-center bg-white h-[auto] w-[auto] text-black p-7 gap-5 rounded-lg">
        <img
          src={image}
          className="h-[280px] w-[400px] object-fill rounded-lg"
        />
        <div className="font-bold">{dish}</div>
        <div className="w-[400px] text-center">{about}</div>
        <div className="flex flex-col items-start w-[350px] gap-3">
          <p className="font-semibold">Ingredients:</p>
          <ul>
            {ingredients.map((item, index) => {
              return <li key={index}>• {item}</li>;
            })}
          </ul>
        </div>
        <button
          className="rounded-lg bg-red-500 text-white px-5 py-2 "
          onClick={() => closeModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipeViewer;
