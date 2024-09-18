import SearchFrom from "../features/SearchFrom";
import SearchResult from "../features/SearchResult";
import { getRecipes } from "../services/apiRecipe";
import { useState } from "react";
function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query, selectedCuisines) => {
    const result = await getRecipes(query, selectedCuisines);
    setRecipes(result);
  };

  return (
    <div>
      <h1>
        The best recipe.
        <br />
        <span>A slogan</span>
      </h1>
      <SearchFrom onSearch={handleSearch} />
      <SearchResult recipes={recipes} />
    </div>
  );
}

export default Home;
