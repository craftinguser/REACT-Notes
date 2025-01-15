import { useEffect, useState } from "react";
import { Shimmer } from "../Shimmer";
import { MENU_API, img } from "../../utils/constants";
import "../style/RestarauntMenu.css";
import { useParams } from "react-router";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        MENU_API + resId
      );
      const json = await data.json();
      console.log("Full API response:", json); 
      setResMenu(json.data); 
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Extract banner data
  const {
    name = "",
    cuisines = [],
    costForTwo = "",
    cloudinaryImageId = "",
  } = resMenu?.cards?.[2]?.card?.card?.info || {};

  // Extract menu items
  const menuItems =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
      (card) => card?.card?.card?.itemCards || []
    ) || [];

  console.log("Restaurant Menu Data:", resMenu); 
  console.log("Extracted Menu Items:", menuItems); 

  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {/* Banner Section */}
      <div className="menu-banner">
        <img
          className="menu-banner-image"
          alt="Restaurant Banner"
          src={`${img}/${cloudinaryImageId}`}
        />
        <h1 className="menu-title">{name}</h1>
        <p className="menu-details">
          {`${cuisines.join(", ")} - ₹${costForTwo / 100}`}
        </p>
      </div>

      {/* Menu List Section */}
      <div className="menu-list-container">
        <h3 className="menu-section-title">MENU</h3>
        {menuItems.length > 0 ? (
          <ul className="menu-list">
            {menuItems.map((item, index) => {
              const {
                id,
                name,
                price,
                isVeg,
                category,
                ratings,
              } = item?.card?.info || {};

              return (
                <li key={id || index} className="menu-item">
                  <div className="menu-item-info">
                    <h4 className="menu-item-name">
                      {name} {isVeg ? "🌱" : "🍖"}
                    </h4>
                    <p className="menu-item-category">{category}</p>
                    <p className="menu-item-price">₹{price / 100}</p>
                    {ratings && (
                      <p className="menu-item-rating">
                        ⭐ {ratings.aggregatedRating?.rating}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
