import { useState, useEffect } from "react";
import { CoffeeItem, CoffeeItemProps } from "./sub-components/CoffeeItem";

const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const changeTab = (value: string) => {
    setActiveTab(value);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <main className="custom-container">
      <header className="flex lg:w-3/4 w-full  xl:w-1/2 mx-auto flex-col justify-center items-center">
        <h1 className="text-3xl mb-2">Our Collection</h1>
        <p className="text-base text-center text-[#6F757C]">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <nav className="w-full flex items-center justify-center gap-3 mb-6 mt-5">
          <button
            className={`btn ${activeTab === "all" && "active-btn"}`}
            onClick={() => changeTab("all")}
          >
            All Products
          </button>
          <button
            className={`btn ${activeTab === "available" && "active-btn"}`}
            onClick={() => changeTab("available")}
          >
            Available Now
          </button>
        </nav>
      </header>

      <section className="items_container">
        {products
          .filter((product: CoffeeItemProps) => {
            if (activeTab === "all") return true;
            return product.available === true;
          })
          .map((product: CoffeeItemProps) => (
            <CoffeeItem key={product.id} {...product} />
          ))}
      </section>
    </main>
  );
};

export default Main;
