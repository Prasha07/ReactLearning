import React from "react";
import ReactDOM from "react-dom/client";

// const h1 = React.createElement(
//   "h1",
//   { key: "h1", id: "title1", hello: "world" },
//   "Heading 1",
// );
// const h2 = React.createElement("h2", { key: "h2", id: "title2" }, "Heading 2");
// const div = React.createElement("div", { id: "container" }, [h1, h2]);
const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h1 className="class">Hello bro</h1>;
var xyz = 10;
const HeaderComponent = () => {
  return (
    <div>
      {console.log(xyz)}
      {/* <Title /> */}
      <h1>this is h1</h1>
      <h2>this is h2</h2>
    </div>
  );
};
root.render(<HeaderComponent />);
