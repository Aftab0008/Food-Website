import React, { useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";


function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    console.log("Selected Category:", category); // Debugging
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(newList);
    }
  }

  const { items } = useSelector((state) => state.cart);

  return (
    <div className="bg-slate-300 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-4 w-[100%] pt-8">
          {Categories.map((item) => (
            <div
              key={item.name}
              className="w-[120px] h-[120px] bg-white flex flex-col items-center gap-4 p-5 rounded-xl shadow-md justify-center text-[16px] font-semibold hover:bg-green-200 cursor-pointer transition-all duration-400"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center pt-9 pb-9">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] fixed bg-white top-0 right-0 shadow-xl p-4 transition-all duration-500 rounded ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-800 text-[18px] font-semibold">
            Order Items
          </span>
          <RxCross2
            className="w-[25px] h-[25px] text-green-800 text-[18px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        <div>
          {items?.map((item) => (
            <Card2
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>
      </div>
<div>
      <Footer />
      </div>
      
    </div>
  );
}

export default Home;
