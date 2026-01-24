const h1 = React.createElement("h1", { id: "title" }, "Heading 1");
const h2 = React.createElement("h2", { id: "title" }, "Heading 2");
const div = React.createElement("h1", { id: "container" }, [h1, h2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
