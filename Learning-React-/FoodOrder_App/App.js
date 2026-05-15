import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header(logo /nav items)
body- search bar / resto container >> resturant card (image/Name of restor/ start and rating ,// cuisine, delivery time)
footer  // copyrights, links, address, contact info     
*/

//Header
const Header = ()=>{
    return(
        <div className="header">

           <div className="logo">
    <img 
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" 
        alt="logo" 
        width="60" 
    />

 {/* css in js */}
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


//Resto card component

const RestaurantCard = (props) => {
    return (
        <div className="res-card">

            <img className="res-logo"
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                alt="pizza"
            />

            <h3>{props.resname}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 start</h4>
            <h4>38 Minutes</h4>

        </div>
    )
}



//Body

const Body = () => {

    return(
        <div className="body">
            <div className="Search">Search</div>

            <div className="res-container">

<RestaurantCard resname="Meghana Foods"
cuisine="Pizza,North Indian"/>
<RestaurantCard resname="Hungary Food"
cuisine="kfc,Punjab,India"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Pizza Hub"
cuisine="Pizza,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Pizza Hub"
cuisine="Pizza,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/>
<RestaurantCard resname="Nepali MOMO"
cuisine="MO:MO,Ktm, Nepal"/> 


                 
            </div>
        
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">

          <Header/>
          <Body/>
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)