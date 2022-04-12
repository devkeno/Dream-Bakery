import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addData, getAllData } from "../../services/api";
import ProductForm from "../Forms/ProductForm";

const AddNewProduct = () => {
  const initialValue = {
    id: uuidv4(),
    name: "",
    price: "",
    image: "",
    recipeId: "",
    recipeName: "",
    isActive: true,
  };
  const navigate = useNavigate();
  const [product, setProducts] = useState(initialValue);
  const { name, price, image, recipeId, recipeName, isActive } = product;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await getAllData("recipes");

    var data = response.data.filter(function (el) {
      return el.isActive === true;
    });
    setRecipes(data);
  };

  const onValueChange = (e) => {
    setProducts({ ...product, [e.target.name]: e.target.value });
  };

  const addProductDetails = async (e) => {
    e.preventDefault();
    await addData("products", product);
    navigate("/products");
  };
  let props = {
    actionType: addProductDetails,
    onValueChange,
    recipes,
    name,
    price,
    image,
    buttonTitle: "Add",
  };
  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Add product</h1>
        <ProductForm {...props} />
      </div>
    </>
  );
};

export default AddNewProduct;
