import { Link } from "react-router-dom";
import styles from "./RecipeItem.module.css";

function RecipeItem({ recipe }) {
  const { image, title } = recipe;
  return (
    <li>
      <Link to={`/recipe/${recipe.id}`} className={styles.link}>
        <div className={styles.item}>
          <img src={image} alt={title} className={styles["item-img"]} />

          <span className={styles.title}>{title}</span>
        </div>
      </Link>
    </li>
  );
}

export default RecipeItem;
