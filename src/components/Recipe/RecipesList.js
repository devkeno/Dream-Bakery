import { getAllData, deleteData, softDelte } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Recipe from "./Recipe";

const RecipesList = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await getAllData("recipes");
    setRecipes(response.data);
  };

  const deleteRecipe = async (id) => {
    await deleteData("recipes", id);
    getRecipes();
  };
  const softDeleteRecipe = async (id, recipe) => {
    await softDelte("recipes", id, recipe);
    getRecipes();
  };

  const editRecipe = (id) => {
    navigate(`../editRecipe/${id}`);
  };
  let props = {
    editRecipe,
    deleteRecipe,
    softDeleteRecipe,
    recipes,
  };

  return (
    <>
      <div className="meals">
        <div className="card">
          <h1 className="text-center py-3">Recipes</h1>
          <ul>
            <Recipe {...props} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipesList;
