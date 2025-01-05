import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 * - Restaurant Container
 *    - Restaurant Cards
 *      -Img
 *      -name of Res, Star Rating, cusine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const Header = () => {
  return (
    <div className="header">
<div className="logo-container">
<img className="logo" src ="https://thumbs.dreamstime.com/b/fast-delivery-food-logo-vector-337616132.jpg"/>
<div className="nav-items">
<ul>
  <li>Home </li>
  <li>About us </li>
  <li>Contact Us </li>
  <li>Cart </li>
</ul>
</div>
</div>

    </div>
  );
};

const RestaurantCard = () =>{
  return (
    <div class= "res-card">
      <img className="res-logo" alt = "res-logo" src="https://b.zmtcdn.com/data/pictures/5/301605/53ac235ec782aba51d4b891fd51c7207.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"/>
      <h3>Warehouse Cafe</h3>
      <h4>North Indian, Italian, Asian, Kebab, Beverages</h4>
      <h4 className="rating">★★★★☆</h4>
    </div>
  );
};

const Body = () =>{
  return (
    <div className="body">
<div className="search">
Search
</div>
<div className="restro-container">
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
</div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <ul>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
          <li>Social Links</li>
        </ul>
        <div className="social_links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div>© Copyright reserved for HungerCaravan</div>
    </div>
  );
};


const AppLayout = () =>{
  return (
    <div className = "app">
<Header />
<Body />
<Footer />
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
