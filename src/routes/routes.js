import Home from "../pages/Home";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  EditRecipe,
  RecipesList,
  AddNewRecipe,
  ProductsList,
  AddNewProduct,
  EditProduct,
} from "../components";

const Routing = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("logged") ? setIsLogged(true) : setIsLogged(false);
  }, [isLogged]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/recipes"
            element={isLogged ? <RecipesList /> : <Home />}
            exact
          />
          <Route
            path="/addnewrecipe"
            element={isLogged ? <AddNewRecipe /> : <Home />}
            exact
          />
          <Route
            path="/editRecipe/:id"
            element={isLogged ? <EditRecipe /> : <Home />}
            exact
          />
          <Route
            path="/products"
            element={isLogged ? <ProductsList /> : <Home />}
            exact
          />
          <Route
            path="/addnewproduct"
            element={isLogged ? <AddNewProduct /> : <Home />}
            exact
          />
          <Route
            path="/editProduct/:id"
            element={isLogged ? <EditProduct /> : <Home />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
