import React from "react";
import "./Scrollbar.css";

const IngredientsAndProcess = ({ item, closeModal }) => {
  const { name, ingredients, process, image } = item;

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="background-ingredients fixed inset-0 z-50 flex flex-col justify-center items-center min-h-[100vh] w-[100vw]"
    >
      <div className="bg-black opacity-60 inset-0 fixed flex flex-col justify-center items-center h-[auto] w-[100vw] text-white">
        <h1 className="mt-[100px] mb-[20px] font-bold text-4xl tracking-wide">
          {name}
        </h1>
        <div className="scrollbar flex lg:flex-row lg:justify-center md:flex-col flex-col items-center h-[auto] w-[auto] gap-2 border">
          <div className="p-4 flex flex-col items-center w-[auto] h-[auto] gap-3">
            <p className="font-semibold text-2xl mb-5">Ingredients:</p>
            <ul className="text-xl">
              {ingredients.map((item, index) => {
                return <li key={index}>• {item}</li>;
              })}
            </ul>
          </div>
          <div className="p-4 h-[auto] w-[400px] gap-3 flex flex-col text-center relative">
            <div className="font-semibold text-2xl mb-5">Let's Prepare Now</div>
            <div
              className="text-xl first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left italic"
            >
              {process}
            </div>
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
