import { useState, useEffect } from "react";
import Login from "./Login";
import "../styles/styles.css";
import meals from "../assets/meals.jpg";
import ProductsList from "../components/Product/ProductsList";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("logged") ? setIsLogged(true) : setIsLogged(false);
  }, [isLogged]);

  return (
    <>
      {isLogged ? (
        <div className="tojeto">
          <div className="main-image">
            <img src={meals} alt="foodd" />
          </div>

          <section className="summary">
            <h2>Welcome to Dream Bakery</h2>
            <p>
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
          </section>
          <section className="">
            <ProductsList />
          </section>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
