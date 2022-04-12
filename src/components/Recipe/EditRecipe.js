import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editData, getRawMaterials, getAllData } from "../../services/api";
import RecipesForm from "../Forms/RecipesForm";

const EditRecipe = () => {
  const { id: idx } = useParams();
  const navigate = useNavigate();

  const initialValue = {
    id: "",
    rawMaterial: "",
    quantity: "",
    name: "",
    unit: "",
  };

  const [rawMaterials, setRawMaterials] = useState([]);
  const [recipe, setRecipe] = useState(initialValue);
  const { quantity, unit, name, rawMaterial } = recipe;

  useEffect(() => {
    GetAllRawMaterials();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllData("recipes", idx);
      setRecipe(response.data);
    };

    fetchData();
  }, [idx]);

  const GetAllRawMaterials = async () => {
    const response = await getRawMaterials("rawMaterials");
    setRawMaterials(response.data);
  };

  const onValueChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const editRecipeDetails = async (e) => {
    e.preventDefault();
    await editData("recipes", idx, recipe);
    navigate("/recipes");
  };
  let props = {
    actionType: editRecipeDetails,
    onValueChange,
    rawMaterials,
    rawMaterial,
    unit,
    quantity,
    name,
    buttonTitle: "Update",
  };

  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Edit recipe </h1>
        <RecipesForm {...props} />
      </div>
    </>
  );
};

export default EditRecipe;
