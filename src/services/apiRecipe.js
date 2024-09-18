const API_URL = "https://api.spoonacular.com/recipes";
const API_KEY = "e58505d4951243288a30abf08fed45bb";

export async function getRecipes(query, cuisines = []) {
  let url = `${API_URL}/complexSearch?query=${query}`;

  if (cuisines.length > 0) {
    const cuisinesParam = cuisines.join(",");
    url += `&cuisine=${cuisinesParam}`;
  }
  console.log(cuisines);
  console.log(url);

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
