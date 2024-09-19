const API_URL = "https://api.spoonacular.com/recipes";
const API_KEY = "f47b22d7e5264912a33d8b6af05fd04e";

export async function getRecipes(query, cuisine = "") {
  let url = `${API_URL}/complexSearch?query=${query}&number=100`;

  if (cuisine !== "") {
    url += `&cuisine=${cuisine}`;
  }

  const res = await fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  if (!res.ok) throw Error(`Failed getting recipes with query ${query}`);

  const data = await res.json();
  return data.results;
}

export async function getRecipesDetail(id) {
  const res = await fetch(
    `${API_URL}/${id}/information?includeNutrition=false`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );

  if (!res.ok) throw Error(`Failed getting recipe with id ${id}`);

  return await res.json();
}
