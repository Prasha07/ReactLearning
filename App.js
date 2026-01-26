import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement(
  "h1",
  { key: "h1", id: "title1", hello: "world" },
  "Heading 1",
);
const h2 = React.createElement("h2", { key: "h2", id: "title2" }, "Heading 2");
const div = React.createElement("div", { key: "di", id: "container" }, [
  h1,
  h2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
