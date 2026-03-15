import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  const { id } = params;
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    setRestaurant({
      id: 435,
      name: "Meghana Foods",
      area: "Kormangala",
      city: "Bengaluru",
      avgRating: "4.4 stars",
    });
    setMenu([
      { id: 2, name: "plain dosa" },
      { id: 3, name: "masala dosa" },
      { id: 4, name: "idli" },
    ]);
  }
  if (!restaurant) {
    return <Shimmer />;
  }

  console.log(Object.values(menu));
  return (
    <div className="menu">
      <div>
        <h1>RestaurantID : {id}</h1>
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menu).map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
