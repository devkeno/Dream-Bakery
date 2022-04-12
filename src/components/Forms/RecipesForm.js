const RecipeForm = ({
  actionType,
  rawMaterials,
  quantity,
  onValueChange,
  name,
  buttonTitle,
  rawMaterial,
  unit,
}) => {
  const Units = [
    "Miligram",
    "Gram",
    "Kilogram",
    "Mililiter",
    "Deciliter",
    "Liter",
  ];

  return (
    <>
      <section className="meals product-form">
        <div className="card add-product">
          <form onSubmit={actionType}>
            <label htmlFor="">Recipe name</label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              required
            ></input>

            <label htmlFor="">Select raw material</label>
            <select
              value={rawMaterial}
              name="rawMaterial"
              onChange={(e) => onValueChange(e)}
              required
            >
              {rawMaterials &&
                rawMaterials.map((material) => {
                  return (
                    <option key={material.id} value={material.name}>
                      {material.name}
                    </option>
                  );
                })}
            </select>
            <label htmlFor="">Select unit</label>

            <select
              value={unit}
              name="unit"
              onChange={(e) => onValueChange(e)}
              required
            >
              {Units.map((unit, idx) => {
                return (
                  <option key={idx} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>

            <label htmlFor="">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => onValueChange(e)}
              placeholder="0"
              required
            />
            <div className="action-button">
              <button className="button-add">{buttonTitle}</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default RecipeForm;
