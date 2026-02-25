import { useState } from "react";
import { Constants } from "./Constants";
import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.includes(searchText),
  );
}
const Body = () => {
  let searchtxt;

  //   Both are exactly same as default value not given
  let [searchText, setSearchText] = useState("");
  let [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter data on whatever is being searched
            // and then update the restaurants(as it will contain only searched results)
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard {...restaurant} key={"a" + index} />;
        })}
      </div>
    </>
  );
};
export default Body;
