import React from "react";
import "./Scrollbar.css";

const IngredientsAndProcess = ({ item, closeModal }) => {
  const { name, ingredients, process, image } = item;

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="background-ingredients fixed inset-0 z-50 flex flex-col justify-center items-center min-h-[100vh] w-[100vw]"
    >
      <div className="bg-white opacity-80 inset-0 fixed flex flex-col justify-center items-center min-h-[100vh] w-[100vw] text-black">
        <h1 className="mb-[100px] font-bold text-4xl tracking-wide">{name}</h1>
        <div className="flex justify-center items-start h-[auto]">
          <div className="flex flex-col items-start w-[350px] gap-3">
            <p className="font-semibold text-2xl">Ingredients:</p>
            <ul className="text-xl">
              {ingredients.map((item, index) => {
                return <li key={index}>• {item}</li>;
              })}
            </ul>
          </div>
          <div className="w-[400px] gap-3 flex flex-col text-center relative">
            <div className="font-semibold text-2xl">Let's Prepare Now</div>
            <div className="text-xl">{process}</div>
            <button
              className=" fixed top-10 right-10 rounded-lg bg-red-600 hover:bg-red-400 active:bg-red-500 focus:outline-none focus:ring focus:ring-violet-300 text-white text-xl px-4 py-2 "
              onClick={() => closeModal(false)}
            >
              🗙
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsAndProcess;
