import RestaurantCard from "./RestarauntCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";

// State Variable - Hooks - pre built function 
 

// using id for keys is best practice, dont use indexes for keys
const Body = () => {
    const [ listOfRestaraunt, setListOfRestaraunt] = useState(resList);

useEffect(()=>{
  fetchData();
    console.log("Effect state called")
}, []);

const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  console.log("api",json);
}

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className ="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaraunt.filter(
            (res) => res.avgRating >4.5);
          setListOfRestaraunt(filteredList)
            console.log("Button Clicked" , filteredList)
        }}>Top Rated Restarurant</button>
      </div>
      <div className="restro-container">
        {listOfRestaraunt.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
