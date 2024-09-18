import { useState } from "react";
// import RecipeList from "./RecipeList";
// import { useNavigate } from "react-router-dom";

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
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    // search recipe from API
    onSearch(query, selectedCuisines);

    setQuery("");
    setSelectedCuisines("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>👋 Welcome! Please enter the recipe name you want to search:</h3>

      <input
        type="text"
        placeholder="Recipe name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label>Cuisine:</label>
      <select
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

      <button>Search</button>
    </form>
  );
}

export default SearchFrom;
