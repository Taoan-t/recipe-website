import { useState } from "react";
import Pagination from "./Pagination";
import RecipeItem from "./RecipeItem";
import styles from "./SearchResult.module.css";

function SearchResult({ recipes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="container">
      <h2 className="heading-3 center-text ">Recipes Found</h2>
      <ul className={styles["recipe-list"]}>
        {currentRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default SearchResult;
