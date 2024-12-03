import React from "react";
import { useState } from "react";
import IngredientsAndProcess from "./IngredientsAndProcess";

const RecipeViewer = ({ item, closeModal }) => {
  const { name, ingredients, process, image } = item;

  const [showIngredientsAndProcess, setShowIngredientsAndProcess] =
    useState(false);
  const showIngredientsAndProcessFunction = () => {
    setShowIngredientsAndProcess(true);
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center min-h-[100vh] w-[100vw] bg-white text-black">
      <div className="flex justify-center items-centertext-black p-5 min-h-[100%] w-[100vw] gap-5 rounded-lg  border border-black">
        <div className="flex flex-col justify-center items-center bg-white text-black rounded-lg">
          <img
            src={image}
            className="h-[280px] w-[400px] object-fill rounded-lg"
          />
          <div className="font-bold text-3xl italic">{name}</div>
          <button
            className="rounded-lg mt-5 bg-green-500 text-white px-5 py-2 "
            onClick={showIngredientsAndProcessFunction}
          >
            Jump To Recipe
          </button>
          <button
            className=" fixed top-10 right-10 rounded-lg bg-red-600 hover:bg-red-400 active:bg-red-500 focus:outline-none focus:ring focus:ring-violet-300 text-white text-xl px-4 py-2 "
            onClick={() => closeModal(false)}
          >
            🗙
          </button>
        </div>

        {showIngredientsAndProcess ? (
          <IngredientsAndProcess item={item} closeModal={closeModal} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RecipeViewer;
