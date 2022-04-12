const Recipe = ({ editRecipe, deleteRecipe, softDeleteRecipe, recipes }) => {
  return (
    <>
      {recipes &&
        recipes.map((recipe) =>
          recipe.isActive ? (
            <div key={recipe.id}>
              <li className="recipe-item">
                <div>
                  <h3>{recipe.name}</h3>

                  <div className="price">
                    Quantity: {recipe.quantity} | {recipe.unit}
                  </div>
                </div>
                <div>
                  <div className="form">
                    <button
                      className="button-edit"
                      onClick={() => editRecipe(recipe.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="button-delete"
                      onClick={() => softDeleteRecipe(recipe.id, recipe)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ) : null
        )}
    </>
  );
};

export default Recipe;
