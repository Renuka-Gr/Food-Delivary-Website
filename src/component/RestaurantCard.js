import {CDN_URL} from "../utils/constants"; 


  const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
      sla,
    } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-50 hover:bg-gray-200">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt={name}/>
        <h3 className="font-bold py-2 text-lg"> {name} </h3>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {costForTwo} </h4>
        <h4> {avgRating} </h4>
        <h4>{sla?.slaString}</h4>
      </div>
    );
  };
  
  export default RestaurantCard;