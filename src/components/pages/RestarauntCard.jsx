import {img} from "../../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    info: {
      name,
      cloudinaryImageId,
      cuisines,
      costForTwo,
      sla: { slaString: deliveryTime },
      avgRating,
    },
  } = resData;

 

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo"  src={`${img}/${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4> {/* Join cuisines into a string */}
      <h4 className="rating">{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
