import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header(logo /nav items)
body- search bar / resto container >> resturant card 
footer  // copyrights, links, address, contact info     
*/

const Header = ()=>{
    return(
        <div className="header">

           <div className="logo">
    <img 
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" 
        alt="logo" 
        width="60" 
    />



  <h2 style={{ marginLeft: "10px", marginBottom: "42px" }}>
    Order🛒Food🍜 
    </h2>

</div>
            <div className="nav-itmes">

                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
} 

const AppLayout = () => {
    return (
        <div className="app">

          <Header/>
            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)