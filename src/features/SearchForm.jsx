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
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    onSearch(query, selectedCuisines);
    setQuery("");
    setSelectedCuisines("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.description}>
        Search recipes by ingredients or dish name:
      </span>
      <div className={styles.content}>
        <input
          className={styles["search-box"]}
          type="text"
          placeholder="Recipe ingredient or name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <span className={styles.description}>Search recipes by cuisine:</span>
        <select
          className={styles["search-box"]}
          value={selectedCuisines}
          onChange={(e) =>
            setSelectedCuisines(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
          multiple
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
