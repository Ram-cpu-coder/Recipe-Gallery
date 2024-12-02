import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-white px-2 py-1 text-black rounded">
      <img src={props.items.image} className="h-[200px] w-[225px]" />
      <div>{props.items.dish}</div>
      <button className="border-0 rounded-lg bg-black text-white p-2">
        View Recipe
      </button>
    </div>
  );
};

export default RecipeCard;
