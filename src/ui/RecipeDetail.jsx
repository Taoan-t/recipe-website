import { useLoaderData } from "react-router-dom";
import { getRecipesDetail } from "../services/apiRecipe";

function RecipeDetail() {
  const recipeDetail = useLoaderData();
  console.log(recipeDetail);

  const {
    dairyFree,
    extendedIngredients,
    glutenFree,
    image,
    instructions,
    readyInMinutes,
    title,
    vegan,
    vegetarian,
  } = recipeDetail;

  return (
    <section>
      <div>
        <span>Recipe Detail</span>
      </div>
      <div>
        <div className="recipe">
          <img src={image} alt={title} />
          <div className="recipe-content">
            <div className="recipe-tags">
              {dairyFree ? <span>Dairy Free</span> : ""}
              {glutenFree ? <span>Gluten Free</span> : ""}
              {vegan ? <span>Vegan</span> : ""}
              {vegetarian ? <span>Vegetarian</span> : ""}
            </div>
            <p className="recipe-title">{title}</p>
            <div className="instructions">
              <h3>{readyInMinutes}</h3>
              <span>{instructions}</span>
            </div>
          </div>
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {extendedIngredients.map((each) => (
              <li key={each.id} className="ingredient-item">
                {`${each.amount} ${each.unit} ${each.name}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const recipeDetail = await getRecipesDetail(params.recipeId);
  return recipeDetail;
}

export default RecipeDetail;
