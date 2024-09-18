import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  const { image, title } = recipe;
  return (
    <li>
      <Link to={`/recipe/${recipe.id}`}>
        <img src={image} alt={title} />
        <div>
          <p>{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default RecipeItem;
