import { useState } from "react";
import styles from "./SearchForm.module.css";

const cuisines = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

function SearchFrom({ onSearch }) {
  const [query, setQuery] = useState("");
  const [selectedCuisine, setselectedCuisine] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    onSearch(query, selectedCuisine);
    setQuery("");
    setselectedCuisine("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.content}>
        <span className={styles.label}>
          Search recipes by ingredients or dish name:
        </span>

        <input
          className={styles["search-box"]}
          type="text"
          placeholder="Recipe ingredient or name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />

        <span className={styles.label}>Filter results by cuisines:</span>

        <select
          className={styles["search-box"]}
          value={selectedCuisine}
          onChange={(e) => setselectedCuisine(e.target.value)}
        >
          <option value="">-- Any</option>
          {cuisines.map((cuisinesOption) => (
            <option key={cuisinesOption} value={cuisinesOption.toLowerCase()}>
              {cuisinesOption}
            </option>
          ))}
        </select>

        <button className={`${styles["search-button"]} button`}>Search</button>
      </div>
    </form>
  );
}

export default SearchFrom;
