import { useState } from "react";

function SearchFrom() {
  const [recipeName, setRecipeName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!recipeName) return;

    // search recipe from API

    setRecipeName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>👋 Welcome! Please enter the recipe name you want to search:</h3>

      <input
        type="text"
        placeholder="Recipe name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />

      <button>Search</button>
    </form>
  );
}

export default SearchFrom;
