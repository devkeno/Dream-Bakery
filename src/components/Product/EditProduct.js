import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editData, getAllData } from "../../services/api";
import { v4 as uuidv4 } from "uuid";
import ProductForm from "../Forms/ProductForm";

const EditProduct = () => {
  const { id: idx } = useParams();
  const navigate = useNavigate();

  const initialValue = {
    id: uuidv4(),
    name: "",
    price: "",
    image: "",
    recipeId: "",
    isActive: true,
  };
  const [product, setProducts] = useState(initialValue);
  const { name, price, image, recipeId, isActive } = product;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await getAllData("recipes");
    setRecipes(response.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllData("products", idx);
      setProducts(response.data);
    };

    fetchData();
  }, [idx]);

  const onValueChange = (e) => {
    setProducts({ ...product, [e.target.name]: e.target.value });
  };

  const editProductDetails = async (e) => {
    e.preventDefault();
    await editData("products", idx, product);
    navigate("/products");
  };
  let props = {
    actionType: editProductDetails,
    onValueChange,
    recipes,
    recipeId,
    name,
    price,
    image,
    isActive,
    buttonTitle: "Update",
  };
  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Edit product </h1>
        <ProductForm {...props} />
      </div>
    </>
  );
};
export default EditProduct;
