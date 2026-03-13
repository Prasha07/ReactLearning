import { useEffect, useState } from "react";
import { Constants } from "./Constants";
import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
  );
}
const Body = () => {
  let searchtxt;
  let [allRestaurants, setAllrestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  // let [restaurants, setRestaurants] = useState([]);
  let [filteredrestaurants, setFilteredrestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    // );
    // const json = await data.json();
    // console.log(json);
    setTimeout(() => {
      // setRestaurants(restaurantList);
      setAllrestaurants(restaurantList);
      setFilteredrestaurants(restaurantList);
    }, 2000);
    // setRestaurants(restaurantList);
    // setAllrestaurants(restaurantList);
    // setFilteredrestaurants(restaurantList);
  }
  if (!allRestaurants) return null;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurants.map((restaurant, index) => {
          return (
            <Link to={"restaurant/" + 2} key={"a" + index}>
              <RestaurantCard {...restaurant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
