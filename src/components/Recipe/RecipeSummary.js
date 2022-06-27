import classes from "./RecipeSummary.module.css";

const RecipeSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>A RECIPE IS A STORY THAT ENDS WITH A GOOD MEAL</h2>
      <p>
        The food you eat can either be the safest and most powerful form of
        medice, or the slowest form of poison.
      </p>
      <p>Choose a wise stand and store all the cooking recipes here :)</p>
    </section>
  );
  };

export default RecipeSummary;
