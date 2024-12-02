import { useState } from "react";
import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeViewer from "./RecipeViewer";

const recipes = [
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive oil",
      "Chili flakes",
      "Parsley",
      "Salt",
    ],
    process: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté minced garlic in olive oil with chili flakes.",
      "Toss cooked spaghetti into the pan.",
      "Add chopped parsley and mix.",
      "Serve hot.",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
];

const RecipeGallery = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({
    dish: "",
    ingredients: "",
    process: "",
    image: "",
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 min-h-[100vh] w-[80%] pt-10">
        <h1 className="text-4xl font-bold">Recipe Gallery</h1>
        <div className="flex justify-center items-center gap-y-8 gap-x-5 flex-wrap">
          {recipes.map((item) => {
            return <RecipeCard items={item} setShowRecipe={setShowRecipe} />;
          })}
        </div>
        {showRecipe ? (
          <RecipeViewer {...selectedRecipe} closeModal={setShowRecipe} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RecipeGallery;
