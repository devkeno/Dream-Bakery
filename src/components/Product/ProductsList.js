import { getAllData, deleteData, softDelte } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const ProductsList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getAllData("products");
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await deleteData("products", id);
    getProducts();
  };
  const softDeleteProduct = async (id, product) => {
    await softDelte("products", id, product);
    getProducts();
  };

  const editProduct = (id) => {
    navigate(`../editProduct/${id}`);
  };
  let props = {
    editProduct,
    deleteProduct,
    softDeleteProduct,
    products,
  };

  return (
    <div className="product-meals">
      <div className="card">
        <h1 className="text-center py-3">Products</h1>

        <Product {...props} />
      </div>
    </div>
  );
};

export default ProductsList;
