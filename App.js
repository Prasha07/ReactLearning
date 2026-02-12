import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s"
    />
  </a>
);
var xyz = 10;
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c7ff6ae1-b2f8-4e4f-889a-d57829d26296_5937.jpg",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/cf995759-2112-414d-985d-22f85eb61a7f_272031.jpg",
    name: "Baskin Robbins",
    cuisines: ["Ice cream", "Cake"],
    rating: 4.4,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c7ff6ae1-b2f8-4e4f-889a-d57829d26296_5937.jpg",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/cf995759-2112-414d-985d-22f85eb61a7f_272031.jpg",
    name: "Baskin Robbins",
    cuisines: ["Ice cream", "Cake"],
    rating: 4.4,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c7ff6ae1-b2f8-4e4f-889a-d57829d26296_5937.jpg",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/cf995759-2112-414d-985d-22f85eb61a7f_272031.jpg",
    name: "Baskin Robbins",
    cuisines: ["Ice cream", "Cake"],
    rating: 4.4,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c7ff6ae1-b2f8-4e4f-889a-d57829d26296_5937.jpg",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/cf995759-2112-414d-985d-22f85eb61a7f_272031.jpg",
    name: "Baskin Robbins",
    cuisines: ["Ice cream", "Cake"],
    rating: 4.4,
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c7ff6ae1-b2f8-4e4f-889a-d57829d26296_5937.jpg",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
  },
];
// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <img src={props.restaurant.image} />
//       <h2>{props.restaurant.name}</h2>
//       <h3>{props.restaurant.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.rating} stars</h4>
//     </div>
//   );
// };

const RestaurantCard = ({ image, cuisines, name, rating }) => {
  // const { image, cuisines, name, rating } = restaurant;
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant, index) => {
        return <RestaurantCard {...restaurant} key={"a" + index} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const Jsx = (
  <div style={{ backgroundColor: "red" }}>
    <h1>hii</h1> <h2>hllo</h2>
  </div>
);

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
root.render(<AppLayout />);
