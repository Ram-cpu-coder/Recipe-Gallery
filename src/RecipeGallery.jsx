import { useState } from "react";
import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeViewer from "./RecipeViewer";
import "./Scrollbar.css";

const original_Recipes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Pancetta",
      "Parmesan cheese",
      "Black pepper",
      "Salt",
    ],
    process:
      "Cook the spaghetti in salted boiling water until al dente. In a bowl, whisk eggs and Parmesan cheese together. Cook pancetta in a pan until crispy. Combine the hot spaghetti with pancetta, remove from heat, and quickly mix in the egg mixture to create a creamy sauce. Season with black pepper and serve immediately.",
    image: "./assets/spa.png",
  },
  {
    name: "Pork Ragu",
    ingredients: [
      "Pork shoulder or pork butt",
      "Olive oil",
      "Onion",
      "Garlic",
      "Carrot",
      "Celery",
      "Crushed tomatoes",
      "Red wine",
      "Chicken or vegetable broth",
      "Tomato paste",
      "Dried oregano",
      "Dried thyme",
      "Red pepper flakes (optional)",
      "Salt",
      "Pepper",
      "Fresh parsley",
      "Grated Parmesan cheese",
    ],
    process:
      "Brown the pork in batches in olive oil until golden. Remove and set aside. In the same pot, sauté onion, carrot, and celery until softened. Add garlic and cook for another minute. Pour in red wine, scrape up browned bits, and reduce. Stir in crushed tomatoes, tomato paste, oregano, thyme, red pepper flakes, salt, and pepper. Return pork to the pot with broth and simmer for 2-3 hours until tender. Shred pork and return it to the sauce. Serve over pasta, polenta, or mashed potatoes, garnished with parsley and Parmesan.",
    image: "./assets/pork-ragu.png",
  },

  {
    name: "Chicken Curry",
    ingredients: [
      "Chicken",
      "Curry powder",
      "Coconut milk",
      "Onion",
      "Garlic",
      "Ginger",
      "Tomatoes",
      "Coriander",
      "Salt",
      "Oil",
    ],
    process:
      "Heat oil in a pan and sauté chopped onions, garlic, and ginger until fragrant. Add curry powder and cook for a minute. Add chicken pieces and cook until browned. Stir in chopped tomatoes and coconut milk, then simmer until the chicken is cooked through and the sauce thickens. Garnish with fresh coriander and serve with rice.",
    image: "./assets/chicken-curry.png",
  },
  {
    name: "Vegetable Stir-fry",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell peppers",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Sesame oil",
      "Cornstarch",
      "Salt",
      "Pepper",
    ],
    process:
      "Heat sesame oil in a wok and sauté minced garlic and ginger. Add chopped vegetables and stir-fry on high heat. Mix soy sauce and cornstarch with water to make a sauce, then pour it into the wok. Stir until the vegetables are coated and cooked but still crisp. Season with salt and pepper to taste, then serve.",
    image: "./assets/vegetable-fried.png",
  },
  {
    name: "Pancakes",
    ingredients: [
      "Flour",
      "Milk",
      "Eggs",
      "Sugar",
      "Baking powder",
      "Butter",
      "Salt",
    ],
    process:
      "In a bowl, mix flour, sugar, baking powder, and salt. In another bowl, whisk milk, eggs, and melted butter. Combine the wet and dry ingredients to form a smooth batter. Heat a non-stick pan and pour batter to form pancakes. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve with syrup or toppings of your choice.",
    image: "./assets/pancakes.png",
  },
  {
    name: "Beef Tacos",
    ingredients: [
      "Ground beef",
      "Taco seasoning",
      "Taco shells",
      "Lettuce",
      "Cheddar cheese",
      "Tomatoes",
      "Sour cream",
      "Salsa",
    ],
    process:
      "Cook ground beef in a pan until browned, then mix in taco seasoning with a little water and simmer until thickened. Fill taco shells with beef, shredded lettuce, diced tomatoes, grated cheese, and top with sour cream and salsa. Serve immediately.",
    image: "./assets/beef-tacos.png",
  },
  {
    name: "Caesar Salad",
    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
      "Chicken (optional)",
      "Lemon juice",
    ],
    process:
      "Chop romaine lettuce and mix it in a bowl with croutons and grated Parmesan cheese. Drizzle Caesar dressing over the salad and toss well. Add grilled chicken slices if desired, squeeze lemon juice on top, and serve.",
    image: "./assets/caesar-salad.png",
  },
  {
    name: "Vegetable Soup",
    ingredients: [
      "Carrots",
      "Celery",
      "Potatoes",
      "Tomatoes",
      "Vegetable broth",
      "Onions",
      "Garlic",
      "Salt",
      "Pepper",
      "Parsley",
    ],
    process:
      "Heat oil in a pot and sauté onions and garlic until softened. Add chopped carrots, celery, potatoes, and tomatoes, then pour in vegetable broth. Simmer until vegetables are tender, season with salt and pepper, and garnish with chopped parsley before serving.",
    image: "./assets/vegetable-soup.png",
  },
  {
    name: "Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
      "Salt",
    ],
    process:
      "Roll out pizza dough and spread a thin layer of tomato sauce over it. Top with slices of mozzarella cheese and fresh basil leaves. Drizzle with olive oil and sprinkle with salt. Bake in a preheated oven at 220°C (425°F) until the crust is golden and the cheese is melted.",
    image: "./assets/margherita.png",
  },
  {
    name: "Grilled Salmon",
    ingredients: [
      "Salmon fillets",
      "Lemon",
      "Olive oil",
      "Garlic",
      "Parsley",
      "Salt",
      "Pepper",
    ],
    process:
      "Brush salmon fillets with olive oil, minced garlic, salt, and pepper. Grill the fillets on medium heat for about 4-5 minutes on each side. Squeeze fresh lemon juice over the salmon, garnish with chopped parsley, and serve.",
    image: "./assets/grilled-salmon.png",
  },
  {
    name: "Fruit Smoothie",
    ingredients: [
      "Banana",
      "Strawberries",
      "Blueberries",
      "Yogurt",
      "Honey",
      "Milk",
      "Ice cubes",
    ],
    process:
      "Combine banana, strawberries, blueberries, yogurt, honey, milk, and ice cubes in a blender. Blend until smooth, pour into a glass, and serve immediately.",
    image: "./assets/fruit-smoothie.png",
  },
];

const RecipeGallery = () => {
  const [recipes, setRecipes] = useState(original_Recipes);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  const searchFunction = () => {
    const filteredItems = original_Recipes.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });
    setRecipes(filteredItems);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 min-h-[100vh] w-[80%] pt-10">
        <h1 className="text-4xl font-bold">Recipe Gallery</h1>

        <form className="min-w-[400px] mx-auto">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Dishes"
              required
              value={searchValue}
              onChange={handleOnChange}
            />
            <button
              type="button"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={searchFunction}
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-y-8 gap-x-5 flex-wrap">
          {recipes.map((item, index) => {
            return (
              <RecipeCard
                key={index}
                items={item}
                setShowRecipe={setShowRecipe}
                setSelectedRecipe={setSelectedRecipe}
              />
            );
          })}
        </div>
        {showRecipe ? (
          <RecipeViewer item={selectedRecipe} closeModal={setShowRecipe} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RecipeGallery;
