import { useState } from "react";
import RecipeGallery from "./RecipeGallery";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="scrollbar bg-black text-white flex justify-center items-center">
      <RecipeGallery />
    </div>
  );
}

export default App;
