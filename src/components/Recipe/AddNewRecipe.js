import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addData, getRawMaterials } from "../../services/api";
import RecipesForm from "../Forms/RecipesForm";

const AddNewRecipe = () => {
  const initialValue = {
    id: uuidv4(),
    rawMaterial: "",
    quantity: "",
    name: "",
    unit: "",
    isActive: true,
  };
  const navigate = useNavigate();
  const [rawMaterials, setRawMaterials] = useState([]);
  const [recipe, setRecipe] = useState(initialValue);
  const { quantity, name } = recipe;

  useEffect(() => {
    GetAllRawMaterials();
  }, []);

  const GetAllRawMaterials = async () => {
    const response = await getRawMaterials("rawMaterials");
    setRawMaterials(response.data);
  };

  const onValueChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const addRecipeDetails = async (e) => {
    e.preventDefault();
    await addData("recipes", recipe);
    navigate("/recipes");
  };
  let props = {
    actionType: addRecipeDetails,
    onValueChange,
    rawMaterials,
    quantity,
    name,
    buttonTitle: "Add",
  };

  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Add new recipe</h1>
        <RecipesForm {...props} />
      </div>
    </>
  );
};
export default AddNewRecipe;
