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
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      " Spaghetti",
      " Garlic",
      " Olive oil",
      " Chili flakes",
      " Parsley",
      " Salt",
    ],
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      " Spaghetti",
      " Garlic",
      " Olive oil",
      " Chili flakes",
      " Parsley",
      " Salt",
    ],
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      " Spaghetti",
      " Garlic",
      " Olive oil",
      " Chili flakes",
      " Parsley",
      " Salt",
    ],
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      " Spaghetti",
      " Garlic",
      " Olive oil",
      " Chili flakes",
      " Parsley",
      " Salt",
    ],
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      " Spaghetti",
      " Garlic",
      " Olive oil",
      " Chili flakes",
      " Parsley",
      " Salt",
    ],
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
  {
    dish: "Spaghetti Aglio e Olio",
    ingredients: [
      " Spaghetti",
      " Garlic",
      " Olive oil",
      " Chili flakes",
      " Parsley",
      " Salt",
    ],
    about: [
      "Spaghetti is one of the most well-known and widely consumed types of pasta. It is a long, thin, cylindrical noodle made from durum wheat semolina or flour. ",
    ],
    image: "./src/assets/spaghetti.jpg",
  },
];

const RecipeGallery = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 min-h-[100vh] w-[80%] pt-10">
        <h1 className="text-4xl font-bold">Recipe Gallery</h1>
        <div className="flex justify-center items-center gap-y-8 gap-x-5 flex-wrap">
          {recipes.map((item) => {
            return (
              <RecipeCard
                items={item}
                setShowRecipe={setShowRecipe}
                setSelectedRecipe={setSelectedRecipe}
              />
            );
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
