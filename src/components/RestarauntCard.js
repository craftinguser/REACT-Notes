const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {name, img,cuisines,costForTwo,deliveryTime,avgRating,id} = resData
    return (
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={img} />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4> {/* Join the cuisines array into a string */}
        <h4 className="rating">{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;