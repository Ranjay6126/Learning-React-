import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ===>>> react element is an object 

const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🙆🙆");

console.log(heading);

/*
JSX:=> it is not html in js. It is look like html syntex

// JSX (transpiled before it reaches the js ) === PARCEL == Babel------------>>>>( babel /  it js compiler )

const heading = <h1> Hello react using jsx </h1>; */ 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


// React functional component //

const HeadingComponent = () =>{
    return <h1> Hello react using functional component </h1>
}




