import RestaurantCard from "./pages/RestarauntCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [listOfRestaraunt, setListOfRestaraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaraunt, setFilteredRestaraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    // Debugging API response
    console.log("API Response:", json);
  
    // Verify the correct path for restaurants
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    if (restaurants) {
      setListOfRestaraunt(restaurants);
      setFilteredRestaraunt(restaurants);
    } else {
      console.error("Restaurants data not found in the API response.");
    }
  };
  

  return listOfRestaraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              
              const filteredList = listOfRestaraunt.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaraunt(filteredList); 
              console.log("Filtered List",filteredList)
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // Filter restaurants with avgRating > 4.5 from the original list
              const filteredList = listOfRestaraunt.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaraunt(filteredList); 
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restro-container">
        {filteredRestaraunt.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.cloudinaryImageId}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
