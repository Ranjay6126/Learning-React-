import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ===>>> react element is an object 

const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🙆🙆");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);






