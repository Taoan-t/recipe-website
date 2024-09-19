import { useLoaderData } from "react-router-dom";
import { getRecipesDetail } from "../services/apiRecipe";
import {
  ClockIcon,
  CheckIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import styles from "./RecipeDetail.module.css";

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

  let instructionSteps = [];

  if (instructions.includes("<li>")) {
    instructionSteps = instructions
      .match(/<li>(.*?)<\/li>/g)
      .map((step) => step.replace(/<\/?li>/g, ""));
  } else {
    instructionSteps = instructions
      .split("\n")
      .filter((step) => step.trim() !== "");
  }

  return (
    <section className={styles["section-detail"]}>
      <div className="container center-text">
        <span className={styles["section-title"]}>Recipe Detail</span>
      </div>

      <div className="container grid grid--2-cols">
        <div className={styles.recipe}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.content}>
            <div className={styles.tags}>
              {dairyFree ? (
                <span className={`${styles.tag} ${styles["tag-dairyfree"]}`}>
                  Dairy Free
                </span>
              ) : (
                ""
              )}
              {glutenFree ? (
                <span className={`${styles.tag} ${styles["tag-glutenfree"]}`}>
                  Gluten Free
                </span>
              ) : (
                ""
              )}
              {vegan ? (
                <span className={`${styles.tag} ${styles["tag-vegan"]}`}>
                  Vegan
                </span>
              ) : (
                ""
              )}
              {vegetarian ? (
                <span className={`${styles.tag} ${styles["tag-vegetarian"]}`}>
                  Vegetarian
                </span>
              ) : (
                ""
              )}
            </div>

            <p className={styles["recipe-title"]}>{title}</p>

            <ul className={styles.instructions}>
              <li className={styles["instruction-step"]}>
                <ClockIcon className={styles.icon} />
                <span className={styles.duration}>
                  <strong>{readyInMinutes}</strong> mins
                </span>
              </li>
              {instructionSteps.map((step, index) => (
                <li className={styles["instruction-step"]} key={index}>
                  <ArrowRightCircleIcon className={styles.icon} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ingredients">
          <h3 className="heading-3">Ingredients</h3>
          <ul className={styles["ingredients-list"]}>
            {extendedIngredients.map((each) => (
              <li key={each.id} className={styles["ingredient-item"]}>
                <CheckIcon className={styles.icon} />
                <span>
                  {`${each.amount} ${each.unit}`} <strong>{each.name}</strong>
                </span>
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

// test:  recipe/634629
