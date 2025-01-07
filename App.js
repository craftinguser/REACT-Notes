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



const resList = [
  {
    name: "Eleved",
    cuisines: ["Cafe", "Coffee", "Tea", "Continental", "Healthy Food", "Modern Indian", "South Indian", "Juices"],
    avgRating: 4.3,
    costForTwo: "₹1,800 for two",
    deliveryTime: "Not Available",
    img: "https://b.zmtcdn.com/data/pictures/4/20851364/e8d9044f2101c7f19026361025858abc_featured_v2.jpg"
  },
  {
    name: "The Blue Door Cafe",
    cuisines: ["European", "Cafe", "Italian"],
    avgRating: 4.5,
    costForTwo: "₹2,000 for two",
    deliveryTime: "30 mins",
    img: "https://lh3.googleusercontent.com/p/AF1QipMufcRMw4ft6r0e36sx1n9G7oFL0tKjf2pxGqc8=s1360-w1360-h1020"
  },
  {
    name: "Indian Accent",
    cuisines: ["Modern Indian", "Fusion"],
    avgRating: 4.9,
    costForTwo: "₹5,000 for two",
    deliveryTime: "Not Available",
    img: "https://lh3.googleusercontent.com/p/AF1QipOdHF1ZPxZjWXicxkMfww8e5zFD26sCWWoeB7Af=s1360-w1360-h1020"
  },
  {
    name: "Olive Bar & Kitchen",
    cuisines: ["Mediterranean", "Italian", "European"],
    avgRating: 4.6,
    costForTwo: "₹3,000 for two",
    deliveryTime: "45 mins",
    img: "https://lh3.googleusercontent.com/p/AF1QipNOmCSeJ3jO_r_jtoF_2NzKWOiL-E4MNc2IXXE-=s1360-w1360-h1020"
  },
  {
    name: "Bukhara",
    cuisines: ["North Indian", "Mughlai"],
    avgRating: 4.8,
    costForTwo: "₹6,500 for two",
    deliveryTime: "1 hour",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfzyP8_R3UUHGAY_nTsVYv0LNAlcsLBwysg&s"
  },
  {
    name: "Perch Wine & Coffee Bar",
    cuisines: ["European", "Italian"],
    avgRating: 4.4,
    costForTwo: "₹2,500 for two",
    deliveryTime: "Not Available",
    img: "https://assets.cntraveller.in/photos/60ba1bf40f3a5367ec9fe484/master/pass/Perch-Mumbai_Bandra.jpg"
  },
  {
    name: "Pind Balluchi",
    cuisines: ["North Indian", "Punjabi"],
    avgRating: 4.2,
    costForTwo: "₹1,200 for two",
    deliveryTime: "25 mins",
    img: "https://b.zmtcdn.com/data/pictures/4/2504/59618a82e12f1e5692dc09a65d3b333d.jpg"
  },
  {
    name: "The Big Chill Cafe",
    cuisines: ["Italian", "Desserts"],
    avgRating: 4.7,
    costForTwo: "₹2,000 for two",
    deliveryTime: "20 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtVmjIb17kxtjX2RnDTz5AOx93C5VCcXSnA&s"
  },
  {
    name: "Diggin",
    cuisines: ["Italian", "Cafe"],
    avgRating: 4.5,
    costForTwo: "₹1,500 for two",
    deliveryTime: "40 mins",
    img: "https://b.zmtcdn.com/data/pictures/6/20357116/9ae2bcb7870edc15bb514b35078b73d5_featured_v2.jpg"
  },
  {
    name: "Sagar Ratna",
    cuisines: ["South Indian", "North Indian"],
    avgRating: 4.1,
    costForTwo: "₹1,000 for two",
    deliveryTime: "15 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDUrtGfpIzYNel8reU7K1EOFJmDcu09aw0A&s"
  },
  {
    name: "Carnatic Cafe",
    cuisines: ["South Indian"],
    avgRating: 4.3,
    costForTwo: "₹800 for two",
    deliveryTime: "30 mins",
    img: "https://content.jdmagicbox.com/v2/comp/delhi/z5/011pxx11.xx11.200629194248.b7z5/catalogue/carnatic-cafe-lodhi-road-delhi-restaurants-ocm9tk0dew.jpg?fit=around%7C350:350&crop=350:350;*,*"
  },
  {
    name: "Cafe Delhi Heights",
    cuisines: ["Continental", "North Indian", "Cafe"],
    avgRating: 4.3,
    costForTwo: "₹1,800 for two",
    deliveryTime: "50 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TdTlmJkAQx7E2t7G8NKwxi0Y9rLvgNOzDA&s"
  }
];


const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={resData.img} />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(', ')}</h4> {/* Join the cuisines array into a string */}
      <h4 className="rating">{resData.avgRating} stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.deliveryTime}</h4>
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
<RestaurantCard  resData ={resList[0]}/>
<RestaurantCard  resData ={resList[1]}/>
<RestaurantCard  resData ={resList[2]}/>
<RestaurantCard  resData ={resList[3]}/>
<RestaurantCard  resData ={resList[4]}/>
<RestaurantCard  resData ={resList[5]}/>
<RestaurantCard  resData ={resList[6]}/>
<RestaurantCard  resData ={resList[7]}/>
<RestaurantCard  resData ={resList[8]}/>
<RestaurantCard  resData ={resList[9]}/>
<RestaurantCard  resData ={resList[10]}/>
<RestaurantCard  resData ={resList[11]}/>


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
