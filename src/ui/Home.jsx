import SearchFrom from "../features/SearchForm";
import SearchResult from "../features/SearchResult";
import { getRecipes } from "../services/apiRecipe";
import { useState } from "react";
import styles from "./Home.module.css";
import img from "../assets/home-3.jpg";

function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query, selectedCuisine) => {
    const result = await getRecipes(query, selectedCuisine);
    if (result.length != 0) {
      setRecipes(result);
    } else {
      alert(
        `No result found for the dish: "${query}" in the "${selectedCuisine}" cuisine category.`
      );
    }
  };

  const handleReSearch = () => {
    setRecipes([]);
  };

  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles["content-left"]}>
          <h1 className="heading-1">
            Discover Delicious Recipes for Every Occasion
          </h1>
          <p className={styles.description}>
            Explore a world of flavors with easy-to-follow recipes, from quick
            weeknight meals to impressive dishes for special gatherings.
            Let&apos;s make cooking simple and fun!
          </p>
          <SearchFrom onSearch={handleSearch} />
          <button
            className={`${styles["re-search-button"]} button`}
            onClick={handleReSearch}
            disabled={recipes.length === 0}
          >
            Re-search
          </button>
        </div>
        <div className={styles["content-right"]}>
          <img src={img} alt="great meal" />
        </div>
      </div>
      {recipes.length > 0 && <SearchResult recipes={recipes} />}
    </section>
  );
}

export default Home;
