const EditProductForm = ({
  actionType,
  onValueChange,
  recipes,
  name,
  price,
  image,
  buttonTitle,
  recipeId,
}) => {
  return (
    <>
      <section className="meals product-form">
        <div className="card add-product">
          <form onSubmit={actionType}>
            <label htmlFor="">Product name</label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              required
            ></input>
            <label htmlFor="">Price</label>
            <input
              type="number"
              onChange={(e) => onValueChange(e)}
              name="price"
              value={price}
              required
            ></input>
            <label htmlFor="">Image</label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="image"
              value={image}
              required
            ></input>

            <label htmlFor="">Select recipe</label>

            <select
              value={recipeId}
              name="recipeId"
              onChange={(e) => onValueChange(e)}
              required
            >
              {recipes &&
                recipes.map((recipe) => {
                  return (
                    <option key={recipe.id} value={recipe.id}>
                      {recipe.name}
                    </option>
                  );
                })}
            </select>
            <div className="action-button">
              <button className="button-add" type="submit">
                {buttonTitle}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProductForm;
