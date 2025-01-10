const RestaurantCard = (props) => {
  const { resData } = props;

  // Extracting the nested fields from the API response
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

  const img = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={img} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4> {/* Join cuisines into a string */}
      <h4 className="rating">{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
